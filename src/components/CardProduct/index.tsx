'use client'

import { Vehicle } from "@/interfaces/Vehicle"
import { formatCurrency } from "@/utils/formatCurrency"
import { useRouter } from "next/navigation"

interface CardProductProps {
  product: Vehicle
}

export function CardProduct({ product }: CardProductProps) {
  const router = useRouter()

  return (
    <div className="w-full max-w-[360px] bg-gray-100" onClick={() => router.push(`/vehicles/${product.id}`)}>
      <img src={!!product.vehicleImage?.length ? product.vehicleImage[0]?.url_image : '/imgs/r3.png'} alt="" />
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-1">{`${product.brand?.name} ${product.model?.name}`}</h2>
        <span className="text-lg">{formatCurrency(product.price)}</span>
      </div>
    </div>
  )
}
