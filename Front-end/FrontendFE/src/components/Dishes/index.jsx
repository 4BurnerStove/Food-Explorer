import { useState } from 'react';

import { Container, Content } from './styles'
import { ButtonText } from '../ButtonText'
import { Count } from '../Count';
import { Button } from '../Button';
import { Ingredients } from '../Ingredients'
import { SlArrowLeft } from "react-icons/sl";

export function Dishes({ data, ...rest }) {
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
      <Content>
        <div>
          <ButtonText icon={SlArrowLeft} name={'Voltar'}></ButtonText>
          <img src='https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
        </div>

        <div className='contentText'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            data.ingredients && (
              <div className='ingredients'>
                {data.ingredients.map(ingredient => (
                  <Ingredients key={ingredient.name} name={ingredient.name} />
                ))}
              </div>
            )
          }
          <div className='buttons'>
            <Count productPrice={data.price} onTotalPriceChange={handleTotalPriceChange}></Count>
            <Button name={['Incluir R$', formatPrice(totalPrice)]}></Button>
            {/* <Button name='Editar prato'></Button> */}
          </div>
        </div>
      </Content>
    </Container >
  )
}