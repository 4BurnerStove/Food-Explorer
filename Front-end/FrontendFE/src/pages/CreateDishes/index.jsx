import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from "react-icons/sl";


export function CreateDishe() {
  return (
    <Container>
      <Header />
      <ButtonText icon={SlArrowLeft} name={'Voltar'}></ButtonText>

      <Footer />
    </Container>
  )
}