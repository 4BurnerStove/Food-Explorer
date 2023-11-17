import { Container } from './styles'

import { Input } from '../Input'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { PiReceiptBold } from 'react-icons/pi'
import { GoSearch } from 'react-icons/go'
import { RxExit } from 'react-icons/rx'
import { useNavigate, Link } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <Link to={'/'}>
        <Logo />
      </Link>

      <Input icon={GoSearch} color='#C4C4CC' placeholder='Busque por pratos ou ingredientes' />

      <div>
        {/* <Button icon={PiReceiptBold} name="Pedidos(0)"></Button> */}
        <Button onClick={() => navigate('/CreateDishe')} name="Novo Prato"></Button>
        <RxExit size={35} color='#C4C4CC'></RxExit>
      </div>
    </Container>
  )
}