import Usuario from "../models/usuario.js";
import jwt_decode from 'jwt-decode';


const getUsuarios= async(response)=>{
  await Usuario.find({}).then((usuarios)=>{
      response.json(usuarios)
    })
}

const consultarOCrearUsuario = (request, response) => {
  // 6.1. obtener los datos del usuario desde el token
  const token = request.headers.authorization.split('Bearer ')[1];
  const user = jwt_decode(token)["http://localhost/userData"];

  // 6.2. con el correo del usuario o con el id de auth0, verificar si el usuario ya esta en la bd o no´
  Usuario.findOne({ field3: user.email },function (err, adventure){
    if (adventure){
      response.json(adventure)
    }else{
      user.auth0ID = user._id;
      delete user._id;
      user.rol = 'Sin Rol';
      user.estado = 'Pendiente';
      postUsuariosAuth0(user,response); 
    }
  }).then(() => {
    response.sendStatus(201)
  }).catch(err => {
    console.error(err)
  })
  
      // 7.2. si el usuario no esta en la bd, lo crea y devuelve la info
 
      
};

const postUsuariosAuth0 = async(request, response)=>{
  const usuario = new Usuario({
      field7:request.estado,
      field1:request.name,
      field3:request.email,
      field4:request.rol,
      field5:request.created_at,
      field8:request.picture,

    })
   await  usuario.save()
    .then(() => {
        response.sendStatus(401)
        response.end();
    }).catch(err => {
      console.error(err)
    })
}

const postUsuarios = async(request, response)=>{
    const usuario = new Usuario({
        field1:request.nombre,
        field2:request.idusuario,
        field3:request.email,
        field4:request.rol,
        field5:request.fechaingreso,
        field6:request.celular,
        field7:request.estado,
        ids:request.idusuario,
      })
     await  usuario.save()
      .then(() => {
        response.sendStatus(201)
      }).catch(err => {
        console.error(err)
      })
}

const patchUsuarios = async (id ,request,response)=>{
    await Usuario.findByIdAndUpdate(id, {
        field2:request.idusuario,
        field3:request.email,
        field4:request.rol,
        field6:request.celular,
        field7:request.estado,
    })
      .then(() => {
        response.sendStatus(202)
      }).catch(err => {
        console.error(err)
      })
}

const deleteUsuarios  = async (id,response)=>{
    await Usuario.findByIdAndRemove(id)
    .then(() => {
      response.sendStatus(200)
    }).catch(err => {
      console.error(err)
    })
}


export { getUsuarios, postUsuarios, patchUsuarios, deleteUsuarios ,consultarOCrearUsuario}
