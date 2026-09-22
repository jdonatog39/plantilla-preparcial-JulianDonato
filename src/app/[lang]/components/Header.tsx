/**
 * Cabecera de la aplicación: nombre de la app, enlace para crear y selector de idioma.
 * Server Component: recibe los textos por props; la parte interactiva
 * vive dentro de LanguageSwitcher, que sí es cliente.
 *
 * Fíjate que NO usa useDictionary(): al ser Server Component recibe los textos
 * por la prop `t` (que es dict.header). Es el patrón "servidor por fuera,
 * cliente solo en la islita que necesita eventos".
 *
 * NUEVA API: aquí solo agregas links si el parcial pide páginas nuevas
 * (ej: favoritos). Cada link nuevo necesita su texto en los dos JSON.
 */
import Link from 'next/link'
import type { Dictionary, Locale } from '../dictionaries'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ lang, t }: { lang: Locale; t: Dictionary['header'] }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b p-4" style={{ backgroundColor: '#FF6B35' }}>
      {/* imagen de la app centrada */}

      <img className="flex items-center h-12 w-12 object-center rounded-full" src="/images/pawsome-advice-logo.jpg" />
      {/* El nombre de la app lleva a la página principal*/}

      <div className="flex items-center gap-4">
        
        <LanguageSwitcher currentLang={lang} label={t.languageLabel} languageNames={t.languages} />
      </div>
    </header>
  )
}