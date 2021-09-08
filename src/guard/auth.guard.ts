import { Request, Response } from "express"

export class AuthGuard {
  public logged(req: Request, resp: Response, next: Function){
    const { authorization } = req.headers
    if(!authorization){
      throw("erro")
    } else {
      next()
    }
  }
}