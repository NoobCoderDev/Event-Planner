import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Customer from "../model/customers.model.js";

export const signIn = async(request,response,next)=>{
    const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.status(401).json({error: "Bad request", errorMessage: errors.array()});
    let {email,password} = request.body;
    try{
       let customer = await Customer.findOne({where:{email},raw: true});
       if(customer)
          return Customer.checkPassword(password,admin.password) ? response.status(200).json({message: 'sign in success',customer}) : response.status(401).json({error: "Bad request | Invalid password"});
       return response.status(401).json({error: "Bad request | Invalid email id"});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}

export const signUp = async(request,response,next)=>{
    try{
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            console.log(errors);
           return response.status(401).json({error:"Bad request",errorMessage: errors.array()});
        }
        let {firstname, lastname, phone, email,city,state,description }= request.body;
        let customer = await Customer.create({firstname,lastname,phone,email,city,state,description});
        return response.status(200).json({message: "Customer successfully saved.",customer});
    }
    catch(err){
        console.log(err);
       return response.status(500).json({error: "Internal server error."});
    }
}