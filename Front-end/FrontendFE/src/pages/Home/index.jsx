import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";
import { Dishe } from "../../components/Dishe";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Banner></Banner>

        <div className="Sections">
          <Section name={"Refeições"}>
            <Dishe data={{
              imageFood: '../../assets/imageFoodTest.png',
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></Dishe>
            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></Dishe>
            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></Dishe>
          </Section>
          <Section name={"Sobremesas"}></Section>
          <Section name={"Bebidas"}></Section>
        </div>

      </Main>
    </Container>
  )
}