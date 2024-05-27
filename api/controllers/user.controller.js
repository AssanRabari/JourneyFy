export const getUsers = (req, res) => {
    console.log("getUsers")
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get users!" })
    }
}

export const getUser = (req, res) => {
    console.log("getUser")
    try {

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