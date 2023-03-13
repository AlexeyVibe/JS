const filmRouter = require('./routers/filmRouter')
const genreRouter = require('./routers/genreRouter')
const Application = require('./framework/Application.js')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const sequelize = require('./db.js')
const PORT = 5000

const app = new Application();

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(filmRouter)
app.addRouter(genreRouter)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log('Server is on ' +PORT))
    }catch (e) {
        console.log(e)
    }
}

start()