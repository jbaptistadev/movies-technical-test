import config from '../config'

const getMovie = async (name: string) => {
  const { API_KEY, API_URL } = config
  const movieResults = await fetch(
    `${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`,
  )

  const movieResultsJson = await movieResults.json()

  const movie = movieResultsJson.results[0]

  const castPromise = await fetch(
    `${API_URL}/movie/${movie.id}/credits?api_key=${API_KEY}`,
  )

  const { cast } = await castPromise.json()

  return {
    movie,
    cast,
  }
}

export default getMovie
