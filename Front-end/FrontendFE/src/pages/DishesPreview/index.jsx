import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Dishes } from '../../components/Dishes'

export function DishesPreview() {
  return (
    <Container>
      <Header />
      <Dishes
        data={{
          title: 'Salada Ravanello ',
          description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
          price: '25.31',
          ingredients: [
            { id: '1', name: 'Cebola' },
            { id: '2', name: 'Alho' },
            { id: '3', name: 'Calabresa' },
          ]
        }}
      ></Dishes>
      <Footer />
    </Container>
  )
}