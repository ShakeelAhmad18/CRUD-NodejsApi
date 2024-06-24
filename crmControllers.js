import mongoose from "mongoose";
import { contactSchema } from "../models/crmModels";

const Contact =mongoose.model("Contact",contactSchema)

export const addNewContact = async (req, res) => {
    const newContact = new Contact(req.body);
  
    try {
      const savedContact = await newContact.save();
      res.status(201).json(savedContact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const getContact = async (req, res) => {
    try {
      const contacts = await Contact.find({});
      res.json(contacts);
    } catch (err) {
      res.status(500).send(err);
    }
  };


  export const getContactWithID=async (req,res)=>{
    try{
       const contacts=await Contact.findById(req.params.contactId)
       res.json(contacts)
    }catch (err){
      res.status(500).send(err)
    }
  }
  

  export const updateContact=async (req,res)=>{
    try{
      const contact=await Contact.findOneAndUpdate({_id: req.params.contactId},req.body,{ new:true })
      res.json(contact)
    }catch(err){
      res.status(500).send(err)    
    }
  }


 export const deleteContact=async (req,res)=>{
  try{
    const result=await Contact.deleteOne({_id: req.params.contactId})
        if(result.deletedCount === 0){
          res.status(404).json({message: 'Contact not found'})
        }
        else{
              res.status(201).json({message: 'Contact Succesfully Deleted'})
        }
    }catch(err){
      res.status(500).send(err)
    }
 }