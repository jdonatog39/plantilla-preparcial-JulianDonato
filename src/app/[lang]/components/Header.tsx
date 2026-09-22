/**
 * Cabecera: nombre de la app, navegación y selector de idioma.
 * Server Component: recibe los textos por props; la parte interactiva
 * vive dentro de LanguageSwitcher, que sí es cliente.
 */
import Link from 'next/link'
import type { Dictionary, Locale } from '../dictionaries'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ lang, t }: { lang: Locale; t: Dictionary['header'] }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b p-4">
      {/* Hasta el nombre de la app sale del diccionario: cero texto quemado. */}
      <Link href={`/${lang}`} className="font-bold">
        {t.appName}
      </Link>

      <div className="flex items-center gap-4">
        {/* Todo href lleva el locale delante, si no el proxy redirige. */}
        <Link href={`/${lang}`} className="text-blue-600 hover:underline">
          {t.home}
        </Link>
        <Link href={`/${lang}/items`} className="text-blue-600 hover:underline">
          {t.items}
        </Link>
        <LanguageSwitcher currentLang={lang} label={t.languageLabel} languageNames={t.languages} />
      </div>
    </header>
  )
}
