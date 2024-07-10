import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Admin from "../model/admin.model.js";

export const signIn = async(request,response,next)=>{
    const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.status(401).json({error: "Bad request", errorMessage: errors.array()});
    let {email,password} = request.body;
    try{
       let admin = await Admin.findOne({where:{email},raw: true});
       if(admin)
          return Admin.checkPassword(password,admin.password) ? response.status(200).json({message: 'sign in success',admin}):response.status(401).json({error: "Bad request | Invalid password"});
       return response.status(401).json({error: "Bad request | Invalid email id"});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const signUp = async(request,response,next)=>{
   try{
      const errors =  validationResult(request);
      if(!errors.isEmpty())
        return response.status(401).json({error: "Bad request"});

      let {username,email,password} = request.body;  
      let admin = await Admin.create({username,email,password});
      return response.status(201).json({message: 'Admin saved',admin}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}