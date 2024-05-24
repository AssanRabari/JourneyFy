import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated" })

    jwt.verify(token, "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNjI2MzU0NCwiaWF0IjoxNzE2MjYzNTQ0fQ.NPdgz8ETPhM62UPaWs5RoTib4Hd77Yh_D4hK41EeR_g", async (err, payload) => {
        if (err) return res.status(403).json({ message: "Token is not valid" })
        req.userId = payload.id

        next()
    })

}