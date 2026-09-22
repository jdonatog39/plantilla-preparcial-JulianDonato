/**
 * Card genérica y reutilizable: solo sabe pintar un título, una descripción
 * y contenido opcional. No conoce el dominio ni el diccionario.
 * Server Component: es presentacional, no usa estado ni eventos.
 */

type CardProps = {
  title: string
  description: string
  // `children` opcional para poder meter botones u otro contenido dentro de la card.
  children?: React.ReactNode
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <article className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {children}
    </article>
  )
}
