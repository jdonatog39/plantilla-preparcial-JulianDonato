# Plantilla Preparcial — i18n con Next.js App Router

Plantilla base de internacionalización: enrutamiento por prefijo de idioma (`/es`, `/en`),
detección automática, diccionarios JSON y persistencia de la preferencia del usuario.

Incluye además un **esqueleto de CRUD genérico** (`/[lang]/items`) con una entidad neutra
`Item`: lista con buscador y filtro, crear, editar, ver detalle y eliminar, todo traducido y
persistido en `localStorage`. En el parcial solo renombras la entidad y cambias los campos.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev     # desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # ESLint
```

Al entrar a `http://localhost:3000` el proxy redirige a `/es` o `/en` según tu navegador.

## Requisitos del preparcial y dónde se cumplen

| Requisito | Archivo |
| --- | --- |
| Enrutamiento dinámico por prefijo de idioma (`/es`, `/en`) | `src/app/[lang]/` (toda la app vive aquí) |
| Detección de idioma por Proxy con redirección automática | `src/proxy.ts` |
| Diccionarios `es.json` / `en.json` con carga asíncrona en servidor | `src/app/[lang]/dictionaries.ts` + `src/app/[lang]/dictionaries/` |
| Persistencia de la preferencia de idioma | cookie `NEXT_LOCALE`: se escribe en `LanguageSwitcher.tsx` y se lee en `proxy.ts` |
| Atributo `lang` dinámico en el layout principal | `src/app/[lang]/layout.tsx` (`<html lang={lang}>`) |
| Metadata traducida | `generateMetadata` en `src/app/[lang]/layout.tsx` |
| 404 para idiomas no soportados (`/fr`) | `hasLocale` + `notFound()` en `layout.tsx` y `page.tsx` |
| Cero texto quemado | todos los textos salen de `dictionaries/*.json` |
| Diccionario accesible desde componentes cliente | `src/app/[lang]/context/DictionaryContext.tsx` (hook `useDictionary`) |
| Componentes que demuestran la i18n | `components/Welcome.tsx`, `components/Card.tsx`, `app/[lang]/page.tsx` |
| Props tipadas, `.map()` con `key`, grid y flexbox | `components/Card.tsx` + `app/[lang]/page.tsx` |
| Hook genérico reutilizable | `src/app/[lang]/hooks/useLocalStorage.ts` |

## Esqueleto CRUD (`/[lang]/items`)

| Archivo | Qué hace |
| --- | --- |
| `src/app/types/item.ts` | El modelo `Item` + las listas `STATUSES` y `CATEGORIES` |
| `src/app/lib/items.ts` | `getItems()` — datos iniciales. **Aquí va tu `fetch` en el parcial** |
| `src/app/[lang]/items/layout.tsx` | Server Component: trae los datos y monta el `ItemsProvider` |
| `src/app/[lang]/context/ItemsContext.tsx` | El CRUD (`addItem`, `updateItem`, `deleteItem`, `getItem`) + `useItems()` |
| `src/app/[lang]/components/ItemList.tsx` | Grid + estado de buscador y filtro |
| `src/app/[lang]/components/ItemCard.tsx` | Tarjeta de la lista |
| `src/app/[lang]/components/ItemDetail.tsx` | Detalle + editar + eliminar con confirmación |
| `src/app/[lang]/components/ItemForm.tsx` | **Un solo formulario** para crear y editar, con validación |
| `src/app/[lang]/components/SearchBar.tsx` · `StatusFilter.tsx` | Controles controlados por el padre |

Rutas: `/[lang]/items`, `/[lang]/items/new`, `/[lang]/items/[id]`, `/[lang]/items/[id]/edit`.

Persistencia: el contexto usa `useLocalStorage`. Los datos de `getItems()` son solo la carga
inicial; una vez que existe la llave `items` en `localStorage`, **esa gana**. Si ves datos
viejos mientras desarrollas, bórrala desde DevTools → Application → Local Storage.

### Cómo adaptarlo a tu entidad

1. **`src/app/types/item.ts`** — renombra `Item` y cambia los campos. Si tu entidad no tiene
   `status` o `category`, cambia también `STATUSES` / `CATEGORIES` (son las que llenan los
   `<select>` y el filtro).
2. **`src/app/lib/items.ts`** — reemplaza el `SEED` por el `fetch` real (el ejemplo comentado
   en el archivo muestra cómo mapear la respuesta de la API al tipo).
3. **Diccionarios** — en la sección `items` de `es.json` y `en.json`: ajusta `fields`,
   `status`, `category` y `errors`. Las llaves de `status`/`category` deben coincidir
   exactamente con los valores de las constantes del paso 1.
4. **`ItemForm.tsx`** — agrega o quita campos. Por cada campo nuevo son 3 cosas: el estado
   inicial, la regla en `validate()`, el `<label>`, y **no olvides agregarlo al objeto `data`**
   antes de guardar (es el error más común: el input funciona pero el dato no se persiste).
5. **`ItemCard.tsx` / `ItemDetail.tsx`** — muestra los campos nuevos.

Los valores se guardan en inglés (`'active'`) y se muestran traducidos
(`dictionary.items.status[item.status]`): ese es el patrón a replicar para cualquier enum.

## Cómo agregar un idioma

1. Crea `src/app/[lang]/dictionaries/<code>.json` con las mismas llaves que `es.json`.
2. Regístralo en el objeto `dictionaries` de `src/app/[lang]/dictionaries.ts`.
3. Agrégalo a `locales` en `src/proxy.ts` y a `generateStaticParams` en `layout.tsx`.
4. Añade su nombre en la sección `header.languages` de cada diccionario.

## Cómo agregar texto nuevo

Añade la llave en **ambos** diccionarios (deben ser idénticos en estructura) y léela desde
`dict.<seccion>.<llave>`. Desde un Server Component usa `getDictionary`; desde un Client
Component usa `useDictionary()`.
