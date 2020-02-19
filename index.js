const { app, port } = require('./src/server')

app.listen(port, ()=> console.log(`server live at ${port}`))
