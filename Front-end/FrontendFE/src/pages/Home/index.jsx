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
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function showDishes(){
      const response = await api.get(`/dishes`)
      setDishes(response.data)
    }

    async function showSections(){
      const response = await api.get(`/category`)
      setCategories(response.data)
    }

    showSections()
    showDishes()
  }, [])

  console.log(categories)
  // console.log(dishes)

  return (
    <Container>
      <Header/>
      <Main>
        <Banner/>

        <div className="Sections">
          {categories.map(category => {
            // Filtra os pratos pertencentes à categoria atual
            const categoryDishes = dishes.filter(dishe => dishe.category_id === category.id);

            // Verifica se há pratos para a categoria atual
            if (categoryDishes.length > 0) {
              return (
                <Section key={String(category.id)} data={category}>
                  {categoryDishes.map(dishe => (
                    <DisheCard key={String(dishe.id)} data={dishe}></DisheCard>
                  ))}
                </Section>
              );
            }

            // Se não houver pratos, retorna null ou um componente vazio
            return null;
          })}
        </div>
        <Footer></Footer>
      </Main>
    </Container>
  )
}


