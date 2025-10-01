"use client";

import { Vehicle } from "@/interfaces/Vehicle";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";
import { EmblaCarouselType } from "embla-carousel";

interface CarouselImageProductsProps {
  currentVehicle?: Vehicle;
}

import style from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";

export function CarouselImageProducts({
  currentVehicle,
}: CarouselImageProductsProps) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    []
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={style.embla} ref={emblaRef}>
      <div className={style.embla__container}>
        {currentVehicle?.vehicleImage?.length === 0 ? (
          <div className={style.embla__slide}>
            <img
              src="/imgs/fallback-img.png"
              alt={currentVehicle?.model?.name || ""}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          currentVehicle?.vehicleImage?.map((vehicle) => (
            <div key={vehicle.id} className={style.embla__slide}>
              <img
                src={vehicle.url_image}
                alt={currentVehicle?.model?.name || ""}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        )}
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}
