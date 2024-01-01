import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export default class UserService {
     async register(username, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, password: hashedPassword });
            await user.save();
            return { status: 201, message: "User created" };
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }

    async login(username, password) {
    const secretKey = "your_secret_key";
    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw { status: 404, message: "User not found" };
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw { status: 401, message: "Incorrect password" };
        }
        const token = jwt.sign({ id: user._id }, secretKey);
        return { status: 200, message: { username: user.username, token } };
    } catch (err) {
        if (err.status) {
            return { status: err.status, message: err.message };
        }
        return { status: 500, message: err.message };
    }
}
}
