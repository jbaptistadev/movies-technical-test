import {
  Title,
  PageContainer,
  CardContainer,
  Card,
} from '@microfrontends-jb/design-system'
import Image from 'next/image'

export default function Home() {
  const movies: {
    title: string
    img: any
    urlPath: string
  }[] = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      // imgSrc: 'https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
      img: (
        <Image
          src="https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
          alt="Picture of the author"
          width={500}
          height={400}
          placeholder="blur"
          priority={false}
          blurDataURL="https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
        />
      ),
      urlPath: '/movie',
    },
    {
      title: 'ONE PIECE',
      // img: 'https://image.tmdb.org/t/p/w500/rlXwxRqZa0dMssgYLQeoNo4WiXg.jpg',
      img: (
        <Image
          src="https://image.tmdb.org/t/p/w500/rlXwxRqZa0dMssgYLQeoNo4WiXg.jpg"
          alt="Picture of the author"
          width={500}
          height={400}
          placeholder="blur"
          priority={false}
          blurDataURL="https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
        />
      ),
      urlPath: '/serie',
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
