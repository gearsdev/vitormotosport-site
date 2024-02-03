'use client'

import { CardProduct } from "@/components/CardProduct";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import { Vehicle } from "@/interfaces/Vehicle";
import { vehicle } from "@/services/Vehicles";
import { useEffect, useState } from "react";

export default function Page() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    vehicle.getAll<Vehicle[]>().then((response) => {
      setVehicles(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <Container className="py-16">
      <Title className="mb-8">Conheça os modelos disponíveis</Title>
      <div>
        <p>Confira abaixo os modelos disponíveis para pronta entrega.</p>
        <p>Selecione o modelo desejado para mais informações.</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-4">
        {vehicles?.map((vehicle) => (
          <>
            <CardProduct key={vehicle.id} product={vehicle} />
          </>
        ))}
      </div>
    </Container>
  )
}