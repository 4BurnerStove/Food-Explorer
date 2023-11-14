import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";
import { Dishe } from "../../components/DisheCard";
import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Banner></Banner>
        <div className="Sections">
          <Section name={"Refeições"}>
            <Dishe data={{
              title: 'Teste',
              description: 'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

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

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></Dishe>
          </Section>
          <Section name={"Sobremesas"}>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

          </Section>
          <Section name={"Bebidas"}>
            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>

            <Dishe data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </Dishe>
          </Section>
        </div>

        <Footer></Footer>
      </Main>
    </Container>
  )
}