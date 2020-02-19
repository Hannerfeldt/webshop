const { app, port } = require('./src/server')
const mongoose = require('mongoose')
const config = require('./config/config')

const options = {
    useUnifiedTopology: true,
    useNewUrlParser:true
}

mongoose.connect(config.databaseURL, options)
app.listen(port, ()=> console.log(`server live at ${port}`))
