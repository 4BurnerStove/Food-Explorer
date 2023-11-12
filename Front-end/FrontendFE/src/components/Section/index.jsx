import { useRef } from 'react'

import { Container } from './styles'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



export function Section({ name, children }) {
  const carousel = useRef(null)

  const handleBackClick = (e) => {
    e.preventDefault()

    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleForwardClick = (e) => {
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }


  return (
    <Container>
      <h2>{name}</h2>
      <button onClick={handleBackClick} className='BackButton'><IoIosArrowBack></IoIosArrowBack></button>
      <div ref={carousel}>
        {children}
      </div>
      <button onClick={handleForwardClick} className='ForwardButton'><IoIosArrowForward></IoIosArrowForward></button>
    </Container>

  )
}