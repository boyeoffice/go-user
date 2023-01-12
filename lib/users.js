import axios from 'axios'
import { BASE_URL, APP_ID } from './constants'
export const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users`)
        .then(({ data }) => {
            return data
        })
    return users
}

export const getAllIds = async () => {
    const userData = await axios.get(`${BASE_URL}/users`)
        .then(({ data }) => {
            return data
        })
    return userData.users.map(user => {
        return {
            params: {
                id: user.id
            }
        }
    })
}

export const getUserDataById = async (id) => {
    const userData = await axios.get(`${BASE_URL}/users/${id}`)
        .then(({ data }) => {
            return data
        })
    return userData
}