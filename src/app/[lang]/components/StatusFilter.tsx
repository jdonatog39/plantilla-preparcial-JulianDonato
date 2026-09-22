/**
 * Filtro por estado. También controlado por el padre.
 *
 * Patrón clave de i18n: el `value` viaja en inglés (como se guarda en el modelo)
 * y el texto visible sale traducido del diccionario.
 */
'use client'

import { useDictionary } from '../context/DictionaryContext'
import { STATUSES } from '../../types/item'

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function StatusFilter({ value, onChange }: Props) {
  const { dictionary } = useDictionary()

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={dictionary.items.fields.status}
      className="rounded border bg-white px-3 py-2 text-gray-900"
    >
      <option value="all">{dictionary.items.allStatuses}</option>
      {STATUSES.map((status) => (
        <option key={status} value={status}>
          {dictionary.items.status[status]}
        </option>
      ))}
    </select>
  )
}
