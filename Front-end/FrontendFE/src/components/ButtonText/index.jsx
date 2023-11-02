import { Container } from "./styles";

export function ButtonText({ name, icon: Icon, ...rest }) {
  <Container
    type='Button'
    {...rest}
  >
    {Icon && <Icon size={20} />}
    {name}
  </Container>

}