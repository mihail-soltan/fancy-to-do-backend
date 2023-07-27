import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

export async function signUp(req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, error: "Send needed params" })
        return
    }
    const userExists = await User.findOne({email: req.body.email})
    if(userExists){
        res.json({success: false, error: "User already exists"})
        return
    }
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10)
    })
    await newUser.save()
    const token = jsonwebtoken.sign({ id: newUser._id, email: newUser.email }, process.env.SECRET_JWT_CODE)
    res.json({ success: true, token: token })
}

export async function login(req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, error: "Send needed params" })
        return
    }
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.json({ success: false, error: "User doesn't exist" })
        }
        else {
            if (!bcryptjs.compareSync(req.body.password, user.password)) {
                res.json({ success: false, error: "Wrong password" })
            } else {
                const token = jsonwebtoken.sign({ id: user._id, email: user.email }, process.env.SECRET_JWT_CODE)
                res.json({ success: true, token: token, user: user })
            }
        }
    } catch (err) {
        res.json({ success: false, error: err })
    }
}