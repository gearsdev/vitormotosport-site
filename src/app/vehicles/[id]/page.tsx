"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import { Vehicle } from "@/interfaces/Vehicle";
import { vehicle } from "@/services/Vehicles";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatKilometers } from "@/utils/formatKilometers";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from 'lucide-react'
import { FavoritedProducts } from "@/components/FavoritedProducts";

export default function Page() {
  const { id } = useParams<{
    id: string;
  }>();
  const [currentVehicle, setCurrentVehicle] = useState<Vehicle>();

  useEffect(() => {
    vehicle.getById<Vehicle>(id).then((response) => {
      setCurrentVehicle(response.data);
    });
  }, [id]);

  return (
    <>
      <Container className="py-20">
        <div className="flex items-stretch flex-1 gap-4">
          <Image
            width={720}
            height={720}
            src={
              currentVehicle?.vehicleImage?.length
                ? "/imgs/r3.png"
                : "/imgs/r3.png"
            }
            alt={currentVehicle?.model?.name || ""}
          />
          <div className="flex flex-col flex-1">
            <div className="flex flex-col h-full">
              <Title>{`${currentVehicle?.brand?.name} ${currentVehicle?.model?.name}`}</Title>
              <span className="text-xl mt-2">
                <strong className="mr-1">Marca:</strong>
                {currentVehicle?.brand?.name}
              </span>
              <span className="text-xl mt-2">
                <strong className="mr-1">Modelo:</strong>
                {currentVehicle?.model?.name}
              </span>
              <span className="text-xl mt-2">
                <strong className="mr-1">Ano</strong>
                {currentVehicle?.year}
              </span>
              <span className="text-xl mt-2">
                <strong className="mr-1">Km</strong>
                {formatKilometers(currentVehicle?.kilometers || "")}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <Title>{formatCurrency(currentVehicle?.price || "")}</Title>
              <Button className="bg-green-700 hover:bg-green-800">
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  height={24}
                  width={24}
                />
                Entrar em contato
              </Button>
              <Button><Phone />(14) 91234-5678</Button>
            </div>
          </div>
        </div>
      </Container>
      <section className="py-20 bg-gray-100">
        <Container>
          <p>{currentVehicle?.description || 'Não há descrição'}</p>
        </Container>
      </section>
      <FavoritedProducts />
    </>
  );
}
