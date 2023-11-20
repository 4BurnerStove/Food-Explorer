import { api } from '../../services/api'

import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";
import { DisheCard} from "../../components/DisheCard";
import { Footer } from "../../components/Footer"
import { useEffect, useState } from "react";


export function Home() {
  const [ dishes, setDishes ] = useState([])
  const [ category, setCategory ] = useState([])

  useEffect(() => {
    async function showDishes(){
      const response = await api.get(`/dishes`)
      setDishes(response.data)
    }

    async function showSections(){
      const response = await api.get(`/category`)
      setCategory(response.data)
    }

    showSections()
    showDishes()
  }, [])




  console.log(dishes)

  return (
    <Container>
      <Header/>
      <Main>
        <Banner/>

        <div className="Sections">
          <Section name={"Refeições"}>
            {
              dishes.map(dishe => (
                <DisheCard key={String(dishe.id)} data={dishe}></DisheCard>
              ))
            }
          </Section>
        </div>
        <Footer></Footer>
      </Main>
    </Container>
  )
}