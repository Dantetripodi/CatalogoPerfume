'use client'


//import { Button } from '@/ui/button'
import { FavoritesButton } from './favorites-button'
import type { Perfume } from '@/types/product'

interface ProductCardProps {
  perfumes: Perfume[]
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function ProductCard({ perfumes , isFavorite, onToggleFavorite }: ProductCardProps) {
  return (
   <>
        <FavoritesButton
            productId={perfumes[0].id}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />  
    </>
  )
}

