var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var mongoose = require('mongoose');
var Geofences = mongoose.model('Geofences');

//GET - Listar tareas
router.get('/', function(req, res, next){
    Geofences.find(function(err, geofences){
        if(err){return next(err)}

        res.json(geofences)
    })
})

//POST - Agregar tarea
router.post('/n', function(req, res, next){
    var geocerca = new Geofences(req.body);

    geocerca.save(function(err, geocerca){
        if(err){return next(err)}
            res.json(geofence);
    })
})

//PUT - Actualizar tarea
router.put('/u/:id', function(req, res){
    Geofences.findById(req.params.id, function(err, geofence){
        geofence.name = req.body.name;
        geofence.groups_count = req.body.groups_count;
        geofence.users_count = req.body.users_count;
        // geocerca.path = req.body.path;

        geofence.save(function(err){
            if(err){res.send(err)}
            
            res.json(geofence);
        })
    })
})

//DELETE - Eliminar Tarea
router.delete('/d/:id', function(req, res){
    Geofences.findByIdAndRemove(req.params.id, function(err){
        if(err){res.send(err)}
            res.json({message: 'Registro Eliminado'});
    })
})

module.exports = router;