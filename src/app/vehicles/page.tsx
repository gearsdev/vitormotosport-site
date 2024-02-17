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
import { Fragment, useCallback, useEffect, useState } from "react";

export default function Page() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [brandSelected, setBrandSelected] = useState<Brand>();
  const [modelSelected, setModelSelected] = useState<Model>();
  const [query, setQuery] = useState<string>();
  const [page, setPage] = useState(1);

  const fetchVehicles = useCallback(() => {
    vehicle
      .getAll<Vehicle[]>({
        query,
        brandId: brandSelected?.id,
        modelId: modelSelected?.id,
        page,
        limit: 3
      })
      .then((response) => {
        setVehicles((prev) => [...prev, ...response.data]);
      });
  }, [brandSelected?.id, modelSelected?.id, query, page]);

  useEffect(() => {
    fetchVehicles();

    brand.getAll<Brand[]>().then((response) => {
      setBrands(response.data);
    });
  }, [fetchVehicles]);

  useEffect(() => {
    if (brandSelected) {
      model.getAllByBrand<Model[]>(brandSelected.id).then((response) => {
        setModels(response.data);
      });

      vehicle.getAllByBrand<Vehicle[]>(brandSelected.id).then((response) => {
        setVehicles(response.data);
      });
    }
  }, [brandSelected]);

  useEffect(() => {
    if (modelSelected) {
      vehicle.getAllByModel<Vehicle[]>(modelSelected.id).then((response) => {
        setVehicles(response.data);
      });
    }
  }, [modelSelected]);

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
              setBrandSelected(brand);
            }}
          ></Select>
        </div>

        <div className="flex flex-col md:w-1/3 w-full">
          <label className="mb-1">Modelo </label>
          <Select
            options={
              models?.map((item) => {
                return { label: item.name, value: item.id };
              }) || []
            }
            value={modelSelected?.id || ""}
            onChange={(value) => {
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
            onSearch={fetchVehicles}
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
                setBrandSelected(undefined);
                setModelSelected(undefined);
                setQuery("");
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

      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-4">
        {vehicles?.map((vehicle) => (
          <CardProduct key={vehicle.id} product={vehicle} />
        ))}
      </div>

      <div className="flex w-full items-center justify-center mt-4">
        <Button
          onClick={() => setPage(page + 1)}
          className="w-full md:w-auto mt-8"
          variant="outline"
        >
          Carregar mais
        </Button>
      </div>
    </Container>
  );
}
