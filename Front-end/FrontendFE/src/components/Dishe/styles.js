import styled from 'styled-components'

export const Container = styled.div`


  padding: 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  border-radius: .2rem;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  border: 1px ${({theme}) => theme.COLORS.DARK_200} solid;
  color: ${({theme}) => theme.COLORS.LIGHT_100};


  h1 {    
    font-size: 2.4rem;
    cursor: pointer;
  }

  p {
    font-size: 1.4rem;
  }

  h1, p, span {
    margin-block: 1.5rem;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
   font-size: 3.2rem;
   color: ${({theme}) => theme.COLORS.CAKE_200}
  }

  div:first-child {
  
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;

    svg {
      size: 10rem;
    }
    
    

    img {
      cursor: pointer;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      width: 17rem;
      height: 17rem;
    }
  }

`