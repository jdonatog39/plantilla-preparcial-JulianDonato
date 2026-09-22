/**
 * Input de búsqueda. Componente *controlado*: no guarda estado propio,
 * el valor y el setter viven en el padre (ItemList).
 */
'use client'

import { useDictionary } from '../context/DictionaryContext'

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  const { dictionary } = useDictionary()

  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      // Hasta el placeholder sale del diccionario.
      placeholder={dictionary.items.searchPlaceholder}
      aria-label={dictionary.items.searchPlaceholder}
      className="flex-1 rounded border bg-white px-3 py-2 text-gray-900"
    />
  )
}
