import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://fake-petsy-server.herokuapp.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
