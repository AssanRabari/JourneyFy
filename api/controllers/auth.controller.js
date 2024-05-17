import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  //hasing the password

  //creating new user
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("register end point", hashedPassword);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  console.log("newUser-----", newUser);
};

export const login = (req, res) => {
  //db operation
};

export const logout = (req, res) => {
  //db operation
};
