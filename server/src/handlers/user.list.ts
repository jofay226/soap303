import { dbService } from "../services/user.services.ts";
import { buildSoapResponse } from "../soap/build.ts";

export const listHandler =  async () => {
   const users = await dbService.user.listUsers()
   const soapRes = buildSoapResponse(users, "listUserResponse")
   return soapRes
}