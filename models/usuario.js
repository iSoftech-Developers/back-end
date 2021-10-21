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

