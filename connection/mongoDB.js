import Mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});


const connectionString= process.env.DATABASE_URL;

// conexión con MongoDB

const db=()=>{
  Mongoose.connect(connectionString)
  .then(() => {
    console.log("database connected")
  }).catch(err => {
    console.error(err)
  })
}

export default db;
