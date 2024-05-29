import { API_URL } from "./config"

export const deleteSubject = async (subjectId:string) => {
   return await fetch(`${API_URL}/subjects/${subjectId}`, {method: "DELETE"})
}