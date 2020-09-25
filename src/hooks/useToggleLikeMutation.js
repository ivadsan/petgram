import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}`

export const useToggleLikeMutation = (variables = {}) => {
  const [toggleLike] = useMutation(LIKE_PHOTO, variables)
  return { toggleLike }
}
