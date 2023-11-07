import styled from 'styled-components'
import { Input } from '../Input'

export const Container = styled.div`
width: 100%;
height: 11.2rem;

display: flex;
position: fixed;
align-items: center;
justify-content: space-around;
gap: 3.2rem;

background: ${({ theme }) => theme.COLORS.DARK_600};

  > div:first-child {
    width: 30%;
  }

  > div:nth-child(2) {
    padding-left: clamp(4%, 9vw, 15%);
  }

  > div:last-child {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    margin-right: 1rem;
  }
`
