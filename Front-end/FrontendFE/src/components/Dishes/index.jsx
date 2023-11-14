import { Container, Content } from './styles'
import { ButtonText } from '../ButtonText'

export function Dishes({ data, ...rest }) {
  return (
    <Container {...rest}>
      <ButtonText name='voltar' />
      <Content>

      </Content>
    </Container>
  )
}