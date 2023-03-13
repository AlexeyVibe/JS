const {Film, FilmGenre} = require('../models/models')
const {where} = require("sequelize");

const getFilms = async (req,res) => {
    let films

    if (req.params.id){
        films = await Film.findAll({where:{id: req.params.id}})
    }else {
        films = await Film.findAll()
    }

    res.send(films)
}

const createFilm = async (req,res) => {

    const {genreId} = req.body

    const film = await Film.create(req.body);

    if (genreId){
        genreId.forEach(async (id) => await FilmGenre.create({filmId: film.id, genreId: id}) );
    }

    res.send(film)
}

const updateFilm = async (req,res) => {

    const {name,year_of_production} = req.body
    const {genreId} = req.body

    if (genreId){
        await FilmGenre.destroy({where: {filmId: req.params.id}});
        genreId.forEach(async (id) => await FilmGenre.create({filmId: req.params.id, genreId: id}) );
    }

    await Film.update(
        {name: name.toString(), year_of_production: year_of_production},
        {where: {id: req.params.id}}
    )

    res.send(await Film.findAll({where:{id: req.params.id}}))
}

const deleteFilm = async (req,res) => {
    await Film.destroy({where: {id: req.params.id}})
    res.send('deleted')
}

module.exports = {
    getFilms,
    createFilm,
    updateFilm,
    deleteFilm
}