'use client'
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
`

const Overlap = styled.div`
  position: relative;
  overflow: hidden;
  height: 600px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 600px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 100%, transparent);
  }
`

const MovieDetail = styled.div`
  position: absolute;

  padding: 3rem;
  bottom: 0;
`

export const OverlapBackground = ({
  children,
  poster,
}: {
  children: React.ReactNode | React.ReactNode[]
  poster: JSX.Element
}) => {
  const Poster = () => poster
  return (
    <Background>
      <Poster />
      <Overlap>
        <MovieDetail>{children}</MovieDetail>
      </Overlap>
    </Background>
  )
}

export default OverlapBackground
