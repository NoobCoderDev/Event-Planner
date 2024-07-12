import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Vendor from "../model/vendors.model.js";

export const signIn = async(request,response,next)=>{
    const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.status(401).json({error: "Bad request", errorMessage: errors.array()});
    let {email,password} = request.body;
    try{
       let vendor = await Vendor.findOne({where:{email},raw: true});
       if(vendor)
          return Vendor.checkPassword(password,vendor.password) ? response.status(200).json({message: 'sign in success',vendor}):response.status(401).json({error: "Bad request | Invalid password"});
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

      let {firstname,lastname,email,phone,password,category} = request.body;  
      console.log(firstname,lastname,email,phone,password,category);
      let vendor = await Vendor.create({firstname,lastname,email,phone,password,category});
      return response.status(201).json({message: 'Vendor saved',vendor}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}