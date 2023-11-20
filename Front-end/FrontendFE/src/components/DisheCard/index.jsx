import { Container } from './styles'
import { Count } from '../Count'
import { Button } from '../Button'
import { AiOutlineHeart } from 'react-icons/ai'
import { PiPencilSimpleLight } from 'react-icons/pi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

import { api } from '../../services/api'
 

export function DisheCard({ data, ...rest }) {
  const [totalPrice, setTotalPrice] = useState(data.price)

  const formatPrice = (price) => {
    if (price) {
      const formattedPrice = Number(price).toFixed(2)
      return formattedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  };

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice)
  }

  return (
    <Container {...rest}>
      
      <div>
        <Link to={'/DishesPreview/1'}>
          <img src={imageURL} alt="" />
        </Link>
        {/* <AiOutlineHeart /> */}
        <Link to={'/UpdatedDishe/1'}>
          <PiPencilSimpleLight />
        </Link>
      </div>
      <Link to={'/DishesPreview/1'}>
        <h1>{data.title} &nbsp; &#x276F;</h1>
      </Link>
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