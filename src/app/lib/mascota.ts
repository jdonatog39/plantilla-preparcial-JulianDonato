/**
 * Capa de acceso a la API: trae los datos crudos y los convierte al modelo `Character`.
 *
 * ⚠️ OJO — ESTE ARCHIVO HOY NO SE USA.
 * El fetch que realmente corre está copiado dentro de `src/app/[lang]/layout.tsx`.
 * Si cambias solo este archivo, la app NO se entera. Tienes dos opciones:
 *   a) Cambiar el fetch de layout.tsx (es el que manda hoy), o
 *   b) Mejor: en layout.tsx borrar su función `getCharacters` e importar
 *      `getCharactersFromApi` de aquí, envuelto en try/catch.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ NUEVA API → este es el patrón correcto y el que conviene explicar    │
 * │ en el parcial: un tipo para lo que devuelve la API, un tipo para lo  │
 * │ que usa mi app, y una función que traduce del primero al segundo.    │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import type { mascota  } from '../types/mascota'

// NUEVA API: cambia la URL. Si la API pagina, aquí se le agregan los query params
// (ej: `?page=1&limit=20`).
const API_URL = 'https://dog.ceo/api/breeds/list/all'

/**
 * La forma EXACTA en que la API devuelve cada elemento.
 * Fíjate que no es igual a `Character`: aquí `origin` es un objeto y
 * `episode` es un array. Por eso hace falta la función `toCharacter`.
 *
 * NUEVA API: abre la URL en el navegador, mira el JSON y copia su forma aquí.
 */
interface ApiCharacter {
    id: number
    message: string[],
    status: string,

                       // ← array de URLs de episodios
}

/**
 * La envoltura de la respuesta. Rick & Morty devuelve { info, results }.
 * NUEVA API: puede devolver el array pelado (entonces sería `ApiCharacter[]`),
 * o usar otro nombre (`data`, `items`, `docs`...). Ajústalo.
 */
interface ApiResponse {
  message: ApiCharacter[],
  status: string,
  results: ApiCharacter[]
}

/**
 * EL ADAPTADOR: recibe un elemento como viene de la API y devuelve uno como
 * lo necesita mi app. Aquí es donde se aplanan objetos y se calculan campos.
 *
 * NUEVA API: esta función es la que más cambia. Es solo "de este campo saco este otro".
 */
function toCharacter(api: ApiCharacter): mascota {
  return {
    id: api.id,
    species: api.message[0], // como la API devuelve un objeto con todas las razas, tomo la primera como ejemplo
    image: '', // la API de dog.ceo no devuelve la URL de la imagen en esta llamada, se puede obtener con otra llamada si se desea
  }
}

/**
 * Trae y adapta la lista completa.
 * Lanza error si la respuesta no es 2xx; quien la llame decide qué hacer con eso
 * (en layout.tsx se atrapa con try/catch para mostrar el mensaje de error).
 */
export async function getCharactersFromApi(): Promise<mascota []> {
  const res = await fetch(API_URL)
  // `fetch` NO lanza error con un 404 o un 500: hay que revisar `res.ok` a mano.
  if (!res.ok) throw new Error(`Error ${res.status} al consultar la API`)

  // `as ApiResponse` porque `res.json()` devuelve `any`: le decimos a TS qué esperar.
  const data = (await res.json()) as ApiResponse
  return data.results.map(toCharacter) // adapta cada elemento de la lista
}
