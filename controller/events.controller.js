import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Event from "../model/events.model.js";

export const addEvent = async(request,response,next)=>{
    try{
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            console.log(errors);
           return response.status(401).json({error:"Bad request",errorMessage: errors.array()});
        }
        let {eventName,startDate,endDate,budget,place,bda_Id,status,clientId,BdaId}= request.body;
        console.log(eventName,startDate,endDate,budget,place,bda_Id,status,clientId,BdaId);
        let addevent = await Event.create({eventName,startDate,endDate,budget,place,bda_Id,status,clientId,BdaId});
        return response.status(200).json({message: "Event successfully saved.",addevent});
    }
    catch(err){
        console.log(err);
       return response.status(500).json({error: "Internal server error."});
    }
}