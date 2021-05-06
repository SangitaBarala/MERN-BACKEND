const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 4000

const postRoutes = require('./routes/posts.js')

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());
app.use('/posts', postRoutes)
const DB_CONNECTION_STRING = "mongodb+srv://sangita:mongo123@cluster0.kp96h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION_STRING, {useNewUrlParser: true,  useUnifiedTopology: true })
    .then( () => {
        app.listen(PORT, ()=> console.log("App is running on http://localhost:4000"))
    }).catch( () => {
    console.log("Unable to connect to Database")
})

//mongoose.set("useFindAndModify", false);
