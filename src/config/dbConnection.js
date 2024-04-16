import mongoose from "mongoose";

let url = "mongodb+srv://arthurfbarcalars:qSvJEXzWz7Lg4PYb@cluster0.splh2o3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
mongoose.Promise = global.Promise

let db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro na conexão com o banco.'))

export default db