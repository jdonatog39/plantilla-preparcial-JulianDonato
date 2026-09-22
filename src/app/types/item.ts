/**
 * Modelo genérico del CRUD. En el parcial: renombra `Item` por tu entidad
 * (Character, Producto, Libro...) y cambia los campos. Todo lo demás
 * (contexto, lista, formulario, detalle) sigue funcionando igual.
 */

// `as const` es lo que permite derivar el tipo de la lista y recorrerla en los <select>.
export const STATUSES = ['active', 'inactive', 'archived'] as const
export const CATEGORIES = ['general', 'featured', 'other'] as const

export type ItemStatus = (typeof STATUSES)[number]
export type ItemCategory = (typeof CATEGORIES)[number]

export interface Item {
  id: number
  name: string
  description: string
  status: ItemStatus
  category: ItemCategory
  quantity: number
  imageUrl: string
}

// Un elemento sin `id`: el id lo asigna el contexto al crear.
export type ItemData = Omit<Item, 'id'>
