'use client'
import React from 'react'
import styled from 'styled-components'

const ParagraphBase = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;

  @media only screen and (max-width: 65em) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 40em) {
    font-size: 1rem;
  }
`

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <ParagraphBase>{children}</ParagraphBase>
}

export default Paragraph
