import { API } from '@/api'

export const getPetsList = () => {
  return API.get('/pets')
}

export const getPetById = (id) => {
  return API.get(`/pets/${id}`)
}

export const getPetByBreed = (breed) => {
  return API.get(`/pets?breed=${breed}`)
}

export const getInitialSet = () => {
  return API.get('/initialSet')
}
