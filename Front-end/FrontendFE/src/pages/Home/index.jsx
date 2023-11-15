import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";
import { DisheCard} from "../../components/DisheCard";
import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Banner></Banner>
        <div className="Sections">
          <Section name={"Refeições"}>
            <DisheCard data={{
              title: 'Teste',
              description: 'teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}></DisheCard>
          </Section>
          <Section name={"Sobremesas"}>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

          </Section>
          <Section name={"Bebidas"}>
            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>

            <DisheCard data={{
              title: 'Teste',
              description: 'teste',
              price: '36.31'
            }}>
            </DisheCard>
          </Section>
        </div>

        <Footer></Footer>
      </Main>
    </Container>
  )
}