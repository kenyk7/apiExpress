var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Clients = mongoose.model('Clients');


//GET
router.get('/clients', function(req, res, next){
    Clients.find(function(err, clients){
        if(err){return next(err)}
        res.json(clients)
    })
});

//POST
router.post('/clients', function(req, res, next){
    var client = new Clients(req.body);

    client.save(function(err, client){
        if(err){return next(err)}
        res.json(client);
    })
});

//PUT
router.put('/clients/:id', function(req, res){
    Clients.findById(req.params.id, function(err, client){
        client.name = req.body.name;

        client.save(function(err){
            if(err){res.send(err)}
            res.json(client);
        })
    })
});

//DELETE
router.delete('/clients/:id', function(req, res){
    Clients.findByIdAndRemove(req.params.id, function(err){
        if(err){res.send(err)}
        res.json({message: 'Registro Eliminado'});
    })
});

module.exports = router;