import Mongoose  from 'mongoose';

const usuarioSchema = new Mongoose.Schema({
    ids:String,
    field1:String,// nombre
    field2:String,// documento
    field3:String,// email
    field4:String,// rol
    field5:Date,// fecha de ingreso
    field6:String,// celular
    field7:String,// estado
    field8:String, // foto
  });

  const Usuario = Mongoose.model('Usuario',usuarioSchema);

  

  export default Usuario;



//   _id
// :
// 6168d13200d2d460a04acdbb
// field1
// :
// Object
// clientID
// :
// "0tByyzPYxpCCECVj0FpUvrMzpjWyJN1m"
// created_at
// :
// "2021-10-14T21:35:47.948Z"
// email
// :
// "jscrojas251@gmail.com"
// email_verified
// :
// true
// family_name
// :
// "Cabrera"
// given_name
// :
// "Sebastian"
// identities
// :
// Array
// locale
// :
// "es"
// name
// :
// "Sebastian Cabrera"
// nickname
// :
// "jscrojas251"
// picture
// :
// "https://lh3.googleusercontent.com/a-/AOh14GgjFRxMY9AaktB8LfVDhNJ8DLU20..."
// updated_at
// :
// "2021-10-15T00:54:11.525Z"
// user_id
// :
// "google-oauth2|108984399072149536549"
// global_client_id
// :
// "5XdtYm2YPgt01UFoo7ZbyzYSucdjS3Gb"
// auth0ID
// :
// "b23d7dd5a504e7606445f8cd36514478"
// rol
// :
// "inactivo"
// __v
// :
// 0