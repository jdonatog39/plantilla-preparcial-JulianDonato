// Context for managing mascota (pet) state throughout the application.
"use client"
import { createContext, useEffect, useState } from 'react'
import type { mascota } from '../../types/mascota'

export type CharacterData = Omit<mascota, 'id'>

interface MascotaContextType {
  mascota: mascota | null
  setMascota: (mascota: mascota | null) => void
}

export const MascotaContext = createContext<MascotaContextType>({
  mascota: null,
  setMascota: () => {}
})

interface CharactersProviderProps {
  children: React.ReactNode
  initialMascotas: mascota[]  // lo que trajo el servidor
  apiFailed: boolean              // si el fetch del servidor falló
}

export const MascotaProvider = ({ children, initialMascotas, apiFailed }: CharactersProviderProps) => {
  const [mascotas, setMascotas] = useState<mascota[]>(initialMascotas)
  const [mascota, setMascota] = useState<mascota | null>(null)

  return (
    <MascotaContext.Provider value={{ mascota, setMascota }}>
      {children}
    </MascotaContext.Provider>
  )
}

export default MascotaContext