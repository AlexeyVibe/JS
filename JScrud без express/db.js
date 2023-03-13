const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'JS_db1',
    'postgres',
    'postgres',
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)