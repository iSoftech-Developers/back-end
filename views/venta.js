import Express from 'express'
import Venta from '../models/venta.js';

import {patchProductosStock} from '../controller/productosController.js'



const rutasVenta = Express.Router();

rutasVenta.route('/venta/').post((request,response)=>{
    
    const venta = new Venta({
        estadoVenta:request.body.estadoVenta,
        fechaPago:request.body.fechaPago,
        valorTotalVenta:request.body.valorTotalVenta,
        productos:request.body.productos,
        vendedor:request.body.vendedor,
        cliente:request.body.cliente,

      })
      patchProductosStock(request.body.productos)
      venta.save()
      .then(() => {
        response.sendStatus(201)
      }).catch(err => {
        console.error(err)
      })
      
})

rutasVenta.route('/venta/').get((request,response)=>{
    
    Venta.find({}).then((venta)=>{
    response.json(venta)})
    
})


rutasVenta.route('/venta/:id/').delete((request,response)=>{
  const id = request.params.id 
  Venta.findByIdAndRemove(id)
.then(() => {
  response.sendStatus(200)
}).catch(err => {
  console.error(err)
})
  
})

rutasVenta.route('/venta/:id/').patch((request,response)=>{
  const id = request.params.id 
    Venta.findByIdAndUpdate(id, {
      estadoVenta:request.body.estadoVenta,
      fechaPago:request.body.fechaPago,
      valorTotalVenta:request.body.valorTotalVenta,
      productos:request.body.productos,
      vendedor:request.body.vendedor,
      cliente:request.body.cliente,
  }).then(() => {
    response.sendStatus(202)
  }).catch(err => {
    console.error(err)
  })
  
})



export default rutasVenta;
