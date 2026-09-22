/**
 * Página principal de cada idioma (/es, /en). Demuestra la i18n completa:
 * carga del diccionario en servidor, props tipadas, .map() con key y grid responsive.
 * Server Component: lee el diccionario directamente, sin pasar por el cliente.
 */
import { getDictionary, hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'
import Welcome from './components/Welcome'
import Card from './components/Card'

type Props = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: Props) {
  // `params` es una promesa en el App Router: se espera antes de usar `lang`.
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col gap-8 p-8">
      <Welcome t={dict.home} />

      {/* Grid responsive: 1 columna en móvil, 2 en tablet, 3 en escritorio. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.cards.map((card) => (
          // `key` estable: el título es único dentro del diccionario.
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </main>
  )
}
