import { Container, Form, Content, ImageUpload } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button'

import { SlArrowLeft } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";



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
              <ImageUpload>
                <MdOutlineFileUpload />
                <p>Selecione a imagem</p>
              </ImageUpload>
            </div>

            <div id='Name' className='SectionForms'>
              <p>Nome</p>
              <Input type='text' placeholder='Ex: Salada Martirs'></Input>
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
              <Input type='text' placeholder='R$ 00,00'></Input>
            </div>
          </div>

          <div className='SectionForms'>
            <p>Descrição</p>
            <Textarea type='text' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'></Textarea>
          </div>

          <div className='button'>
            <Button name='Salvar alterações'></Button>
          </div>
        </Content>
      </Form>
      <Footer />
    </Container>
  )
}