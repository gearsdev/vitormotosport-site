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
import { Phone } from "lucide-react";
import { FavoritedProducts } from "@/components/FavoritedProducts";
import { CarouselImageProducts } from "@/components/CarouselImageProducts.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div className="flex flex-col lg:flex-row items-stretch flex-1 gap-4">
          <Title className="lg:hidden">{`${currentVehicle?.brand?.name} ${currentVehicle?.model?.name}`}</Title>
          <CarouselImageProducts currentVehicle={currentVehicle} />
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col flex-1">
              <Title className="hidden lg:block">{`${currentVehicle?.brand?.name} ${currentVehicle?.model?.name}`}</Title>
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="!bg-green-700 hover:!bg-green-800 !w-full !h-11">
                    <Image
                      src="/icons/whatsapp.svg"
                      alt="WhatsApp"
                      height={24}
                      width={24}
                    />
                    Entrar em contato
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <a
                      target="_blank"
                      href={`https://wa.me/5514997171882?text=Ol%C3%A1%20Vitor.%20Estou%20interessado%20no%20modelo%20${currentVehicle?.brand?.name}%20${currentVehicle?.model?.name}.`}
                      className="w-full"
                    >
                      <DropdownMenuItem>
                        <b>Vitor</b> - (14) 99717-1882
                      </DropdownMenuItem>
                    </a>
                    <a
                      target="_blank"
                      href={`https://wa.me/5514997131098?text=Ol%C3%A1%20Tais.%20Estou%20interessado%20no%20modelo%20${currentVehicle?.brand?.name}%20${currentVehicle?.model?.name}.`}
                      className="w-full"
                    >
                      <DropdownMenuItem>
                        <b>Tais</b> - (14) 99713-1098
                      </DropdownMenuItem>
                    </a>
                    <a
                      target="_blank"
                      href={`https://wa.me/5514998574608?text=Ol%C3%A1%20Caio.%20Estou%20interessado%20no%20modelo%20${currentVehicle?.brand?.name}%20${currentVehicle?.model?.name}.`}
                      className="w-full"
                    >
                      <DropdownMenuItem>
                        <b>Caio</b> - (14) 99857-4608
                      </DropdownMenuItem>
                    </a>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="tel:+5514997171882" className="w-full">
                <Button className="!w-full">
                  <Phone />
                  (14) 99717-1882
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <section className="py-20 bg-gray-100">
        <Container>
          <p>{currentVehicle?.description || "Não há descrição"}</p>
        </Container>
      </section>
      <FavoritedProducts />
    </>
  );
}
