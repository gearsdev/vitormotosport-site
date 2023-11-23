import { CardProduct } from "@/components/CardProduct";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";

export default function Vehicles() {
  return (
    <Container className="py-16">
      <Title className="mb-8">Conheça os modelos disponíveis</Title>
      <div>
        <p>Confira abaixo os modelos disponíveis para pronta entrega.</p>
        <p>Selecione o modelo desejado para mais informações.</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </Container>
  )
}