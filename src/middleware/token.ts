import { NextFunction, Request, Response } from "express";
import { load } from "ts-dotenv";
import "dotenv/config";

const env = load({
  SECRET: String,
});

const jwt = require("jsonwebtoken");

//Validação do Token
export const AuthToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  //existência do token
  if (!authHeader)
    return res.json({ error: true, message: "Token not informed!" });

  const partsToken = authHeader.split(" ");
  //Bearer + Hash

  if (partsToken.length !== 2)
    return res.json({ error: true, message: "Token error!" });

  const [part, token] = partsToken;

  //verificação Bearer com RegExr
  if (!/^Bearer$/i.test(part))
    return res.json({ error: true, message: "Token formation error" });

  //Validação do token e usuário
  jwt.verify(token, env.SECRET, function (err: any, codeUser: any) {
    if (err) return res.json({ error: true, message: "Invalid token!" });

    return next();
  });
};
