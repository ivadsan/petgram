import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export function Favs () {
  return (
    <Layout title='Tus Favoritos' subtitle='Aquí puedes encontrar tus animales favoritos'>
      <ListOfFavs />
    </Layout>
  )
}
