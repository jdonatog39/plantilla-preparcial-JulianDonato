import type { Dictionary, Locale } from '../dictionaries'
import Link from 'next/link'
//footer de la pagina web

export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm opacity-70" style={{ backgroundColor: '#2E4053' }}>
      &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
    </footer>
  )
}