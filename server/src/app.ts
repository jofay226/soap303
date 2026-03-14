import express from "express";
import dotenv from 'dotenv';
import soapRoute from './routes/soap.route.ts'
import bodyParser from "body-parser";
import cors from 'cors';


const app = express()
dotenv.config();


app.use(bodyParser.text({type: "text/xml"}))

app.use(cors({url:"http://localhost:3000"}))


app.use('/api/soap',soapRoute)


export default app