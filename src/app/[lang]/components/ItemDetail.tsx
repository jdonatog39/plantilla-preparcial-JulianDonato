/**
 * Detalle de un elemento + acciones (editar / eliminar).
 *
 * La confirmación de borrado se hace con estado, NO con `confirm()`:
 * los diálogos nativos del navegador bloquean la página y no se pueden traducir.
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MascotaContext } from '../context/mascotaContext'
import { useDictionary } from '../context/DictionaryContext'

export default function ItemDetail({ id }: { id: number }) {
  // Todos los hooks van arriba, antes de cualquier `return` condicional.
  const { dictionary, locale } = useDictionary()
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const t = dictionary.items

  return (
    <p>{t.loading}</p>
  )
}