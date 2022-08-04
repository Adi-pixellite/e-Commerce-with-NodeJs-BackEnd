import {  NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import  config  from '../config'

async function authMiddleware(req: Request, res: Response, next: NextFunction){
try{
      const Token:any = req.headers.authorization?.split(" ")[1] ;
      const verify =  jwt.verify(Token, config.secret )
       next();
}
catch(error){
    return res.json({
        msg :"invalid token : Please Login Again"
    })
}      
}

export default authMiddleware