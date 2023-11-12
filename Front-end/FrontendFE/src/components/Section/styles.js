import styled from 'styled-components'

export const Container = styled.section`
  
  margin: 5.6rem 0 1 2.8rem;
  
   > div {
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 100%;
    display: flex;
    gap: 2.7rem;
    position: relative;
    
    > button {
       height: 100%;
       position: absolute;
       font-size: 4.2rem;
       color: ${({theme}) => theme.COLORS.LIGHT_100};
       border: none;
       background: transparent;
     }
    
  }

  > h2 {
    padding-top: 4.8rem;
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

    

    .BackButton, .ForwardButton {  
       font-size: 4.2rem;
       color: ${({theme}) => theme.COLORS.LIGHT_100};
       border: none;
       background: transparent;
    }
      
`