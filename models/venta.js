import Mongoose  from 'mongoose';

const ventaSchema = new Mongoose.Schema({
    estadoVenta:String,
    fechaPago:String,
    valorTotalVenta:Number,
    productos:[], 
    vendedor:{}, 
    cliente:{},
  });

  const Venta = Mongoose.model('Venta',ventaSchema);

 export default Venta;