import { Container } from './styles'
import { Count } from '../Count'
import { Button } from '../Button'
import { AiOutlineHeart } from 'react-icons/ai'
import { PiPencilSimpleLight } from 'react-icons/pi'
import { useState } from 'react'


export function DisheCard({ data, ...rest }) {
  const [totalPrice, setTotalPrice] = useState(data.price)

  const formatPrice = (price) => {
    if (price) {
      const formattedPrice = Number(price).toFixed(2)
      return formattedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  };

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice)
  }

  return (
    <Container {...rest}>
      <div>
        <img src='https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
        <AiOutlineHeart />
        {/* <PiPencilSimpleLight /> */}
      </div>
      <h1>{data.title} </h1>
      <div className='description'>
        <p>{data.description}</p>
      </div>
      <span> R$ {formatPrice(totalPrice)}</span>
      <div className='includes'>
        <Count productPrice={data.price} onTotalPriceChange={handleTotalPriceChange}></Count>
        <Button name='Incluir'></Button>
      </div>

    </Container>
  )
}