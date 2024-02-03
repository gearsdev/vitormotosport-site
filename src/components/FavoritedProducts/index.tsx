'use client'

import { useEffect, useState } from "react";
import { Container } from "../Container";
import { Title } from "../Title";
import { vehicle } from "@/services/Vehicles";
import { Vehicle } from "@/interfaces/Vehicle";
import { CardProduct } from "../CardProduct";

export function FavoritedProducts() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    vehicle.getAll<Vehicle[]>({
      status: 'favorited'
    }).then((response) => {
      setVehicles(response.data);
    });
  }, []);
  
  return (
    <section className="bg-white py-16">
      <Container>
        <Title className="mb-8 text-center xl:text-left">Motos em destaque</Title>
        <div className="flex gap-4 w-full overflow-auto">
          {vehicles.map((vehicle) => (
            <CardProduct key={vehicle.id} product={vehicle} />
          ))}
        </div>
      </Container>
    </section>
  )
}