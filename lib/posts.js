import axios from 'axios'
import {BASE_URL, APP_ID} from './constants'

export const getPostsList = async () => {
  const posts = await axios.get(`${BASE_URL}/posts`)
  .then(({data}) => {
    return data
  })

  return posts
}