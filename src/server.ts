import {app} from './app';
import dotenv from 'dotenv';
dotenv.config();

let port : number | string = process.env.PORT  || 9090;

process.env.NODE_ENV ? 
app.listen(9090, ()=> console.log(`API running on port ${port}`)) : null