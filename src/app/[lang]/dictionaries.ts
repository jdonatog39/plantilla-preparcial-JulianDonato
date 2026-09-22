/**
 * Carga asíncrona de los diccionarios de idioma y tipos derivados de ellos.
 * Solo servidor: los JSON se resuelven en el server y nunca se mandan al bundle del cliente.
 */
// `server-only` rompe el build si alguien importa este archivo desde un Client Component.
import 'server-only'

// Imports dinámicos: cada idioma se carga bajo demanda, no los dos a la vez.
const dictionaries = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

// El tipo del diccionario sale del propio JSON: si agregas una llave, el tipo se actualiza solo.
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['es']>>

// Type guard: convierte el string de la URL en un `Locale` válido o descarta la ruta.
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
