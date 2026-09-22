/**
 * Fuente de datos inicial. Es asíncrona a propósito: así en el parcial solo
 * reemplazas el cuerpo por un `fetch` real sin tocar nada más.
 *
 *   export async function getItems(): Promise<Item[]> {
 *     const res = await fetch('https://api.ejemplo.com/items')
 *     if (!res.ok) throw new Error(`Error ${res.status}`)
 *     const data = await res.json()
 *     return data.results.map(toItem)   // mapea la forma de la API a `Item`
 *   }
 */
import type { Item } from '../types/item'

const SEED: Item[] = [
  {
    id: 1,
    name: 'Elemento de ejemplo',
    description: 'Borra estos datos de ejemplo y trae los tuyos desde la API.',
    status: 'active',
    category: 'featured',
    quantity: 12,
    imageUrl: '',
  },
  {
    id: 2,
    name: 'Segundo elemento',
    description: 'Sirve para ver el grid, el buscador y el filtro funcionando.',
    status: 'inactive',
    category: 'general',
    quantity: 3,
    imageUrl: '',
  },
  {
    id: 3,
    name: 'Tercer elemento',
    description: 'Prueba a editarlo o eliminarlo: los cambios persisten en localStorage.',
    status: 'archived',
    category: 'other',
    quantity: 0,
    imageUrl: '',
  },
]

export async function getItems(): Promise<Item[]> {
  return SEED
}
