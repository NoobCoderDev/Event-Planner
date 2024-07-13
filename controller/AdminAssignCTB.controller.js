import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import AdminAssignWork from "../model/adminAssignCTB.model.js";

export const addWorkToBda = async(request,response,next)=>{
    try{
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            console.log(errors);
           return response.status(401).json({error:"Bad request",errorMessage: errors.array()});
        }
        let {bdaId,clientId}= request.body;
        console.log(bdaId,clientId);
        let addwork = await AdminAssignWork.create({bdaId,clientId});
        return response.status(200).json({message: "Add work to Bda successfully.",addwork});
    }
    catch(err){
        console.log(err);
       return response.status(500).json({error: "Internal server error."});
    }
}