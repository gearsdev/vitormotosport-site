/* eslint-disable @next/next/no-img-element */
'use client'

import { Vehicle } from "@/interfaces/Vehicle"
import { formatCurrency } from "@/utils/formatCurrency"
import { useRouter } from "next/navigation"

interface CardProductProps extends React.HTMLAttributes<HTMLDivElement>{
  product: Vehicle
}

export function CardProduct({ product, ...rest }: CardProductProps) {
  const router = useRouter()

  return (
    <div {...rest} className="flex-1 h-full bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition" onClick={() => router.push(`/vehicles/${product.id}`)}>
      <img className="w-full" src={product.vehicleImage?.length ? product.vehicleImage[0]?.url_image : "/imgs/fallback-img.png"} alt="" />
      <div className="flex flex-col p-8">
        <h2 className="text-2xl font-semibold mb-1">{`${product.brand?.name} ${product.model?.name}`}</h2>
        <span className="text-lg">{formatCurrency(product.price)}</span>
      </div>
    </div>
  )
}
