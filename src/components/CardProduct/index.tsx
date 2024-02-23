/* eslint-disable @next/next/no-img-element */
"use client";

import { Vehicle } from "@/interfaces/Vehicle";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatKilometers } from "@/utils/formatKilometers";
import { Calendar, Gauge } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Vehicle;
}

export function CardProduct({ product, ...rest }: CardProductProps) {
  const router = useRouter();

  return (
    <div
      {...rest}
      className="flex-1 h-full bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition"
      onClick={() => router.push(`/vehicles/${product.id}`)}
    >
      <img
        className="w-full"
        src={
          product.vehicleImage?.length
            ? product.vehicleImage[0]?.url_image
            : "/imgs/fallback-img.png"
        }
        alt=""
      />
      <div className="flex flex-col p-8">
        <h2 className="text-2xl font-semibold mb-1">{`${product.brand?.name} ${product.model?.name}`}</h2>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {product.year}
          </span>
          |
          <span className="flex items-center gap-2">
            <Gauge size={14} />
            {formatKilometers(product.kilometers)} km
          </span>
        </div>
        <span className="text-lg mt-4 font-semibold">{formatCurrency(product.price)}</span>
      </div>
    </div>
  );
}
