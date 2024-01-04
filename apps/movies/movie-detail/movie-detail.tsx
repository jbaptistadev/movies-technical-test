import React from 'react'
import {
  PageContainer,
  Cast,
  MovieHeader,
} from '@microfrontends-jb/design-system'
import { config } from '@microfrontends-jb/movie-db-service'
import Image from 'next/image'
import {
  Cast as ICast,
  Movie,
} from '@microfrontends-jb/movie-db-service/services/get-movie'

export const MovieDetail = ({
  movie,
  cast,
}: {
  movie: Movie
  cast: ICast[]
}) => {
  const { BASE_URL_DB_IMAGE } = config

  return (
    <PageContainer isDetailView>
      <MovieHeader
        movie={{
          ...movie,
          movieImage: (
            <Image
              src={`${BASE_URL_DB_IMAGE}/${movie.poster_path}`}
              alt="background"
              priority
              fill
            />
          ),
        }}
      />
      <Cast
        cast={cast.map((actor: ICast) => ({
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
