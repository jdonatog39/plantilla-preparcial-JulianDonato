// Tarjeta de un personaje de Rick and Morty (datos consumidos de la API de Rick and Morty)
/**
 * Recibe un personaje por props y lo pinta. No pide datos ni los modifica:
 * es "presentacional". Lo único que necesita del contexto es el diccionario,
 * y por eso tiene que ser Client Component.
 *
 * NUEVA API: aquí decides QUÉ campos se ven en la tarjeta (los importantes;
 * el resto va en el detalle). Cada línea nueva necesita su etiqueta en los JSON.
 */
'use client'

import Link from 'next/link'
import type { mascota } from '../../types/mascota'
import { useDictionary } from '../context/DictionaryContext'

export default function ItemCard({ mascota }: { mascota: mascota }) {
  const { dictionary, locale } = useDictionary()

  return (
    // `locale` SIEMPRE en el href. Si pones "/characters/1" sin idioma,
    // el proxy te redirige y pierdes el idioma actual.
      <article className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md hover:shadow-lg">
        {/* <img> normal en vez de <Image> de Next: no requiere configurar
            los dominios permitidos en next.config.ts. `alt` es obligatorio
            por accesibilidad. */}
        <img src={mascota.image} alt={mascota.species} className="w-full rounded-md" />
        <h2 className="text-lg font-bold">{mascota.species}</h2>

      </article>
  )
}
