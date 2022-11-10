import UserModel from "../database/UserModel";
import { Request, Response } from "express";
import { load } from "ts-dotenv";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import "dotenv/config";

const env = load({
  SECRET: String,
});

const AuthController = {
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;

      const user = await UserModel.find({ username });

      if (!user) {
        return res.json({
          error: true,
          message: "Incorrect email or password!",
        });
      }

      if (!(await bcrypt.compare(password, user[0].password)))
        return res.json({
          error: true,
          message: "Incorrect email or password!",
        });

      user[0].password = undefined;
      const token = jwt.sign(user[0].toJSON(), env.SECRET, {
        //1 dia
        expiresIn: 86400,
      });

      return res.json({ user, token });
    } catch (err) {
      throw err;
    }
  },
};

export default AuthController;
