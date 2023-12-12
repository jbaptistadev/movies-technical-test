'use client'
import React from 'react'
import styled from 'styled-components'
import Title from '../title'
import ActorItem from '../actor-item'

const CastContainer = styled.section`
  padding: 3rem 2rem;
  height: 100%;
`
const ActorsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 5rem;
  row-gap: 3rem;
`

interface Props {
  cast: any[]
}
export const Cast = ({ cast }: Props) => {
  return (
    <CastContainer>
      <Title variant="smallHeadline">#Cast</Title>
      <ActorsContainer>
        {cast.map((actor) => (
          <ActorItem key={actor.cast_id} {...actor} />
        ))}
      </ActorsContainer>
    </CastContainer>
  )
}

export default Cast
