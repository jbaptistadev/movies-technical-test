'use client'
import styled from 'styled-components'
import Title from '../title'

const StyledCard = styled.div`
  position: relative;
  color: #ffffff;
  font-weight: 700;
  border-radius: 0.5rem;
  width: 400px;
  height: 500px;
  cursor: pointer;
  background-color: #000;
  box-shadow: 0 0 60px #000000;

  img {
    position: absolute;
    object-fit: cover;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 65em) {
    width: 335px;
  }

  @media only screen and (max-width: 40em) {
    width: 250px;
  }
`

const Poster = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px;
  border-radius: 0.5rem;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 500px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 25%, transparent);
  }
`

const PosterDetail = styled.div`
  position: absolute;
  padding: 1rem;
  bottom: 0;
  width: 100%;
`

export interface Props {
  title: string
  urlPath: string
  img: any
}

export const Card = ({ title, img, urlPath }: Props) => {
  const PosterImage = () => img

  return (
    <a href={`${urlPath}/${title}`}>
      <StyledCard>
        <PosterImage />
        <Poster>
          <PosterDetail>
            <Title>{title}</Title>
          </PosterDetail>
        </Poster>
      </StyledCard>
    </a>
  )
}

export default Card
