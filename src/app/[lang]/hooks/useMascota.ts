/**
 * Atajo para leer el CharactersContext.
 *
 * ¿Para qué existe si podría usar useContext directo en cada componente?
 *   1. Para no repetir `useContext(CharactersContext)` en 6 archivos.
 *   2. Para el chequeo de null: el contexto arranca en `null`, así que sin
 *      esta comprobación TypeScript obligaría a escribir `characters?.` en
 *      todos lados. Aquí se descarta el null una sola vez.
 *   3. Para que el error sea claro: si olvidas envolver con el Provider,
 *      ves este mensaje en vez de un "cannot read property of null".
 *
 * Se usa así, en cualquier Client Component:
 *   const { characters, addCharacter, loading } = useCharacters()
 *
 * ⚠️ Solo funciona en componentes con 'use client' y que estén DENTRO del
 * <CharactersProvider> (que se monta en layout.tsx, así que cubre toda la app).
 */
import { useContext } from 'react'
import { MascotaContext } from '../context/mascotaContext'

export const useMascota = () => {
  const context = useContext(MascotaContext)
  if (!context) {
    // Si ves este error: o falta 'use client', o el componente quedó fuera del Provider.
    throw new Error('useMascota must be used within a MascotaProvider')
  }
  return context // a partir de aquí TypeScript ya sabe que NO es null
}
