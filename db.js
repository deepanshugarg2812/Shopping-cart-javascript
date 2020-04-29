const Sequelize = require('sequelize')

const db = new Sequelize('shopping','ShoppingUser','myUserPass',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 5
    }
})

const User = db.define('user',{
    id : {
        type : Sequelize.INTEGER(40),
        allowNull : false,
        primaryKey : true,
        autoIncrement : true 
    },
    name : {
        type : Sequelize.STRING(40),
        allowNull : false
    }
})

const Product = db.define('product',{
    id : {
        type : Sequelize.INTEGER(40),
        allowNull : false,
        primaryKey : true ,
        autoIncrement : true
    },
    name : {
        type : Sequelize.STRING(40),
        allowNull : false
    },
    manufacturer : {
        type : Sequelize.STRING(40),
        allowNull : false
    },
    price : {
        type : Sequelize.FLOAT,
        defaultValue : 0.0
    }
})

db.sync().then(()=>{
    console.log("Created successfully")
})
.catch((err)=>{
    console.log(err)
})

exports = module.exports = {
    db,User,Product
}