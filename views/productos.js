import Express from 'express'


import { getProductos,postProductos,patchProductos,deleteProductos ,patchProductosStock } from '../controller/productosController.js';

const rutasProductos = Express.Router();





rutasProductos.route('/productos/').get((request,response)=>{
    getProductos(response)
})




rutasProductos.route('/productos/').post((request,response)=>{
    postProductos(request.body,response)
   
  })




  rutasProductos.route('/productos/:id/').patch((request,response)=>{
    const id = request.params.id
    patchProductos(id,request.body,response)

  })


  rutasProductos.route('/productos/:id/').delete((request,response)=>{
    const id = request.params.id
    deleteProductos(id,response)

  })
  // rutasProductos.route('/productos/').patch((request,response)=>{
  //   patchProductosStock(request.body.productos)

  // })



export default rutasProductos;