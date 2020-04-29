const route = require('express').Router()
const user = require('../../db').User

route.get('/',(req,res)=>{
    user.findAll().then((users)=>{
        res.status(200).send(users)
    }).catch(()=>{
        res.status(501).send("error:No user found")
    })
})

route.post('/',(req,res)=>{
    user.create({
        name : req.body.name
    }).then((users)=>{
        res.status(201).send(users)
    }).catch(()=>{
        res.status(501).send("error:Already present")
    })
})

exports = module.exports = {
    route
}