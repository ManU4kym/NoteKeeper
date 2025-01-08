import prisma from "~/lib/prisma"
import bcrypt from 'bcryptjs'

export default defineEventHandler ( async (event) => {
    try {
        const body = await readBody(event)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
    
        await prisma.user.create({
            data: {
                
                email: body.email,
                password: hashedPassword,
                salt: salt,
            },
        })
        
        return { data: 'Success 💐'}
        
    } catch (error) {
        if (error.code === 'P2002') {
            throw createError({
                message: 'Email already exists',
                statusCode: 409,
            })
        }
        throw createError({
            message: error.message || 'Internal Server Error',
            statusCode: 500,
        })
    }
   
}) 