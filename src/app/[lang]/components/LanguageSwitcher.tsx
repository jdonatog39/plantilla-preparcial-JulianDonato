/**
 * Selector de idioma. Guarda la preferencia en la cookie NEXT_LOCALE y
 * reescribe el primer segmento de la URL para quedarse en la misma página.
 * Client Component: necesita eventos (onChange) y acceso a document.cookie.
 */
'use client'

import { usePathname, useRouter } from 'next/navigation'

type Props = {
  currentLang: string
  label: string
  languageNames: Record<string, string>
}

export default function LanguageSwitcher({ currentLang, label, languageNames }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  function changeLanguage(newLang: string) {
    // Persistencia: la misma cookie que lee el proxy, así /  ya recuerda el idioma.
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`

    // Solo se cambia el segmento del idioma: /es/perfil -> /en/perfil.
    const segments = pathname.split('/')
    segments[1] = newLang
    router.push(segments.join('/'))
  }

  return (
    <label className="flex items-center gap-2">
      {label}
      <select
        value={currentLang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="rounded border px-2 py-1"
      >
        {/* Los nombres de los idiomas también salen del diccionario. */}
        {Object.entries(languageNames).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
    </label>
  )
}
