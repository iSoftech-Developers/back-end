import Mongoose  from 'mongoose';

const clienteSchema = new Mongoose.Schema({
    ids:String, //id
    field1:String, // razon social
    field2:String, // nit -cc
    field3:String, // email
    field4:String, // ciudad
    field5:String, // telefono
    field6:String, // depto
    field7:String, // direccion
    field8:String, // persona contacto
  });

  const Cliente = Mongoose.model('Cliente',clienteSchema);

 export default Cliente;