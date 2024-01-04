import React from 'react'
import {
  PageContainer,
  Cast,
  MovieHeader,
} from '@microfrontends-jb/design-system'
import { config } from '@microfrontends-jb/movie-db-service'
import Image from 'next/image'
import {
  Series,
  Cast as ICast,
} from '@microfrontends-jb/movie-db-service/services/get-series'

export const SeriesDetail = ({
  series,
  cast,
}: {
  series: Series
  cast: ICast[]
}) => {
  const { BASE_URL_DB_IMAGE } = config

  return (
    <PageContainer isDetailView>
      <MovieHeader
        movie={{
          ...series,
          movieImage: (
            <Image
              src={`${BASE_URL_DB_IMAGE}/${series.poster_path}`}
              alt="background"
              priority
              fill
            />
          ),
        }}
      />
      <Cast
        cast={cast.map((actor: any) => ({
          ...actor,
          actorImage: (
            <Image
              src={`${BASE_URL_DB_IMAGE}${actor.profile_path}`}
              alt={`Picture of the ${actor.profile_path}`}
              width={500}
              height={400}
              placeholder="blur"
              priority={false}
              blurDataURL={`${BASE_URL_DB_IMAGE}${actor.profile_path}`}
            />
          ),
        }))}
      />
    </PageContainer>
  )
}
