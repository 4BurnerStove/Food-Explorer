import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  white-space: nowrap;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  margin-inline: .8rem;

  > img {
    width: 4.5rem;
  }
`