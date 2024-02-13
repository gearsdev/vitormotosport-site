'use client'

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
import { Fragment, useEffect, useState } from "react";

export default function Page() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [models, setModels] = useState<Model[]>([])
  const [brandSelected, setBrandSelected] = useState<Brand>()
  const [modelSelected, setModelSelected] = useState<Model>()

  useEffect(() => {
    vehicle.getAll<Vehicle[]>().then((response) => {
      setVehicles(response.data)
    })

    brand.getAll<Brand[]>().then((response) => {
      setBrands(response.data)
    })
  }, [])

  useEffect(() => {
    if(brandSelected) {
      model.getAllByBrand<Model[]>(brandSelected.id).then((response) => {
        setModels(response.data)
      })
    }
  }, [brandSelected])

  return (
    <Container className="py-16">
      <Title className="mb-8">Conheça nossa linha de seminovas</Title>

      <div className="flex mb-8">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Pesquise: </label>
          <Input type="text"/>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Marca: </label>
          <Select 
            options={brands?.map((item) => {
              return { label: item.name, value: item.id }
            }) || []} 
            onChange={(value) => {
              const brand = brands?.find((item) => item.id == value.target.value)
              setBrandSelected(brand)
            }}
            >
          </Select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Modelo: </label>
          <Select 
            options={models?.map((item) => {
              return { label: item.name, value: item.id }
            }) || []} 
            onChange={(value) => {
              const model = models?.find((item) => item.id == value.target.value)
              setModelSelected(model)
            }}
            disabled={!brandSelected}
            >
          </Select>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-4">
        {vehicles?.map((vehicle) => (
          <Fragment key={vehicle.id.toString()}>
            <CardProduct product={vehicle} />
          </Fragment>
        ))}
      </div>
    </Container>
  )
}