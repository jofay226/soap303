import { dbService } from "../services/user.services.ts";

export const listHandler =  async () => {
   
   const users = await dbService.user.listUsers()
  
   
   return users
}