require("dotenv").config()
const express = require('express');
const cors = require("cors");
const path = require('path');
const fileupload = require('express-fileupload');
const dbConnect = require('./config/mongo')
const bodyParser = require('body-parser');

const noticiasOp = require("./models/nosql/noticiasOp");
const {
    getItem,
    getItems,
    updateItem,
    createItem,
    deleteItem,
  } = require("./controllers/noticiasOp");

  const {
    validateId,
    validateObjectDataCreate,
    validateObjectDataUpdate,
  } = require("./validators/noticiasOp");
const router = require("./routes/noticiasOp");


let initial_path = path.join(__dirname, "public");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())

app.use(express.json())
app.use(express.static("storage"))



const port = process.env.PORT || 3000




app.use("/api",require("./routes"))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html" );
    })
    







app.listen(port, () => {
    console.log(`servidor escuchando en el puerto ${port}`);
})

dbConnect()