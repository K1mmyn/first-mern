import { API_URL } from "./config"

export const deleteTodo = async (subjectId: string ,todoIndex: number) => {
   const response = await fetch(`${API_URL}/subjects/${subjectId}/${todoIndex}`, {method: 'DELETE'})
   return response.json()
}