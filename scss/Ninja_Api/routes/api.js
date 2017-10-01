const express=require('express');
const router=express.Router();
const Ninja=require('../models/ninja');

// obtener todos los ninjas

router.get('/ninjas',function (req,res) {
  Ninja.find({}).then(function(ninjas){
    res.send(ninjas);
  });
});


// obtener ninjas cercanos a coordenadas indicadas
// obtener todos los ninjas
/*
router.get('/ninjas',function (req,res,next) {
  Ninja.geoNear(
  {type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
  {maxDistance:1000000,spherical:true}
).then(function (ninjas) {
  res.send(ninjas);
});
});
*/


// obtener un ninja en especifico
router.get('/ninjas/:id',function (req,res,next) {
  Ninja.findById({_id:req.params.id},req.body).then(function(ninja){
    res.send(ninja);
  });
});

// create new injas
router.post('/ninjas',function (req,res,next) {
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});

// update ninja from db
router.put('/ninjas/:id',function (req,res,next) {
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function () {
    Ninja.findOne({_id:req.params.id}).then(function(ninja) {
      res.send(ninja);
    });
  });
});

// delate ninja from db
router.delete('/ninjas/:id',function (req,res,next) {
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function (ninja) {
    res.send(ninja);
  })
});

module.exports=router;
