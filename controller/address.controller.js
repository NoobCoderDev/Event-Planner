import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Address from "../model/address.model.js";

export const addAddress = async(request,response,next)=>{
   try{
      const errors =  validationResult(request);
      if(!errors.isEmpty())
        return response.status(401).json({error: "Bad request"});

      let {local,city,state,pincode,clientId,BdaId,vendorId,customerId} = request.body;  
      console.log(local,city,state,pincode,clientId,BdaId,vendorId,customerId);
      let address = await Address.create({local,city,state,pincode,vendorId,clientId,BdaId,customerId});
      return response.status(201).json({message: 'Address saved',address}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}