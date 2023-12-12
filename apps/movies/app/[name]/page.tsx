import { MovieDetail } from '@/movie-detail/movie-detail'
import { getMovie } from '@microfrontends-jb/movie-db-service'

interface Props {
  params: {
    name: string
  }
}

export default async function Home({ params: { name } }: Props) {
  const movie = await getMovie(name)

  return <MovieDetail {...movie} />
}
