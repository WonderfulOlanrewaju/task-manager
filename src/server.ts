import {app} from './app';

let port : number | string = process.env.PORT  || 9090
app.listen(9090, ()=> console.log(`API running on port ${port}`));