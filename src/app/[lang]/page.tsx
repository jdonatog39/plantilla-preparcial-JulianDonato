// Página principal donde se listan los personajes de Rick and Morty a través de cardlist
/**
 * HOME de cada idioma: /es y /en.
 * Server Component (no tiene 'use client'), por eso puede ser `async` y leer
 * el diccionario directamente en el servidor.
 *
 * Reparto de responsabilidades: esta página solo pone el título; la parte
 * interactiva (buscador, filtro, grid) está en <CharacterList />, que sí es
 * cliente. Ese es el patrón: servidor por fuera, cliente solo donde hace falta.
 *
 * NUEVA API: este archivo prácticamente no cambia.
 */
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import { ItemList } from './components/ItemList'
type Props = {
  params: Promise<{ lang: string }> // Next 16: params es una promesa
}

export default async function Page({ params }: Props) {
  const { lang } = await params

  // `hasLocale` es un type guard: además de validar, convierte `lang`
  // de `string` a `Locale`, que es lo que espera getDictionary.
  if (!hasLocale(lang)) notFound()

  const dictionary = await getDictionary(lang)

  return (
    <main className="grid grid-cols-1 gap-4">
      <h1 className="mb-4 text-2xl font-bold">{dictionary.home.welcome}</h1>
      {/* ItemList no recibe props: saca los datos del contexto. */}
      <ItemList />
    </main>
  )
}
