import Express from 'express'

import { deleteUsuarios,  getUsuarios, patchUsuarios, postUsuarios , consultarOCrearUsuario} from '../controller/usuarioControllers.js';




const rutasUsuarios = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error consultando los usuarios');
  } else {
    res.json(result);
  }
};

rutasUsuarios.route('/usuarios/self').get((req, res) => {

  consultarOCrearUsuario(req,res);
  // consultarUsuario(, genercCallback(res));
});





  rutasUsuarios.route('/usuarios').get((request,response)=>{
    getUsuarios(response)
  })
  
  
  rutasUsuarios.route('/usuarios/').post((request,response)=>{
    postUsuarios(request.body, response)
  })
  
  
  rutasUsuarios.route('/usuarios/:id/').patch((request,response)=>{
    const id = request.params.id
    patchUsuarios(id, request.body, response)
  })
  
  rutasUsuarios.route('/usuarios/:id/').delete((request,response)=>{
    const id = request.params.id
    deleteUsuarios(id, response)
  })


export default rutasUsuarios;