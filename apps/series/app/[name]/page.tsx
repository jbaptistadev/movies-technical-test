import { MovieDetail } from '@/components'

interface Props {
  params: {
    name: string
  }
}
export default function Home({ params: { name } }: Props) {
  return <MovieDetail name={name} />
}
