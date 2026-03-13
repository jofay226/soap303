import prisma from "../db/prisma.ts"

export const dbService = {
    user: {
        listUsers : async () => {
            const users = await prisma.user.findMany()
            return users
            
        },
        createUser : async (payload) => {
            const newUser = await prisma.user.create({
                data: {
                    name: payload.name[0],
                    age: +payload.age[0],
                    email: payload.email[0]
                }
            })
            return  newUser
        }
    }

}