import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Banner></Banner>
      <Section name={"Refeições"}></Section>
      <Section name={"Sobremesas"}></Section>
      <Section name={"Bebidas"}></Section>
    </Container>
  )
}