import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // Combina clases condicionales (clsx) y resuelve conflictos de Tailwind (twMerge).
  return twMerge(clsx(inputs))
}
