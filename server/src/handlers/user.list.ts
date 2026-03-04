import { dbService } from "../services/user.services.ts";

export const listHandler = () => {
    console.log('list handler');
    dbService.user.listUsers()
}