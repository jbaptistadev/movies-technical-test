import { SeriesDetail } from '@/series-detail/series-detail'
import { getSeries } from '@microfrontends-jb/movie-db-service'

interface Props {
  params: {
    name: string
  }
}

export default async function Home({ params: { name } }: Props) {
  const series = await getSeries(name)

  return <SeriesDetail {...series} />
}
