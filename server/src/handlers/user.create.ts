import { dbService } from "../services/user.services.ts";
import { buildSoapResponse } from "../soap/build.ts";

export const createHandler = async (payload) => {
    const newUser = await dbService.user.createUser(payload)
        console.log(newUser);
        
    const newUserXmlReponse = buildSoapResponse(newUser, "createUserResponse")
    return newUserXmlReponse
    
}


