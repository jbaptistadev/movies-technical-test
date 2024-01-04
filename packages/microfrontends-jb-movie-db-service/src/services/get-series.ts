import config from '../config'

export interface Series {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
  genres: { id: number; name: string }[]
}

export interface Cast {
  cast_id: number
  name: string
  profile_path: string
}

const getSeries = async (name: string) => {
  const { API_KEY, API_URL } = config
  const seriesResults = await fetch(
    `${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`,
  )

  const seriesResultsJson = await seriesResults.json()

  const series: Series = seriesResultsJson.results[0]

  const castPromise = await fetch(
    `${API_URL}/movie/${series.id}/credits?api_key=${API_KEY}`,
  )

  const { cast }: { cast: Cast[] } = await castPromise.json()

  return {
    series,
    cast,
  }
}

export default getSeries
