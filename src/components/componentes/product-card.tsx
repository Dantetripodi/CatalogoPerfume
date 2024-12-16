'use client'


//import { Button } from '@/ui/button'
import { FavoritesButton } from './favorites-button'
import type { Perfume as Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}

export function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  return (
   <>
        <FavoritesButton
            productId={product.id.toString()}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />  
    </>
  )
}

