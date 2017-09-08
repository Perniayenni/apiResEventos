'use strict'

var eventos = require('../models/eventos.models');

function prueba(req, res) {

  if (req.params.nombre) {
    var nombre = req.params.nombre;
  } else {
    var nombre = 'sin nombre';
  }

  res.status(200).send({
    data: [2, 3, 4],
    message: "Hola mundo con Nodejs y express" + nombre
  });
}

function getEventos(req, res) {
eventos.getEvent(function (data) {
    if(data!=undefined && data.length>0){
      res.json(200,data);
    }else{
      res.json(405,{"msg":"Error"})
    }
});
}
function savEventos(req, res) {
  var params =req.body;
  console.log(params);
  console.log(params.title+' '+params.start);
    var Data={
      title :params.title,
      start : params.start,
      end : params.end,
      color : params.color
    }


  eventos.addEvent(Data, function (data) {
      if(data!=undefined && data.affectedRows>=1){
          res.json(200,data);
      }else{
          res.json(405,{"msg":"Error al insertar los datos"});
      }
  });

}

function getEventosById(req, res) {
    var params =req.params;
    var id= params.id;

    eventos.getByIdEvent(id,function (data) {
        if(data!=undefined && data.length>0){
            res.json(200,data);
        }else{
            res.json(405,{"msg":"Error al obtener los datos"});
        }
    })
}

function updateEventos(req, res) {
  var params = req.body;
    var Data={
        title :params.title,
        id: params.id
    }

  eventos.updateEvent(Data, function (data) {
      if(data!=undefined){
          res.json(200,data);
      }else{
          res.json(405,{"msg":"Error al actualizar los datos"});
      }
  })

}


module.exports = {
  prueba,
  getEventos,
  savEventos,
    getEventosById,
    updateEventos
}
