const {Genre, FilmGenre} = require('../models/models')

const getGenres = async (req,res) => {
    let genres

    if (req.params.id){
        genres = await Genre.findAll({where:{id: req.params.id}})
    }else {
        genres = await Genre.findAll()
    }

    res.send(genres)
}

const createGenre = async (req,res) => {

    const {filmId} = req.body

    const genre = await Genre.create(req.body);

    if (filmId){
        filmId.forEach(async (id) => await FilmGenre.create({filmId: id, genreId: genre.id}));
    }

    res.send(genre)
}

const updateGenre = async (req,res) => {

    const {name} = req.body
    const {filmId} = req.body

    if (filmId){
        await FilmGenre.destroy(
            {where: {genreId: req.params.id}}
        );
        filmId.forEach(async (id) => await FilmGenre.create({filmId: id, genreId: req.params.id}));
    }
    await Genre.update(
        {name: name.toString()},
        {where: {id: req.params.id}}
    )

    res.send(await Genre.findAll({where:{id: req.params.id}}))
}

const deleteGenre = async (req,res) => {
    await Genre.destroy({where: {id: req.params.id}})
    res.send('deleted')
}

module.exports = {
    getGenres,
    createGenre,
    updateGenre,
    deleteGenre
}