/**
 * Lista con buscador y filtro. El estado de los filtros vive AQUÍ y baja a los
 * hijos por props: por eso SearchBar y StatusFilter no guardan estado propio.
 */
'use client'

import { useState } from 'react'
import { useItems } from '../context/ItemsContext'
import { useDictionary } from '../context/DictionaryContext'
import ItemCard from './ItemCard'
import SearchBar from './SearchBar'
import StatusFilter from './StatusFilter'

const GRID = 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'

export default function ItemList() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const { items, loaded } = useItems()
  const { dictionary } = useDictionary()
  const t = dictionary.items

  // Mientras se lee localStorage: cajas grises en vez de un salto brusco.
  if (!loaded) {
    return (
      <ul className={GRID} aria-label={t.loading}>
        {[1, 2, 3].map((n) => (
          <li key={n} className="h-48 animate-pulse rounded-lg bg-gray-200" />
        ))}
      </ul>
    )
  }

  if (items.length === 0) return <p>{t.empty}</p>

  // Los dos filtros se combinan: nombre Y estado.
  const filtered = items.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(search.trim().toLowerCase())
    const matchesStatus = status === 'all' || item.status === status
    return matchesName && matchesStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <SearchBar value={search} onChange={setSearch} />
        <StatusFilter value={status} onChange={setStatus} />
      </div>

      {filtered.length === 0 ? (
        <p>{t.noResults}</p>
      ) : (
        <ul className={GRID}>
          {/* `key` estable: el id, nunca el índice del array. */}
          {filtered.map((item) => (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
