/**
 * Detalle de un elemento + acciones (editar / eliminar).
 *
 * La confirmación de borrado se hace con estado, NO con `confirm()`:
 * los diálogos nativos del navegador bloquean la página y no se pueden traducir.
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useItems } from '../context/ItemsContext'
import { useDictionary } from '../context/DictionaryContext'

export default function ItemDetail({ id }: { id: number }) {
  // Todos los hooks van arriba, antes de cualquier `return` condicional.
  const { getItem, deleteItem, loaded } = useItems()
  const { dictionary, locale } = useDictionary()
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const t = dictionary.items

  if (!loaded) return <p>{t.loading}</p>

  const item = getItem(id)
  if (!item) return <p>{t.notFound}</p>

  function handleDelete() {
    deleteItem(id)
    // Volver a la lista: si nos quedáramos aquí, la página quedaría huérfana.
    router.push(`/${locale}/items`)
  }

  return (
    <article className="flex max-w-xl flex-col gap-3 rounded-lg bg-white p-6 text-gray-900 shadow-md">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <p className="text-gray-600">{item.description}</p>

      <dl className="flex flex-col gap-1">
        <div className="flex gap-2">
          <dt className="font-medium">{t.fields.status}:</dt>
          <dd>{t.status[item.status]}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">{t.fields.category}:</dt>
          <dd>{t.category[item.category]}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">{t.fields.quantity}:</dt>
          <dd>{item.quantity}</dd>
        </div>
      </dl>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Link
          href={`/${locale}/items/${item.id}/edit`}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {t.edit}
        </Link>

        {confirming ? (
          <>
            <span className="text-sm">{t.confirmDelete}</span>
            <button
              onClick={handleDelete}
              className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
            >
              {t.confirm}
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="rounded border px-3 py-2 hover:bg-gray-100"
            >
              {t.cancel}
            </button>
          </>
        ) : (
          <button
            onClick={() => setConfirming(true)}
            className="rounded border border-red-600 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            {t.delete}
          </button>
        )}

        <Link href={`/${locale}/items`} className="px-2 text-blue-600 hover:underline">
          {t.back}
        </Link>
      </div>
    </article>
  )
}
