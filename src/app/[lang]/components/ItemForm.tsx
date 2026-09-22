/**
 * Un solo formulario para CREAR y EDITAR:
 *   <ItemForm />            → modo crear
 *   <ItemForm item={item} /> → modo editar (campos precargados)
 *
 * El estado se guarda todo como string (es lo que devuelven los inputs) y se
 * convierte a los tipos reales justo antes de guardar.
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useItems } from '../context/ItemsContext'
import { useDictionary } from '../context/DictionaryContext'
import { CATEGORIES, STATUSES, type Item, type ItemData } from '../../types/item'

const INPUT = 'rounded border bg-white px-3 py-2 text-gray-900'
const ERROR = 'text-sm text-red-600'

export default function ItemForm({ item }: { item?: Item }) {
  const { dictionary, locale } = useDictionary()
  const { addItem, updateItem } = useItems()
  const router = useRouter()
  const t = dictionary.items

  const [form, setForm] = useState({
    name: item?.name ?? '',
    description: item?.description ?? '',
    status: item?.status ?? '',
    category: item?.category ?? '',
    quantity: item ? String(item.quantity) : '',
    imageUrl: item?.imageUrl ?? '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Un solo handler para todos los campos: el atributo `name` dice cuál cambiar.
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function validate() {
    const found: Record<string, string> = {}
    const quantity = Number(form.quantity)

    if (form.name.trim().length < 2) found.name = t.errors.nameMin
    if (!form.description.trim()) found.description = t.errors.description
    if (!form.status) found.status = t.errors.status
    if (!form.category) found.category = t.errors.category
    if (
      form.quantity === '' ||
      !Number.isInteger(quantity) ||
      quantity < 0 ||
      quantity > 100
    ) {
      found.quantity = t.errors.quantity
    }
    return found
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault() // sin esto el navegador recarga la página

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return // hay errores: no guardar

    const data: ItemData = {
      name: form.name.trim(),
      description: form.description.trim(),
      status: form.status as Item['status'],
      category: form.category as Item['category'],
      quantity: Number(form.quantity),
      imageUrl: form.imageUrl.trim(),
    }

    if (item) {
      updateItem(item.id, data)
      router.push(`/${locale}/items/${item.id}`)
    } else {
      const created = addItem(data)
      router.push(`/${locale}/items/${created.id}`)
    }
  }

  return (
    // `noValidate` desactiva la validación del navegador: la hacemos nosotros
    // para poder mostrar los mensajes traducidos.
    <form onSubmit={handleSubmit} noValidate className="flex max-w-xl flex-col gap-4">
      <label className="flex flex-col gap-1">
        {t.fields.name}
        <input name="name" value={form.name} onChange={handleChange} className={INPUT} />
        {errors.name && <span className={ERROR}>{errors.name}</span>}
      </label>

      <label className="flex flex-col gap-1">
        {t.fields.description}
        <textarea
          name="description"
          rows={3}
          value={form.description}
          onChange={handleChange}
          className={INPUT}
        />
        {errors.description && <span className={ERROR}>{errors.description}</span>}
      </label>

      <label className="flex flex-col gap-1">
        {t.fields.status}
        <select name="status" value={form.status} onChange={handleChange} className={INPUT}>
          <option value="">{t.select}</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {t.status[status]}
            </option>
          ))}
        </select>
        {errors.status && <span className={ERROR}>{errors.status}</span>}
      </label>

      <label className="flex flex-col gap-1">
        {t.fields.category}
        <select name="category" value={form.category} onChange={handleChange} className={INPUT}>
          <option value="">{t.select}</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {t.category[category]}
            </option>
          ))}
        </select>
        {errors.category && <span className={ERROR}>{errors.category}</span>}
      </label>

      <label className="flex flex-col gap-1">
        {t.fields.quantity}
        <input
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          className={INPUT}
        />
        {errors.quantity && <span className={ERROR}>{errors.quantity}</span>}
      </label>

      <label className="flex flex-col gap-1">
        {t.fields.imageUrl}
        <input
          name="imageUrl"
          type="url"
          value={form.imageUrl}
          onChange={handleChange}
          className={INPUT}
        />
      </label>

      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {item ? t.save : t.create}
        </button>
        <Link
          href={item ? `/${locale}/items/${item.id}` : `/${locale}/items`}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          {t.cancel}
        </Link>
      </div>
    </form>
  )
}
