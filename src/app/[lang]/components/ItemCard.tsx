/**
 * Tarjeta de un elemento dentro de la lista.
 * Client Component porque lee el diccionario con `useDictionary`.
 */
'use client'

import Link from 'next/link'
import { useDictionary } from '../context/DictionaryContext'
import type { Item } from '../../types/item'

export default function ItemCard({ item }: { item: Item }) {
  const { dictionary, locale } = useDictionary()
  const t = dictionary.items

  return (
    // Un solo <Link> envolviendo la tarjeta: NO se anidan links dentro de links.
    // `locale` siempre va en el href, si no el proxy redirige y se pierde el idioma.
    <Link
      href={`/${locale}/items/${item.id}`}
      className="flex h-full flex-col gap-2 rounded-lg bg-white p-4 text-gray-900 shadow-md transition hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="line-clamp-2 text-sm text-gray-600">{item.description}</p>
      <dl className="mt-auto text-sm text-gray-700">
        <div className="flex gap-1">
          <dt className="font-medium">{t.fields.status}:</dt>
          <dd>{t.status[item.status]}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">{t.fields.category}:</dt>
          <dd>{t.category[item.category]}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">{t.fields.quantity}:</dt>
          <dd>{item.quantity}</dd>
        </div>
      </dl>
      <span className="text-sm text-blue-600">{t.viewDetails}</span>
    </Link>
  )
}
