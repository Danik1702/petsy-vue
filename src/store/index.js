import { createStore } from 'vuex'
import { getPetsList, getPetById, getPetByBreed } from '@/services/PetsService'

export default createStore({
  state: {
    pets: [],
    pet: {},
    petsToComparison: [],
    isMobileMenuOpened: false,
    breedForCheckCare: '',
  },
  mutations: {
    GET_PETS(state, pets) {
      state.pets = pets
    },
    GET_PET(state, pet) {
      state.pet = pet
    },
    ADD_PET_TO_COMPARISON(state, pet) {
      state.petsToComparison.push(pet)
    },
    REMOVE_PET_FROM_COMPARISON(state, petId) {
      state.petsToComparison = state.petsToComparison.filter(
        (pet) => pet.id !== petId
      )
    },
    SET_MOBILE_MENU_VISIBILITY(state, value) {
      state.isMobileMenuOpened =
        typeof value === 'undefined' ? !state.isMobileMenuOpened : value
    },
    SET_BREED_FOR_CARE_CHECK(state, breed) {
      state.breedForCheckCare = breed
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
    addPetToComparison: ({ commit }, pet) => {
      commit('ADD_PET_TO_COMPARISON', pet)
    },
    removePetFromComparison: ({ commit }, petId) => {
      commit('REMOVE_PET_FROM_COMPARISON', petId)
    },
    setMobileMenuVisibility: ({ commit }) => {
      commit('SET_MOBILE_MENU_VISIBILITY')
    },
    setBreedForCareCheck: ({ commit }, breed) => {
      commit('SET_BREED_FOR_CARE_CHECK', breed)
    },
  },
  // getters: {},
  // modules: {},
})
