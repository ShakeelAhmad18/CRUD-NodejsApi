import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'
import express from 'express';

const app=express();
const PORT=4000

//mongoose connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb')


//bodyParser

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())


routes(app)


app.get('/',(req,res)=>{
   res.send(`The node and express is running on PORT ${PORT}`)
});

app.listen(PORT,()=>
    console.log(`your server is running on PORT ${PORT}`)
)