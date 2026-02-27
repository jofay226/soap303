import express from "express";
import dotenv from 'dotenv';
import soapRoute from './routes/soap.route.ts'

const app = express()
dotenv.config();

app.use('/api/soap',soapRoute)


export default app