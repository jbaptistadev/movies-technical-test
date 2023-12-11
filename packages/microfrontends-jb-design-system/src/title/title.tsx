'use client'
import React from 'react'
import styled from 'styled-components'

const TitleBase = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;

  @media only screen and (max-width: 65em) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 40em) {
    font-size: 1rem;
  }
`

const Headline = styled(TitleBase)`
  font-size: 3rem;
  font-weight: 500;

  @media only screen and (max-width: 65em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`
const SmallHeadline = styled(TitleBase)`
  font-size: 2rem;
  font-weight: 300;

  @media only screen and (max-width: 65em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`

const SubTitle = styled(TitleBase)`
  font-size: 1rem;
  font-weight: 300;

  @media only screen and (max-width: 65em) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 40em) {
    font-size: 0.7rem;
  }
`

interface Props {
  variant?: 'headline' | 'smallHeadline' | 'title' | 'subTitle'
  children: React.ReactNode
}

const Title = ({ children, variant = 'title' }: Props) => {
  switch (variant) {
    case 'headline':
      return <Headline>{children}</Headline>
    case 'smallHeadline':
      return <SmallHeadline>{children}</SmallHeadline>
    case 'subTitle':
      return <SubTitle>{children}</SubTitle>
    default:
      return <TitleBase>{children}</TitleBase>
  }
}

export default Title
