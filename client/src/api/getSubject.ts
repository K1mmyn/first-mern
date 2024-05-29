
import { API_URL } from "./config"

export const getSubject = async (subjectId: string) => {
   const response= await fetch(`${API_URL}/subjects/${subjectId}`)
   return response.json()

}