import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export function NotRegisteredUser () {
  const { activateAuth } = useContext(Context)
  const register = useRegisterMutation()
  const login = useLoginMutation()
  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    try {
      register.register({ variables }).then(activateAuth)
    } catch (err) {
      console.error('Error', err)
    }
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    try {
      login.login({ variables }).then(activateAuth)
    } catch (err) {
      console.error('Error', err)
    }
  }
  const errorMsgRegister = register.body.error && 'El usuario ya existe o hay un error'
  const errorMsgLogin = login.body.error && 'Contraseña incorrecto o usuario invalido'

  return (
    <>
      <UserForm error={errorMsgRegister} disabled={register.body.loading} onSubmit={onSubmitRegister} title='Registrarse' />
      <UserForm error={errorMsgLogin} disabled={login.body.loading} onSubmit={onSubmitLogin} title='Iniciar Sesión' />
    </>
  )
}
