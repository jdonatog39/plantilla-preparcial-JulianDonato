/**
 * Layout anidado: monta el ItemsProvider solo para /[lang]/items/**.
 * Así el resto de la app no carga el contexto del CRUD.
 *
 * Server Component: aquí es donde se traen los datos iniciales.
 */
import { getItems } from '../../lib/items'
import { ItemsProvider } from '../context/ItemsContext'

export default async function ItemsLayout({ children }: { children: React.ReactNode }) {
  const initialItems = await getItems()

  return <ItemsProvider initialItems={initialItems}>{children}</ItemsProvider>
}
