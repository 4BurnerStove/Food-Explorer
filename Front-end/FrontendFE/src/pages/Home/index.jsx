import { api } from '../../services/api'

import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";
import { DisheCard} from "../../components/DisheCard";
import { Footer } from "../../components/Footer"
import { useEffect, useState } from "react";


export function Home() {
  const [dish, setDish] = useState([])
  const [search, setSearch ] = useSearch
  const [category, setCategory] = useState([])

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`)

      const fetchedDishes = response.data

      setDishes(fetchedDishes)
    }

    async function fetchCategory() {
      const response = await api.get('/category')
      setCategorys(response.data)
    }
    
    fetchDishes()
    fetchCategory()
  },[search])

  useEffect(() => {
    setSearch('')
  },[])

  return (
    <Container>
      <Header/>
      <Main>
        <Banner/>
        <div className="Sections">
          <Section name={"Refeições"}>
        
          </Section>
        </div>
        <div className="Sections">
          <Section name={"Sobremesas"}>
        
          </Section>
        </div>
        <div className="Sections">
          <Section name={"Bebidas"}>
        
          </Section>
        </div>

        <Footer></Footer>
      </Main>
    </Container>
  )
}