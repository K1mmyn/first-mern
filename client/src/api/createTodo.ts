import { API_URL } from "./config"

export const createTodo = async (subjectId: string, newTodo: string) => {
   const response = await fetch(`${API_URL}/subjects/${subjectId}`, {
     method: "POST",
     body: JSON.stringify({ text: newTodo }),
     headers: {
       "Content-Type": "application/json",
     },
   });
   return response.json()
}