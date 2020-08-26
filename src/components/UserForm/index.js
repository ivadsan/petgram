import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export function UserForm ({ onSubmit, title, error, disabled }) {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
