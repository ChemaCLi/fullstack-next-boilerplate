import { UserRepository } from "../domain/user-repository"

export interface DeleteByIdUserData {
  id: string
}

export const deleteUserBy = ({ id }: DeleteByIdUserData, userRepository: UserRepository) => {
  return userRepository.deleteUser({ id })
}
