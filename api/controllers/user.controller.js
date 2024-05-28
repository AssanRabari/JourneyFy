import User from "../models/user.model.js"

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

export const updateUser = (req, res) => {
    console.log("updateUser")
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update user!" })
    }
}

export const deleteUser = (req, res) => {
    console.log("deleteUser")
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete user!" })
    }
}