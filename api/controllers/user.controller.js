import User from "../models/user.model.js"
import bycrpt from 'bcrypt';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get users!" })
    }
}

export const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const singleUser = await User.findById({ _id: userId });
        res.status(200).json(singleUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get user!" })
    }
}

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const tokenUserId = req.userId
    const { password, ...data } = req.body;

    if (userId !== tokenUserId) {
        res.status(403).json({ message: "Not Authorized" })
    }

    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bycrpt.hash(password, 10)
        }

        const updatedUser = await User.findByIdAndUpdate(userId, {
            ...data,
            ...(updatedPassword && { password: updatedPassword })
        });
        res.send(updatedUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update user!" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "User deleted successfully!", result: result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete user!" })
    }
}