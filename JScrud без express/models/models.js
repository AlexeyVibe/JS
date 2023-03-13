const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Film = sequelize.define('film', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    year_of_production: {type: DataTypes.INTEGER}
})

const Genre = sequelize.define('genre',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

const FilmGenre = sequelize.define('film_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Film.belongsToMany(Genre,{through: FilmGenre})
Genre.belongsToMany(Film, {through: FilmGenre})

module.exports = {
    Film,
    Genre,
    FilmGenre
}