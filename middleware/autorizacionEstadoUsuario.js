import Usuario from '../models/usuario.js';
import jwt_decode from 'jwt-decode';

const autorizacionEstadoUsuario = async (req, res, next) => {
  // paso 1: obtener el usuario desde el token
  const token = req.headers.authorization.split('Bearer ')[1];
  const user = jwt_decode(token)['http://localhost/userData'];

  // paso 2: consultar el usuario en la BD
   Usuario.findOne({ field3: user.email },function (err, response) {
    if (response) {
      // paso 3: verificar el estado del usuario.
      if (response.field7 === 'Rechazado' && response.field7==='Pendiente') {
        // paso 4: si el usuario es rechazado, devolver un error de autenticacion.
        response.sendStatus(401);
        response.end();
      } else {
        console.log('Autorizado');
        // paso 5: si el usuario está pendiente o habilitado, ejecutar next()
        next();
      }
    }else{
      next();
    }
    
  });
};

export default autorizacionEstadoUsuario;
