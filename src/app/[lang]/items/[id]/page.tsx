/**
 * Detalle. `[id]` en el nombre de la carpeta = segmento dinámico;
 * llega dentro de `params` y SIEMPRE como string, por eso el Number(id).
 */
import { notFound } from 'next/navigation'
import { hasLocale } from '../../dictionaries'
import ItemDetail from '../../components/ItemDetail'

type Props = { params: Promise<{ lang: string; id: string }> }

export default async function ItemPage({ params }: Props) {
  const { lang, id } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <main className="p-8">
      <ItemDetail id={Number(id)} />
    </main>
  )
}
