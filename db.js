const Sequelize = require('sequelize');
const sequelize = new Sequelize('bdgerenciamento', 'root', 'pedro89982442', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then( () => {
    console.log(`Conexão estabelecida`);
}).catch( (e) => {
    console.log(`Erro na conexão com o banco de dados ERRO: ${e}`)
})


//Model
const User = sequelize.define('usuarios', {
    name: {type: Sequelize.STRING}
})
    User.update(
        {name: "Joao"},
        {where: {name: "Pedro"}}
    )