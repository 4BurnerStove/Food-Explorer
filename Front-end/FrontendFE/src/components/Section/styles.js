import styled from 'styled-components'

export const Container = styled.section`
  
  margin: 5.6rem 0 1 2.8rem;

  > div {
    width: 100%;
    display: flex;
    gap: 2.7rem;
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
`