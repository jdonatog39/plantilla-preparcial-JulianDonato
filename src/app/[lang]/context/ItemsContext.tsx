/**
 * Contexto del CRUD. Guarda la lista en memoria y la persiste en localStorage
 * reutilizando el hook `useLocalStorage`.
 *
 * Flujo: el servidor trae los datos iniciales (`getItems`) → llegan como
 * `initialItems` → al montar, si hay algo guardado en localStorage, eso gana.
 */
'use client'

import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { Item, ItemData } from '../../types/item'

interface ItemsContextValue {
  items: Item[]
  // `loaded` es false hasta que se leyó localStorage: úsalo para mostrar el skeleton
  // y para no renderizar un formulario de edición con datos vacíos.
  loaded: boolean
  getItem: (id: number) => Item | undefined
  addItem: (data: ItemData) => Item
  updateItem: (id: number, data: ItemData) => void
  deleteItem: (id: number) => void
}

const ItemsContext = createContext<ItemsContextValue | null>(null)

// Hook de acceso: falla claro si se usa fuera del Provider.
export function useItems() {
  const context = useContext(ItemsContext)
  if (!context) {
    throw new Error('useItems debe usarse dentro de un <ItemsProvider>')
  }
  return context
}

export function ItemsProvider({
  children,
  initialItems,
}: {
  children: React.ReactNode
  initialItems: Item[]
}) {
  const [items, setItems, loaded] = useLocalStorage<Item[]>('items', initialItems)

  function getItem(id: number) {
    return items.find((item) => item.id === id)
  }

  // Devuelve el creado para poder navegar a su detalle desde el formulario.
  function addItem(data: ItemData): Item {
    const nextId = items.reduce((max, item) => Math.max(max, item.id), 0) + 1
    const created: Item = { ...data, id: nextId }
    setItems((prev) => [...prev, created])
    return created
  }

  function updateItem(id: number, data: ItemData) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...data } : item)))
  }

  function deleteItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <ItemsContext.Provider value={{ items, loaded, getItem, addItem, updateItem, deleteItem }}>
      {children}
    </ItemsContext.Provider>
  )
}
