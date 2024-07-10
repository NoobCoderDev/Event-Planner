import {validationResult} from "express-validator";
import bcrypt from "bcryptjs";
import Client from "../model/client.model.js";

export const signIn = async(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
     return response.status(401).json({error: "Bad request", errorMessage: errors.array()});
    try{
        let {email,password} = request.body;
        let client = await Client.findOne({where:{email},raw:true});
        if(client)
            return Client.checkPassword(password,client.password) ? response.status(200).json({message: 'sign in success',client}) : response.status(401).json({error: "Bad Request | Invalid password"});
    }
    catch(err){
        return response.status(500).json({error:"Internal server error."});
    }
}

export const signUp = async(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
        return response.status(401).json({error:"Bad request",errorMessage: errors.array()});
    try{
        let {firstname,lastname,email,phone,password,address} = request.body;
        let client = await Client.create(firstname,lastname,email,phone,address,password);
        return response.status(201).json({message: "Client Saved.",client});
    }
    catch(err){
        return response.status(401).json({error:"Internal server error."});
    }
}