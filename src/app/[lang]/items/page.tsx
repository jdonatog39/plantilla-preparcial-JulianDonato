/**
 * Lista de elementos. Server Component: lee el diccionario en el servidor y
 * delega la parte interactiva (buscador, filtro) al cliente.
 */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import ItemList from '../components/ItemList'

type Props = { params: Promise<{ lang: string }> }

export default async function ItemsPage({ params }: Props) {
  // En el App Router `params` es una promesa: hay que esperarla.
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col gap-6 p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">{dict.items.title}</h1>
        <Link
          href={`/${lang}/items/new`}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {dict.items.new}
        </Link>
      </div>

      <ItemList />
    </main>
  )
}
