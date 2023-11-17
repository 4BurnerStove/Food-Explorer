import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from '../../components/Logo'
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const navigate = useNavigate()

  return (
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>

        <section>
          <label for="Nome">Seu nome</label>
          <Input
            id="Nome"
            type='text'
            placeholder='Exemplo: Maria da Silva'
          ></Input>
        </section>

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

        <Button name='Criar conta'></Button>

        <ButtonText onClick={() => navigate('/')} name='Já tenho uma conta'></ButtonText>
      </Form>
    </Container>
  )
}