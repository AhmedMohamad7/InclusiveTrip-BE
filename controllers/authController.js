import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from '../models/usersModel.js';


export const register = async (req, res) => {
    try {
        const { username, firstName, lastName, email, password, roleId } = req.body;
        const alreadyExists = await user.findOne({ where: { email } });
        const userNameExists = await user.findOne({ where: { username } });
        if (alreadyExists) throw new Error("User already exists");
        if (userNameExists) throw new Error("Username is taken");
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ username, firstName, lastName, email, password: hashedPassword, roleId });
        await newUser.save();
        // const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
        //     expiresIn: '7d'
        // });
        // const isProduction = process.env.NODE_ENV === 'production';
        // const cookieOptions = {
        //     httpOnly: true,
        //     sameSite: isProduction ? 'None' : 'Lax',
        //     secure: isProduction
        // };
        // res.cookie('token', token, cookieOptions);
        res.status(201).json({ success: 'welcome on board' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ where: { email } });
        if (!existingUser) throw new Error("User doesn't exist");
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) throw new Error("Invalid credentials");
        const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });
        const isProduction = process.env.NODE_ENV === 'production';
        const cookieOptions = {
            httpOnly: false,
            sameSite: isProduction ? 'None' : 'Lax',
            secure: isProduction
        };
        res.cookie('token', token, cookieOptions);
        res.status(201).json({ success: 'welcome back' });
        console.log(token);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const signout = async (req, res) => {
    try {
        const isProduction = process.env.NODE_ENV === 'production';
        const cookieOptions = {
            httpOnly: true,
            sameSite: isProduction ? 'None' : 'Lax',
            secure: isProduction
        };
        res.clearCookie('token', cookieOptions);
        res.status(200).json({ success: 'goodbye' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const me = async (req, res) => {
    try {
        const myUser = await user.findOne({ where: { id: req.userId } });
        if (!myUser) throw new Error("User not found");
        res.status(200).json(myUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}