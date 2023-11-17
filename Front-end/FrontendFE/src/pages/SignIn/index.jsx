import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from '../../components/Logo'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

export function SignIn() {
  const navigate = useNavigate()


  return (
    <Container>
      <Logo />

      <Form>
        <h1>Faça login</h1>
        <section>
          <label for="E-mail">E-mail</label>
          <Input
            id="E-mail"
            type='text'
            placeholder='Exemplo: exemplo@exemplo.com.br'
          ></Input>
        </section>
        <section>
          <label for="Password">Senha</label>
          <Input
            id="Password"
            type='password'
            placeholder='No mínimo 6 caracteres'
          ></Input>
        </section>

        <Button name='Entrar'></Button>

        <ButtonText
        onClick={() => navigate('/register')}
        name='Criar uma conta'></ButtonText>
      </Form>
    </Container>
  )
}