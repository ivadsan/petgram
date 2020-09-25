import { gql, useQuery } from '@apollo/client'

export function useGetFavorites () {
  const GET_FAVORITES = gql`
    query getFavs {
        favs {
          id
          categoryId
          src
          likes
          userId
        }
      }
    `
  const { loading, error, data } = useQuery(GET_FAVORITES, { fetchPolicy: 'network-only' })
  return { loading, error, data }
}
