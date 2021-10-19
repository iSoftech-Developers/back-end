import Mongoose  from 'mongoose';

const productoSchema = new Mongoose.Schema({
    ids:String, // id
    field1:String, // descripcion
    field2:Number, // valor unitario
    field3:Number, // stock
    field4:String, // talla
    field5:String, // estado
    field6:String, // genero
    field7:String, // color
    field8:Number,//
    
  });

  const Producto = Mongoose.model('Producto',productoSchema);

  

 export default Producto;