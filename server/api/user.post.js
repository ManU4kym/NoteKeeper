import prisma from "~/lib/prisma"
import bcrypt from 'bcryptjs'
import  validator from 'validator'
import jwt from 'jsonwebtoken'

export default defineEventHandler ( async (event) => {
    try {
        const body = await readBody(event)
          if (!validator.isEmail(body.email)){
            throw createError({
                message: 'Invalid email format',
                statusCode: 400,
            })
        }

        if (!validator.isStrongPassword(body.password, {
            minLength: 8,
            minLowercase: 0,
            minUppercase: 0,
            minNumbers: 0,
            minSymbols: 0,
        })){
            throw createError({
                message: 'Password does not meet the required strength',
                statusCode: 400,
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
      
    
       const user =  await prisma.user.create({
            data: {
                
                email: body.email,
                password: hashedPassword,
                salt: salt,
            },
        })
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
        setCookie(event, 'NoteKeepJWT', token)


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