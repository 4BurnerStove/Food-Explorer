import { Container } from './styles'
import { useState } from 'react'

import { Button } from '../Button'

export function Count() {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const formattedValue = count < 10 ? `0${count}` : `${count}`

  return (
    <Container>
      <span onClick={handleDecrement}>-</span>
      <p>{formattedValue}</p>
      <span onClick={handleIncrement}>+</span>

      <Button name='Incluir'></Button>
    </Container>
  )
}