import dotenv from 'dotenv';
import db from './connection/mongoDB.js'
import Express from 'express'
import Cors from 'cors';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import autorizacionEstadoUsuario from './middleware/autorizacionEstadoUsuario.js';


import rutasClientes from './views/clientes.js';
import rutasProductos from './views/productos.js';
import rutasUsuarios from './views/usuarios.js';
import rutasVenta from './views/venta.js';
db()


const app = Express();
dotenv.config({ path: './.env' });


app.use(Cors())
app.use(Express.json())


var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://proyectosoftech.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'api-proyecto-softech',
  issuer: 'https://proyectosoftech.us.auth0.com/',
  algorithms: ['RS256']
});


// 4 y 5: enviar token a auth para que devuelva si es valido o no
app.use(jwtCheck);
app.use(autorizacionEstadoUsuario);



app.use(rutasClientes)
app.use(rutasProductos)
app.use(rutasUsuarios)
app.use(rutasVenta)


const PORT= process.env.PORT;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

