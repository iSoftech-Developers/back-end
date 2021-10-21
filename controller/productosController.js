import Producto from '../models/producto.js'




const getProductos=(response)=>{
     Producto.find({})
        .then((productos)=>{
        response.json(productos)
      })
}



const postProductos= async(request,response)=>{
     const producto = new Producto({
        field1:request.descripcion,
        field2:request.valorunitario,
        field3:request.cantidad,
        field4:request.talla,
        field5:request.estado,
        field6:request.genero,
        field7:request.color,
        ids:request.ids,
      })
         await producto.save()
          .then(() => {
            response.sendStatus(201)
          }).catch(err => {
            console.error(err)
          })
}

const patchProductos = async (id ,request,response)=>{
    await Producto.findByIdAndUpdate(id, {
        field2:request.valorunitario,
        field3:request.cantidad,
        field5:request.estado,
   })
      .then(() => {
        response.sendStatus(202)
      }).catch(err => {
        console.error(err)
      })
}

const deleteProductos = async (id,response)=>{

   await Producto.findByIdAndRemove(id)
    .then(() => {
      response.sendStatus(200)
    }).catch(err => {
      console.error(err)
    })

}




const patchProductosStock =  (request,response)=>{
  
  request.forEach(v=>{
    Producto.findByIdAndUpdate(v._id, {
      field3:(v.field3 - parseInt(v.cantidad)),
  })
  .then(() => {
    console.log('cambio cantidad ok')
  }).catch(err => {
    console.error(err)
  })
 })

  
    
}





export {getProductos,postProductos ,patchProductos, deleteProductos ,patchProductosStock};