import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export function Layout ({ children, title, subtitle }) {
  return (
    <>
      <Helmet>
        <link rel='apple-touch-icon' sizes='57x57' href='apple-touch-icon.png' />
        {title && <title>{`${title} | Petgram 🐶`} </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
