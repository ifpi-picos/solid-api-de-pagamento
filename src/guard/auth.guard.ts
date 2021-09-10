import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { TokenPayloadDto } from "../dtos/tokenPayload.dto"
export class AuthGuard {
  public logged(req: Request, resp: Response, next: Function){
    const { authorization } = req.headers
    if(!authorization){
      resp.status(401).send("token necessário")
    } else {
      const token = jwt.verify(authorization, process.env.JWT_SECRET)
      if(!token){
        resp.status(401).send("token expirado ou inválido")
      } else {
        next()
      }
    }
  }
  public admin(req: Request, resp: Response, next: Function){
    const { authorization } = req.headers
    const token = jwt.decode(authorization) as TokenPayloadDto
    if(token.rule !== 'admin'){
      resp.status(401).send('user rule is not admin')
    } else {
      next()
    }
  }
}