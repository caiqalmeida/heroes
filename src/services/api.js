import axios from 'axios'

const api = axios.create({
  baseURL: 'https://superheroapi.com/api.php/1071944033543904'
})
export function getHeroesBySearch (searchedValue) {
  return api.get(`/search/${searchedValue}`).then((res) => res.data.results)
}

export default api
