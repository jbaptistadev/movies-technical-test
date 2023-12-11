import { Card, CardsContainer, PageContainer, Title } from '@/components'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import HarryPotterPosterImage from '@/public/harry-potter.jpeg'

export default function Home() {
  const movies: {
    title: string
    imgSrc: string | StaticImport
    urlPath: string
  }[] = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      imgSrc: 'https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
      urlPath: '/movie',
    },
    {
      title: 'ONE PIECE',
      imgSrc: 'https://image.tmdb.org/t/p/w500/rlXwxRqZa0dMssgYLQeoNo4WiXg.jpg',
      urlPath: '/serie',
    },
  ]

  return (
    <PageContainer>
      <Title variant="headline">Favorite movies and series</Title>

      <CardsContainer>
        {movies.map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
      </CardsContainer>
    </PageContainer>
  )
}
