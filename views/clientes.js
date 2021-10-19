import Express from 'express'
import { getClientes, postClientes, patchClientes, deleteClientes } from '../controller/clientesControllers.js';


const rutasClientes = Express.Router();

rutasClientes.route('/clientes/').get((request,response)=>{
    //con el modelo anterior para q nos devuelva un resultado
      getClientes(response)
    })


    rutasClientes.route('/clientes/').post((request,response)=>{
      postClientes(request.body,response)
  })
  


rutasClientes.route('/clientes/:id/').patch((request,response)=>{
        const id = request.params.id
        patchClientes(id, request.body, response)
    })

rutasClientes.route('/clientes/:id/').delete((request,response)=>{
    const id = request.params.id
    deleteClientes(id,response)
  })

export default rutasClientes;