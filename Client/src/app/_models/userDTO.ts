import { PhotoDTO } from "./photoDTO"

export interface UserDTO {
  id: number
  username: string
  age: number
  photoUrl: string
  knownAs: string
  created: string
  gender: string
  introduction: string
  interests: string
  lookingFor: string
  city: string
  country: string
  photos: PhotoDTO[]
  lastActive: string
}
