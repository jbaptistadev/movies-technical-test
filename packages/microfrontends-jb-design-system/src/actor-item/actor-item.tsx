'use client'
import styled from 'styled-components'
import Title from '../title'

const ActorItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    187deg,
    rgba(5, 37, 92, 1) 0%,
    rgba(0, 0, 0, 1) 100%,
    rgba(24, 45, 82, 1) 100%
  );
  border-radius: 1rem 1rem;
  box-shadow: 0 0 60px #000000;

  height: 300px;
  width: 300px;

  img {
    width: 100%;
    height: 200px;
    object-fit: fill;
    border-radius: 1rem 1rem 0rem 0rem;
  }
`

const DescriptionContainer = styled.div`
  color: white;
  padding: 1rem 1rem;
`

export const ActorItem = ({
  name,
  character,
  actorImage,
}: {
  name: string
  character: string
  actorImage: JSX.Element
}) => {
  const ActorImage = () => actorImage

  return (
    <ActorItemContainer>
      <ActorImage />
      <DescriptionContainer>
        <Title>{name}</Title>
        <Title variant="subTitle">{character}</Title>
      </DescriptionContainer>
    </ActorItemContainer>
  )
}

export default ActorItem
