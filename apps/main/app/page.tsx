import {
  Title,
  PageContainer,
  CardContainer,
  Card,
} from '@microfrontends-jb/design-system'
import { config } from '@microfrontends-jb/movie-db-service'
import Image from 'next/image'

export default function Home() {
  const { BASE_URL_DB_IMAGE } = config

  const movies: {
    title: string
    img: any
    urlPath: string
  }[] = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      img: (
        <Image
          src={`${BASE_URL_DB_IMAGE}/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg`}
          alt="Picture of the author"
          width={500}
          height={400}
          placeholder="blur"
          priority={false}
          blurDataURL={`${BASE_URL_DB_IMAGE}/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg`}
        />
      ),
      urlPath: '/movie',
    },
    {
      title: 'ONE PIECE',
      img: (
        <Image
          src={`${BASE_URL_DB_IMAGE}/rlXwxRqZa0dMssgYLQeoNo4WiXg.jpg`}
          alt="Picture of the author"
          width={500}
          height={400}
          placeholder="blur"
          priority={false}
          blurDataURL={`${BASE_URL_DB_IMAGE}/rlXwxRqZa0dMssgYLQeoNo4WiXg.jpg`}
        />
      ),
      urlPath: '/series',
    },
  ]

  return (
    <PageContainer>
      <Title variant="headline">Favorite movies and series</Title>

      <CardContainer>
        {movies.map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
      </CardContainer>
    </PageContainer>
  )
}
