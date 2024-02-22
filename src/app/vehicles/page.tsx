"use client";

import { Button } from "@/components/Button";
import { CardProduct } from "@/components/CardProduct";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Title } from "@/components/Title";
import { Brand } from "@/interfaces/Brand";
import { Model } from "@/interfaces/Model";
import { Vehicle } from "@/interfaces/Vehicle";
import { brand } from "@/services/Brands";
import { model } from "@/services/Models";
import { vehicle } from "@/services/Vehicles";
import { Trash } from "lucide-react";
import { Fragment, use, useCallback, useEffect, useState } from "react";

export default function Page() {
  const [vehicles, setVehicles] = useState<Vehicle[]>();
  const [brands, setBrands] = useState<Brand[]>();
  const [models, setModels] = useState<Model[]>();
  const [brandSelected, setBrandSelected] = useState<Brand>();
  const [modelSelected, setModelSelected] = useState<Model>();
  const [query, setQuery] = useState<string>();
  const [page, setPage] = useState(1);
  const [totalRegisters, setTotalRegisters] = useState<number>();

  const fetchVehicles = useCallback(
    ({
      query = "",
      brandId = "",
      modelId = "",
      page = 1,
    }: {
      query?: string;
      brandId?: string;
      modelId?: string;
      page?: number;
    } = {}) => {
      vehicle
        .getAll<Vehicle[]>({
          query,
          brandId,
          modelId,
          page,
          limit: 3,
          status: "available",
        })
        .then((response) => {
          setVehicles((prev) => {
            return prev
              ? [...prev, ...response.data]
              : response.data;
          });
          response.totalRegisters && setTotalRegisters(response.totalRegisters);
        });
    },
    []
  );

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  useEffect(() => {
    brand.getAll<Brand[]>().then((response) => {
      setBrands(response.data);
    });
  }, []);

  useEffect(() => {
    if (brandSelected) {
      setQuery("");
      model.getAllByBrand<Model[]>(brandSelected.id).then((response) => {
        setModels(response.data);
      });
      setVehicles(undefined);
      fetchVehicles({
        brandId: brandSelected.id,
        page: 1,
      });
    }
  }, [brandSelected, fetchVehicles]);

  useEffect(() => {
    if (modelSelected && brandSelected) {
      setQuery("");
      vehicle.getAllByModel<Vehicle[]>(modelSelected.id).then((response) => {
        setVehicles(response.data);
      });
      setVehicles(undefined);
      fetchVehicles({
        brandId: brandSelected.id,
        modelId: modelSelected.id,
        page: 1,
      });
    }
  }, [modelSelected, brandSelected, fetchVehicles]);

  if (totalRegisters === 0) {
    return (
      <Container className="py-16">
        <Title className="mb-8">Conheça nossa linha de seminovas</Title>
        <div className="flex w-full items-center justify-center">
          <p>Estamos sem estoque de veículos no momento. :(</p>
        </div>
      </Container>
    );
  }

  if (vehicles === undefined) {
    return (
      <Container className="py-16">
        <Title className="mb-8">Conheça nossa linha de seminovas</Title>
        <div className="flex w-full items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={128}
            height={128}
            preserveAspectRatio="xMidYMid"
            style={{
              margin: "auto",
              display: "block",
            }}
            viewBox="0 0 100 100"
          >
            <circle
              cx={50}
              cy={50}
              r={32}
              fill="none"
              stroke="#EAB308"
              strokeDasharray="50.26548245743669 50.26548245743669"
              strokeLinecap="round"
              strokeWidth={8}
            >
              <animateTransform
                attributeName="transform"
                dur="1s"
                keyTimes="0;1"
                repeatCount="indefinite"
                type="rotate"
                values="0 50 50;360 50 50"
              />
            </circle>
          </svg>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <Title className="mb-8">Conheça nossa linha de seminovas</Title>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between items-end mb-8">
        <div className="flex flex-col md:w-1/3 w-full">
          <label className="mb-1">Marca </label>
          <Select
            options={
              brands?.map((item) => {
                return { label: item.name, value: item.id };
              }) || []
            }
            value={brandSelected?.id || ""}
            onChange={(value) => {
              const brand = brands?.find(
                (item) => item.id == value.target.value
              );
              setPage(1);
              setBrandSelected(brand);
            }}
          ></Select>
        </div>

        <div className="flex flex-col md:w-1/3 w-full">
          <label className="mb-1">Modelo </label>
          <Select
            placeholder={
              models?.length === 0 ? "Nenhum modelo encontrado" : "Selecione"
            }
            options={
              models?.map((item) => {
                return { label: item.name, value: item.id };
              }) || []
            }
            value={modelSelected?.id || ""}
            onChange={(value) => {
              setPage(1);
              const model = models?.find(
                (item) => item.id == value.target.value
              );
              setModelSelected(model);
            }}
            disabled={!brandSelected}
          ></Select>
        </div>

        <div className="flex flex-col md:w-1/3 w-full">
          <label className="mb-1">Pesquisar </label>
          <Input
            onSearch={() => {
              setModels(undefined);
              setBrandSelected(undefined);
              setVehicles(undefined);
              fetchVehicles({
                query,
                page: 1,
              });
            }}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            type="text"
            search
          />
        </div>

        {(brandSelected || query) && (
          <div className="w-full md:w-auto">
            <Button
              onClick={() => {
                setModels(undefined);
                setBrandSelected(undefined);
                setModelSelected(undefined);
                setVehicles(undefined);
                setPage(1);
                setQuery("");
                fetchVehicles();
              }}
              variant="outline"
              className="!p-3"
            >
              <Trash />
              <span className="md:hidden">Limpar Filtros</span>
            </Button>
          </div>
        )}
      </div>

      {vehicles?.length === 0 && (
        <div className="flex w-full items-center justify-center">
          <p>Nenhum veículo encontrado</p>
        </div>
      )}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-4">
        {vehicles?.map((vehicle) => (
          <CardProduct key={vehicle.id} product={vehicle} />
        ))}
      </div>

      {vehicles?.length !== 0 && totalRegisters !== vehicles?.length && (
        <div className="mt-4">
          <div className="flex w-full items-center justify-center">
            <Button
              onClick={() => {
                setPage(page + 1);
                fetchVehicles({
                  query,
                  brandId: brandSelected?.id,
                  modelId: modelSelected?.id,
                  page: page + 1,
                });
              }}
              className="w-full md:w-auto mt-8"
              variant="outline"
            >
              Carregar mais
            </Button>
          </div>

          <div className="flex w-full items-center justify-center mt-1">
            <span className="text-zinc-400 text-sm">
              Exibindo {vehicles?.length} de {totalRegisters} veículos
            </span>
          </div>
        </div>
      )}
    </Container>
  );
}
