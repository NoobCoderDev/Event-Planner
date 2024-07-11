import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import BDA from "../model/bda.model.js";
import { response } from "express";
// import { raw } from "body-parser";

export const signUp = async(request,response,next)=>{
    try{
        const errors = validationResult(request);
        if(!errors.isEmpty())
            response.status(401).json({error:"Bad request",errorMessage: errors.array()});
        let {firstname, lastname, phone, email,password }= request.body;
        let bda = await BDA.create({firstname, lastname, phone, email,password});
        response.status(200).json({message: "BDA successfully saved.",bda})
    }
    catch(err){
        response.status(500).json({error: "Internal server error."});
    }
}

export const signIn = async(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error: "Bad request", errorMessage: errors.array()});
    try{
        let {email,password} = request.body;
        let bda = await BDA.findOne({where:{email},raw: true});
        if(bda)
            return BDA.checkPassword(password,bda.password) ? response.status(200).json({message: 'sign in success',bda}):response.status(401).json({error: "Bad request | Invalid password"});
        return response.status(401).json({error: "Bad request | Invalid email id"});
    }
    catch(err){
        response.status(500).json({error:"Internal server error."});
    }
}