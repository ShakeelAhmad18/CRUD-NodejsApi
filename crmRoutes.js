import { addNewContact ,getContact,getContactWithID,updateContact,deleteContact } from "../controllers/crmControllers"

const routes=(app)=>{

 app.route('/contact')
//get all contact
    .get((req,res,next)=>{
        //middleware
        console.log(`request from: ${req.originalUrl}`)
        console.log(`request Type: ${req.method}`)
        next();
    },getContact)


    //post contact
    .post(addNewContact)

 app.route('/contact/:contactId')
  //get contact by ID
    .get(getContactWithID)
   
    //update contact by id
    .put(updateContact)

   //delete the contact
    .delete(deleteContact)

}

export default routes;