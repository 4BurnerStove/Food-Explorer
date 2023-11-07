import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Banner></Banner>
        
        <div className="Sections">
          <Section name={"Refeições"}></Section>
          <Section name={"Sobremesas"}></Section>
          <Section name={"Bebidas"}></Section>
        </div>

      </Main>
    </Container>
  )
}