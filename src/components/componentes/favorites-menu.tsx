'use client'

import { ShoppingBag, X } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from '@/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Badge } from "@/components/ui/badge"


import type { Perfume  } from '@/types/product'
import { CotizarButton } from './CotizarButton'


interface FavoritesMenuProps {
  perfumes: Perfume[]
  onRemoveFavorite: (id: number) => void
}

export function FavoritesMenu({ perfumes, onRemoveFavorite }: FavoritesMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {perfumes.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {perfumes.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mis Favoritos ({perfumes.length})</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
          {perfumes.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemoveFavorite(product.id)}
              >
                <X className="h-4 w-4" />
              </Button> 
             
                
            </div>
           ))}
          {perfumes.length === 0 && (
            <p className="text-center text-muted-foreground py-4">
              No hay productos en favoritos
            </p>
          )}
        </ScrollArea> 
        <CotizarButton 
          perfumes={[...perfumes]} // Pass the 	product
          name={perfumes.name}
          price={perfumes.price}/>
    </SheetContent>
</Sheet>
)
}

