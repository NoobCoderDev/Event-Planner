import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Admin from "../model/admin.model.js";
import BDA from "../model/bda.model.js";

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

      let {firstname,lastname,email,password} = request.body;  
      console.log(firstname,lastname,email,password);
      let admin = await Admin.create({firstname,lastname,email,password});
      return response.status(201).json({message: 'Admin saved',admin}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}

export const getBdaDataById = async (request,response,next)=>{
   try{
      let {id} = request.params;  
      console.log(id);
      let bda = await BDA.findOne({where:{id},raw:true});
      return response.status(201).json({message: 'Fetch data successfully.',bda}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}

export const getAllBdaData = async (request,response,next)=>{
   try{
      let bda = await BDA.findAll({raw:true});
      return response.status(201).json({message: 'Fetch data successfully.',bda}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}