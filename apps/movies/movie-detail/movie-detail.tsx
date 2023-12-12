import React from 'react'
import {
  PageContainer,
  Cast,
  MovieHeader,
} from '@microfrontends-jb/design-system'
import { config } from '@microfrontends-jb/movie-db-service'
import Image from 'next/image'

export const MovieDetail = ({ movie, cast }: { movie: any; cast: any }) => {
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
        cast={cast.map((actor: any) => ({
          ...actor,
          actorImage: (
            <Image
              src={`${BASE_URL_DB_IMAGE}${actor.profile_path}`}
              alt="Picture of the author"
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
