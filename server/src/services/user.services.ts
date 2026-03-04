import prisma from "../db/prisma.ts"

export const dbService = {
    user: {
        listUsers : async () => {
            const users = await prisma.user.findMany()
            console.log(users);
            
        },
        createUser : async () => {

        }
    }

}