import styled from 'styled-components'

export const Container = styled.div`

  color: ${({theme}) => theme.COLORS.LIGHT_100};


  h1 {    
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
  }

  img {
    width: 10rem;
    height: 10rem;
  }
`