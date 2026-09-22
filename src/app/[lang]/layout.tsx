/**
 * Layout raíz de cada idioma. Valida el `lang` de la URL, carga el diccionario
 * en el servidor y lo reparte al árbol por medio del DictionaryProvider.
 * Server Component: necesita `await params` y leer los JSON sin enviarlos al cliente.
 */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import { DictionaryProvider } from './context/DictionaryContext'
import Header from './components/Header'
import '../globals.css'

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

// Prerenderiza /es y /en en build; son los únicos idiomas soportados.
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

// El título y la descripción también se traducen, no solo el contenido.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return { title: dict.metadata.title, description: dict.metadata.description }
}

export default async function RootLayout({ children, params }: Props) {
  // En el App Router `params` es una promesa: hay que esperarla antes de leer `lang`.
  const { lang } = await params

  // Un idioma que no existe (por ejemplo /fr) debe dar 404, no un error de runtime.
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    // `lang` dinámico: importa para accesibilidad y para el SEO.
    <html lang={lang}>
      <body>
        <DictionaryProvider dictionary={dict} locale={lang}>
          <Header lang={lang} t={dict.header} />
          {children}
        </DictionaryProvider>
      </body>
    </html>
  )
}
