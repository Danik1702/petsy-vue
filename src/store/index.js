import { createStore } from 'vuex'
import {
  getPetsList,
  getPetById,
  getPetByBreed,
  getInitialSet,
} from '@/services/PetsService'

export default createStore({
  state: {
    pets: [],
    pet: {},
    initialSet: {},
  },
  mutations: {
    GET_PETS(state, pets) {
      state.pets = pets
    },
    GET_PET(state, pet) {
      state.pet = pet
    },
    GET_INITIAL_SET(state, initialSet) {
      state.initialSet = initialSet
    },
  },
  actions: {
    getPetsList: async ({ commit }, requestOptions) => {
      try {
        const response = await getPetsList(requestOptions)
        commit('GET_PETS', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    getPetById: async ({ commit, state }, petId) => {
      if (state.pet.id === petId) {
        return
      }

      try {
        const response = await getPetById(petId)
        commit('GET_PET', response.data[0])
      } catch (error) {
        console.log(error)
      }
    },
    getPetByBreed: async ({ commit, state }, petBreed) => {
      if (state.pet.breed === petBreed) {
        return
      }

      try {
        const response = await getPetByBreed(petBreed)
        commit('GET_PET', response.data[0])
      } catch (error) {
        console.log(error)
      }
    },
    getInitialSet: async ({ commit }) => {
      try {
        const response = await getInitialSet()
        commit('GET_INITIAL_SET', response.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  // getters: {},
  // modules: {},
})
