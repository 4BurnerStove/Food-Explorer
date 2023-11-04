import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import logoFE from '../../assets/logo.svg'

export function SignIn() {
  return (
    <Container>  
      <Form>
        <Input
          type='text'
          placeholder='Exemplo: Maria da Silva'
        ></Input>
        <Input
          type='text'
          placeholder='Exemplo: exemplo@exemplo.com.br'
        ></Input>
        <Input
          type='password'
          placeholder='No mínimo 6 caracteres'
        ></Input>

        <Button name='Criar conta'></Button>
        <ButtonText name='Já tenho uma conta'></ButtonText>
      </Form>
    </Container>
  )
}