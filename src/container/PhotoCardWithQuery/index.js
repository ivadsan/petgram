import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'

const GET_PHOTO = gql`
    query getSinglePhoto ($id: ID!){
        photo (id: $id){
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`
const getPhoto = (id) => {
  const { loading, error, data } = useQuery(GET_PHOTO, { variables: { id } })
  console.log()
  if (loading) return <p>Loading....</p>
  if (error) return <p>Error :(</p>
  return <PhotoCard id={id} {...data.photo} />
}

export const PhotoCardWithQuery = ({ id }) => <>{getPhoto(id)}</>
