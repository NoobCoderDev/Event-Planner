import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Address from "../model/address.model.js";

export const addAddress = async(request,response,next)=>{
   try{
      const errors =  validationResult(request);
      if(!errors.isEmpty())
        return response.status(401).json({error: "Bad request"});

      let {local,city,state,pincode,clientId,bdaId,vendorId,customerId} = request.body;  
      console.log(local,city,state,pincode,vendorId,clientId,bdaId,customerId);
      let address = await Address.create({local,city,state,pincode,vendorId,clientId,bdaId,customerId});
      return response.status(201).json({message: 'Address saved',address}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}

export const fetchAddress = async(request,response,next)=>{
   try{
      let {clientId,bdaId,customerId,vendorId} = request.body;  
      if(clientId){
         let address = await Address.findOne({where:{clientId},raw:true});
         if(address)
            return response.status(201).json({message: 'Address Fetched',address}); 
         else
            return response.status(404).json({error:"Address not found."});
      }
      else if(bdaId){
         let address = await Address.findOne({where:{bdaId},raw:true});
         if(address)
            return response.status(201).json({message: 'Address Fetched',address}); 
         else
            return response.status(404).json({error:"Address not found."});
      }
      else if(customerId){
         let address = await Address.findOne({where:{customerId},raw:true});
         if(address)
            return response.status(201).json({message: 'Address Fetched',address}); 
         else
            return response.status(404).json({error:"Address not found."});
      }
      if(vendorId){
         let address = await Address.findOne({where:{vendorId},raw:true});
         if(address)
            return response.status(201).json({message: 'Address Fetched',address}); 
         else
            return response.status(404).json({error:"Address not found."});
      }
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}