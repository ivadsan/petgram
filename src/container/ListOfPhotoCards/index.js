import React from 'react'
import { ListOfPhotoCardsComponent } from '../../components/ListOfPhotoCards'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return <ListOfPhotoCardsComponent data={data} />
}
