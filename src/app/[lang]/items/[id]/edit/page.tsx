/**
 * Editar. Es Client Component porque los datos viven en el contexto del cliente.
 *
 * Ojo a la diferencia: en servidor `params` se abre con `await`,
 * en cliente se abre con `use()` de React.
 */
'use client'

import { use } from 'react'
import ItemForm from '../../../components/ItemForm'
import { useItems } from '../../../context/ItemsContext'
import { useDictionary } from '../../../context/DictionaryContext'

type Props = { params: Promise<{ lang: string; id: string }> }

export default function EditItemPage({ params }: Props) {
  const { id } = use(params)
  const { getItem, loaded } = useItems()
  const { dictionary } = useDictionary()
  const t = dictionary.items

  // Hay que esperar a localStorage: si no, el formulario arrancaría vacío
  // y al guardar borraría los datos del elemento.
  if (!loaded) return <main className="p-8">{t.loading}</main>

  const item = getItem(Number(id))
  if (!item) return <main className="p-8">{t.notFound}</main>

  return (
    <main className="flex flex-col gap-6 p-8">
      <h1 className="text-3xl font-bold">{t.editTitle}</h1>
      <ItemForm item={item} />
    </main>
  )
}
