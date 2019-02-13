var express = require('express');
var router = express.Router();


var Empresa = [];
var EmpresaTemplate = {
    RTN:"",
    Empresa:"",
    Correo:"",
    Rubro:"",
    Direccion:"",
    Telefono:""
}

Empresa.push(
    {
    RTN:"123456789",
    Empresa:"Coporacion Flores",
    Correo:"cflores@yahoo.com",
    Rubro:"Venta de Automiles",
    Direccion:"Tegusigalpa MDC",
    Telefono:"2236-5982" 
    }
);


router.get('/all', function(req, res, next){
    res.json(Empresa);
});

router.post('/new', function(req, res,next){
    var _newEmpresa  = Object.assign({}, EmpresaTemplate, req.body);
    _newEmpresa.RTN = 123456789;
    Empresa.push(_newEmpresa);
    res.json(_newEmpresa);
});

router.put('/Empresa/:RTN', function(req, res, next){
    var RTN = req.params.RTN;
    var modifiedEmpresa = 123456789;
    Empresa = Empresa.map(
        function(Empresa, index) {
            if (Empresa.RTN === RTN){
                modifiedEmpresa = Object.assign(Empresa, req.body);
                return modifiedEmpresa;
            } else {
                return Empresa;
            }

        }
    );
    res.json(modifiedEmpresa);
})

module.exports = router;
