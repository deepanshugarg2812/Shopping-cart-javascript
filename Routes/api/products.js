const route = require('express').Router()
const product = require('../../db').Product

route.get('/',(req,res)=>{
    product.findAll().then((products)=>{
        res.status(200).send(products)
    }).catch(()=>{
        res.status(501).send("error:No product found")
    })
})

route.post('/',(req,res)=>{

    if(isNaN(req.body.price)){
        return res.status(501).send({
            error : "Not a number"
        })
    }

    product.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : parseFloat(req.body.price)
    }).then((products)=>{
        res.status(201).send(products)
    }).catch(()=>{
        res.status(501).send("error:Already present")
    })
})

exports = module.exports = {
    route
}