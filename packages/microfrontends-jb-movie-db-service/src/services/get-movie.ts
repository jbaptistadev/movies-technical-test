import config from '../config'

export interface Movie {
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

const getMovie = async (name: string) => {
  const { API_KEY, API_URL } = config
  const movieResults = await fetch(
    `${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`,
  )

  const movieResultsJson = await movieResults.json()

  const movie: Movie = movieResultsJson.results[0]

  const castPromise = await fetch(
    `${API_URL}/movie/${movie.id}/credits?api_key=${API_KEY}`,
  )

  const { cast }: { cast: Cast[] } = await castPromise.json()

  return {
    movie,
    cast,
  }
}

export default getMovie
