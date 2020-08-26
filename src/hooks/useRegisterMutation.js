import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`
export const useRegisterMutation = (variables = {}) => {
  const [register, body] = useMutation(REGISTER, variables)
  return { register, body }
}
