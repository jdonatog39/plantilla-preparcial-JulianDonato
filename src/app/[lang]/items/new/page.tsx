/**
 * Crear elemento. Sin prop `item`, el formulario arranca vacío (modo crear).
 */
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../../dictionaries'
import ItemForm from '../../components/ItemForm'

type Props = { params: Promise<{ lang: string }> }

export default async function NewItemPage({ params }: Props) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col gap-6 p-8">
      <h1 className="text-3xl font-bold">{dict.items.createTitle}</h1>
      <ItemForm />
    </main>
  )
}
