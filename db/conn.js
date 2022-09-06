//setup sequelize mysql -- conexão
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc2','root','1771',{
    host:'localhost',
    dialect:'mysql',
    port:'3305'
})

try{
    sequelize.authenticate()
    console.log('conectamos ao mysql');
}catch(err){
    console.log(`Não foi possivel conectar ao banco: ${err}`);
}

module.exports = sequelize