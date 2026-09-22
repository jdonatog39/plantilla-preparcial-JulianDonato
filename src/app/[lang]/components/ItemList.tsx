/**
 * LA LISTA: buscador + filtro + grid de tarjetas.
 *
 * El estado de los filtros (`search`, `status`) vive AQUÍ, no en los hijos.
 * SearchBar y StatusFilter son "controlados": reciben `value` y `onChange`
 * y no guardan nada. Eso se llama "levantar el estado" (lifting state up)
 * y es necesario porque los dos filtros se combinan en un solo `.filter()`.
 *
 * Client Component: usa useState y lee el contexto.
 *
 * NUEVA API: lo único que cambia es por qué campo buscas (hoy `c.name`)
 * y por qué campo filtras (hoy `c.status`).
 */
'use client'

import { useState } from 'react'
import { useMascota } from '../hooks/useMascota'
import { useDictionary } from '../context/DictionaryContext'
import Card from './Card'
import Link from 'next/link'

export function ItemList() {
  const [search, setSearch] = useState('')      // texto del buscador
  const [status, setStatus] = useState('all')   // 'all' = sin filtrar
  const { dictionary } = useDictionary()
  const { mascota } = useMascota()
  // 1 columna en celular, 2 en tablet, 4 en escritorio
  // (Tailwind es mobile-first: lo que va sin prefijo aplica a móvil,
  //  `sm:` de tablet para arriba, `lg:` de escritorio para arriba.)
  const grid = 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'

 
  return (
    <ul className={grid}>
      
    </ul>
  )
}
