import { API } from '@/api'

export const getPetsList = ({ query = '', start = 0, limit = 10 }) => {
  return API.get(`/pets?_start=${start}&_limit=${limit}&breed_like=${query}`)
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
