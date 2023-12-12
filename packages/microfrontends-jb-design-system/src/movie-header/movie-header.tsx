'use client'
import React from 'react'
import styled from 'styled-components'
import OverlapBackground from '../overlap-background'
import Title from '../title'
import Paragraph from '../paragraph'

const ParagraphWrapper = styled.div`
  width: 60%;

  @media only screen and (max-width: 65em) {
    width: 100%;
  }

  @media only screen and (max-width: 40em) {
    width: 100%;
  }
`

export const MovieHeader = ({
  movie: { title, overview, movieImage },
}: {
  movie: any
}) => {
  const MovieImage: any = () => movieImage

  return (
    <OverlapBackground poster={<MovieImage />}>
      <Title variant="headline">{title}</Title>
      <ParagraphWrapper>
        <Paragraph>{overview}</Paragraph>
      </ParagraphWrapper>
    </OverlapBackground>
  )
}

export default MovieHeader
