import { Vehicle } from "@/interfaces/Vehicle";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselImageProductsProps {
  currentVehicle?: Vehicle;
}

import style from "./styles.module.css";

export function CarouselImageProducts({
  currentVehicle,
}: CarouselImageProductsProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, []);

  return (
    <div className={style.embla} ref={emblaRef}>
      <div className={style.embla__container}>
        {currentVehicle?.vehicleImage?.map((vehicle) => (
          <div key={vehicle.id} className={style.embla__slide}>
            <img
              src={vehicle.url_image || "/imgs/fallback-img.png"}
              alt={currentVehicle?.model?.name || ""}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
