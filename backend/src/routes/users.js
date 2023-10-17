import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';
import dotenv from 'dotenv';

dotenv.config({path:'/home/student/stocks-manager/.env'});

const router = express.Router();

router.post('/register', async (req, res) => {
    const {username, password} = req.body

    const user = await UserModel.findOne({username});

    if (user) {
        return res.json({message: "Username already exists!"});
    }

    const hasshedPass = await bcrypt.hash(password, 10)
    const newUser = new UserModel ({ username, password: hasshedPass});
    await newUser.save()

    const token = jwt.sign({id: newUser._id}, process.env.Token_SECRET, {
        expiresIn: "1h"
    });

    res.json({ token, userId: newUser._id, message: 'User registered successfully!'})
});

router.post('/log-in', async (req, res) => {
    const {username, password} = req.body

    const user = await UserModel.findOne({username});

    if (!user) {
        return res.json({message: "User Does Not Exist!"});
    }
    
    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({message: "Username or password is incorrect"});
    }

    const token = jwt.sign({id: user._id}, process.env.Token_SECRET, {
        expiresIn: "1h"
    });

    res.json({ token, userId: user._id })
});

export { router as userRouter };

//MIDDLEWARE
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorisation;
    if (token) {
        jwt.verify(token, process.env.Token_SECRET, (err) => {
            if (err) return res.sendStatus(403);
            next();
        });
    } else {
        res.sendStatus(401);
    }

}