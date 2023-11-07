import { Container } from './styles'

import { Input } from '../Input'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { PiReceiptBold } from 'react-icons/pi'
import { GoSearch } from 'react-icons/go'
import { RxExit } from 'react-icons/rx'

export function Header() {

  return (
    <Container>
      <Logo />

      <Input icon={GoSearch} color='#C4C4CC' placeholder='Busque por pratos ou ingredientes' />

      <div>
        <Button icon={PiReceiptBold} name="Pedidos(0)"></Button>
        <RxExit size={30} color='#C4C4CC'></RxExit>
      </div>
    </Container>
  )
}