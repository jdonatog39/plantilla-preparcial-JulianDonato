/**
 * Contexto que deja el diccionario disponible para cualquier componente cliente.
 * Client Component: usa createContext/useContext, que solo existen en el cliente.
 */
'use client'

// `import type`: solo se importan los tipos, así el `server-only` de dictionaries.ts
// no arrastra código de servidor al bundle del cliente.
import type { Dictionary, Locale } from '../dictionaries'
import { createContext, useContext } from 'react'

export const DictionaryContext = createContext<{
  dictionary: Dictionary
  locale: Locale
} | null>(null)

// Hook de acceso: falla claro si se usa fuera del Provider.
export const useDictionary = () => {
  const context = useContext(DictionaryContext)
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider')
  }
  return context
}

// El layout (servidor) carga el diccionario y lo inyecta aquí una sola vez.
export const DictionaryProvider = ({
  children,
  dictionary,
  locale,
}: {
  children: React.ReactNode
  dictionary: Dictionary
  locale: Locale
}) => {
  return (
    <DictionaryContext.Provider value={{ dictionary, locale }}>
      {children}
    </DictionaryContext.Provider>
  )
}
