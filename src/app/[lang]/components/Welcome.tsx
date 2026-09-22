/**
 * Bloque de bienvenida de la página principal.
 * Server Component: recibe los textos ya traducidos por props, no necesita hooks.
 */
import type { Dictionary } from '../dictionaries'

// Se tipa con la sección `home` del diccionario para que las llaves no se inventen.
export default function Welcome({ t }: { t: Dictionary['home'] }) {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{t.welcome}</h1>
      <p className="text-gray-600">{t.description}</p>
      <h2 className="text-xl font-semibold">{t.profile}</h2>
    </section>
  )
}
