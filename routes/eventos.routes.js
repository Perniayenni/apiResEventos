'use strict'
var express = require('express');

var EventosController = require('../controllers/eventos');

var api = express.Router();
api.get('/prueba/:nombre?', EventosController.prueba);
api.get('/eventos', EventosController.getEventos);
api.get('/eventos/:id', EventosController.getEventosById);
api.post('/eventos', EventosController.savEventos);
api.put('/eventos', EventosController.updateEventos);

module.exports= api;

