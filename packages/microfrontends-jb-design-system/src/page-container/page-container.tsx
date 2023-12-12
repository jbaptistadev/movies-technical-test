'use client'
import styled from 'styled-components'
interface Props {
  children: React.ReactNode | React.ReactNode[]
  isDetailView?: boolean
}

const Container = styled.main<{ $isDetailView?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) =>
    props.$isDetailView ? '0rem 0rem 0rem 0rem' : '3rem 0rem 0rem 0rem'};
  background: linear-gradient(0deg, #002d7a 0%, rgba(6, 17, 36, 1) 100%);
  height: ${(props) => (props.$isDetailView ? '100%' : '100vh')};

  @media only screen and (max-width: 65em) {
    height: 100%;
  }

  @media only screen and (max-width: 40em) {
    height: 100%;
  }
`

export const PageContainer = ({ children, isDetailView = false }: Props) => {
  return <Container $isDetailView={isDetailView}>{children}</Container>
}

export default PageContainer
