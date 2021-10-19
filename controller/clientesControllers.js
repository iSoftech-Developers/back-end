import Cliente from "../models/cliente.js";

const getClientes= async(response)=>{
    await Cliente.find({}).then((clientes)=>{
        response.json(clientes)
      })
}

const postClientes= async(request,response)=>{
    const cliente = new Cliente({
        field1:request.nombrecliente,
        field2:request.idcliente,
        field3:request.email,
        field4:request.ciudad,
        field5:request.telefono,
        field6:request.departamento,
        field7:request.direccion,
        field8:request.personacontacto,
        ids:request.idcliente,
      })
      await cliente.save()
      .then(() => {
        response.sendStatus(201)
      }).catch(err => {
        console.error(err)
      })
}

const patchClientes = async (id ,request,response)=>{
        await Cliente.findByIdAndUpdate(id, {
          field3:request.email,
          field4:request.ciudad,
          field5:request.telefono,
          field6:request.departamento,
          field7:request.direccion,
          field8:request.personacontacto,
      })
        .then(() => {
          response.sendStatus(202)
        }).catch(err => {
          console.error(err)
        })
}

const deleteClientes = async (id, response)=>{
   await Cliente.findByIdAndRemove(id)
        .then(() => {
          response.sendStatus(200)
        }).catch(err => {
          console.error(err)
        })
}

export {getClientes, postClientes, patchClientes, deleteClientes};