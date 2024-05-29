import { API_URL } from "./config"

export const getSubjects = async () => {
   const response = await fetch(`${API_URL}/subjects`, {
      method: 'GET',
   })

   return response.json()
}