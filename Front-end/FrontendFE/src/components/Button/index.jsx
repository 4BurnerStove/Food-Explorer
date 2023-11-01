import { Container } from './styles'

export function Button({ icon: Icon, name, ...rest }) {
  return (
    <Container
      type='button'
      {...rest}
    >
      {Icon && <Icon size={20} />}
    </Container>
  )
}