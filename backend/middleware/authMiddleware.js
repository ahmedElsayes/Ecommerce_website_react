import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token
    // console.log(req.headers.authorization)

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // console.log(decoded)
            req.user = await User.findById(decoded.id).select('-password')
            
        } catch (error) {
            console.log(error)
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized')
    }

    next()
})

export { protect }