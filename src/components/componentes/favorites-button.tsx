'use client'

import { Heart } from 'lucide-react'
import { Button } from '@/ui/button'

interface FavoritesButtonProps {
  productId: number
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function FavoritesButton({ productId, isFavorite, onToggleFavorite }: FavoritesButtonProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => onToggleFavorite(productId)}
      className="m-1"
    >
      <Heart className={isFavorite ? "fill-primary" : "fill-none"} size={16} />
      {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    </Button>
  )
}