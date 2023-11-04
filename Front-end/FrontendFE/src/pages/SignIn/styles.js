import styled from 'styled-components'

export const Container = styled.div`
  padding: 10rem 13.6rem;
  display: flex;
  justify-content: center;
  text-align: center; 


 color: ${({theme}) => theme.COLORS.LIGHT_100};

  h1 {
   text-align: center;
 }

 display: flex;
 justify-content: center;
 align-items: center;
`

export const Form = styled.form`
  width: 90rem;
  margin: 0 auto;
  padding: 6.4rem;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  border-radius: 2rem;

  > section {
    label {
      width: 100%;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    margin-block: 3.2rem;
  }

`