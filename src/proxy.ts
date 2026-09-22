/**
 * Proxy de detección de idioma: intercepta las rutas sin prefijo (/, /perfil...)
 * y redirige al idioma correcto (/es, /en). Corre en el edge, antes de renderizar.
 */
import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['es', 'en']
const defaultLocale = 'es'

function getLocale(request: NextRequest): string {
  // 1. La cookie manda: es la preferencia que el usuario eligió a mano y debe recordarse.
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale

  // 2. Si no hay cookie, se usan los idiomas que anuncia el navegador.
  const headers = { 'accept-language': request.headers.get('accept-language') ?? '' }
  const languages = new Negotiator({ headers }).languages()
  try {
    return match(languages, locales, defaultLocale)
  } catch {
    // 3. Si nada coincide (o el header viene mal formado), idioma por defecto.
    return defaultLocale
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Si la URL ya trae idioma se deja pasar tal cual.
  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Se excluyen assets internos, API y archivos con extensión para no redirigirlos.
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
