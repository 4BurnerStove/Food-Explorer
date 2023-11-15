import { Container, Content } from './styles'
import { ButtonText } from '../ButtonText'
import { Count } from '../Count';
import { Button } from '../Button';
import { Ingredients } from '../Ingredients'

export function Dishes({ data, ...rest }) {
  console.log(data.ingredients)

  return (
    <Container {...rest}>
      <ButtonText name='voltar' />
      <Content>
        <div>
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
            <Count></Count>
            <Button name={['Incluir R$', data.price]}></Button>
          </div>
        </div>
      </Content>
    </Container >
  )
}