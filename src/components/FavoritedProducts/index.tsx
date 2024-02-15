"use client";

import { useEffect, useState } from "react";
import { Container } from "../Container";
import { Title } from "../Title";
import { vehicle } from "@/services/Vehicles";
import { Vehicle } from "@/interfaces/Vehicle";
import { CardProduct } from "../CardProduct";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function FavoritedProducts() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, []);

  useEffect(() => {
    vehicle
      .getAll<Vehicle[]>({
        status: "favorited",
      })
      .then((response) => {
        setVehicles(response.data);
      });
  }, []);

  return (
    <section className="bg-white py-16">
      <Container>
        <Title className="mb-8 text-center xl:text-left">
          Motos em destaque
        </Title>
        <div className="flex gap-4 w-full overflow-auto embla" ref={emblaRef}>
          <div className="embla__container">
            {vehicles?.map((vehicle) => (
              <div key={vehicle.id} className="embla__slide">
                <CardProduct className="" key={vehicle.id} product={vehicle} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
