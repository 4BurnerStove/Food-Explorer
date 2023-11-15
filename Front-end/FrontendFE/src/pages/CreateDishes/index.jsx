import { Container, Form, Content } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button'
import { SlArrowLeft } from "react-icons/sl";


export function CreateDishe() {
  return (
    <Container>
      <Header />
      <Form>
        <ButtonText icon={SlArrowLeft} name={'Voltar'}></ButtonText>

        <Content>
          <section>
            <h1>Adicionar prato</h1>
          </section>

          <div className='divPrinf'>
            <div id='imageDishe' className='SectionForms'>
              <p>Imagem do prato</p>
              <Input></Input>
            </div>

            <div id='Name' className='SectionForms'>
              <p>Nome</p>
              <Input placeholder='Ex: Salada Martirs'></Input>
            </div>

            <div id='Categories' className='SectionForms'>
              <p>Categoria</p>
              <Input></Input>
            </div>
          </div>

          <div className='divPrinf'>
            <div id='Ingredients' className='SectionForms'>
              <p>Ingredientes</p>
              <Input></Input>
            </div>

            <div id='Price' className='SectionForms'>
              <p>Preço</p>
              <Input placeholder='R$ 00,00'></Input>
            </div>
          </div>

          <div className='SectionForms'>
            <p>Descrição</p>
            <Textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'></Textarea>
          </div>

          <Button name='Salvar alterações'></Button>
        </Content>
      </Form>
      <Footer />
    </Container>
  )
}