/**
 * Hook genérico para guardar cualquier valor en localStorage y recuperarlo al volver.
 * Solo para Client Components: localStorage no existe en el servidor.
 */
import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)
  // `loaded` evita pisar lo guardado con el valor inicial durante la hidratación.
  const [loaded, setLoaded] = useState(false)

  // Leer al abrir la página. Se hace en un efecto (y no en el estado inicial) a propósito:
  // localStorage no existe en el servidor, así que leerlo antes del montaje rompería la hidratación.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(key)
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lectura post-montaje intencional, ver nota de arriba
      if (saved) setValue(JSON.parse(saved) as T)
    } catch (error) {
      console.warn(`Error leyendo "${key}" de localStorage:`, error)
    } finally {
      setLoaded(true)
    }
  }, [key])

  // Guardar cada vez que cambia (solo después de haber leído)
  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error guardando "${key}" en localStorage:`, error)
    }
  }, [key, value, loaded])

  return [value, setValue, loaded] as const
}
