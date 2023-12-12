import config from '../config'

const getSeries = async (name: string) => {
  const { API_KEY, API_URL } = config
  const seriesResults = await fetch(
    `${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`,
  )

  const seriesResultsJson = await seriesResults.json()

  const series = seriesResultsJson.results[0]

  const castPromise = await fetch(
    `${API_URL}/movie/${series.id}/credits?api_key=${API_KEY}`,
  )

  const { cast } = await castPromise.json()

  return {
    series,
    cast,
  }
}

export default getSeries
