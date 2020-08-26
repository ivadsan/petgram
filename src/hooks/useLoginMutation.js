import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!){
      login(input: $input)
  }`
export const useLoginMutation = (variables = {}) => {
  const [login, body] = useMutation(LOGIN, variables)
  return { login, body }
}
