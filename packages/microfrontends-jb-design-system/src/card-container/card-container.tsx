'use client'
import styled from 'styled-components'
interface Props {
  children: React.ReactNode
}

const FlexContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 4rem 3rem;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: 65em) {
    flex-direction: column;
    row-gap: 3rem;
    width: 100%;
    align-items: center;
  }

  @media only screen and (max-width: 40em) {
    flex-direction: column;
    row-gap: 3rem;
    width: 100%;
    align-items: center;
  }
`
export const CardsContainer = ({ children }: Props) => {
  return <FlexContainer>{children}</FlexContainer>
}

export default CardsContainer
