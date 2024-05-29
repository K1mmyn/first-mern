import { API_URL } from "./config"

export const createSubect = async (title: string) => {
   const response = await fetch(`${API_URL}/subjects`, {
      method: 'POST',
      body: JSON.stringify({"title": title, "todos": []}),
      headers: {
         "Content-Type": "application/json"
      }
   })
   return response.json()
}