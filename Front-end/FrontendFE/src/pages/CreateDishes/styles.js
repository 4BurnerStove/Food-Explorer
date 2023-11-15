import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > button {
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;
    margin-top: 3.2rem;
    width: 25%;
  }

  div {
    display: flex;
    gap: .8rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
  }
`

export const Form = styled.form`
  width: 80%;
  height: 50vh;
  
  margin: 19.5rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .divPrinf {
    width: 100%;
    display: flex;
    gap: 3.2rem;


    #imageDishe {
      width: 25%;
    }

    #Name {
      width: 55%;
    }

    #Categories {
      width: 40%;
    }

    #Ingredients {
      width: 70%;
    }

    #Price {
      width: 30%;
    }
  }

  .SectionForms {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    p {
      margin-bottom: 1.6rem;
    }
  }

  > button {
    justify-content: flex-start;
  }
`
