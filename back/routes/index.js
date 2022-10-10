const express = require("express");
const fs = require("fs");
const router = express.Router();
const PATH_ROUTES = `${__dirname}`

const removeExtension= (filename) =>{ // Esta función consigue el nombre del archivo sin la extensión
    return filename.split('.').shift()
}

 fs.readdirSync(PATH_ROUTES).filter((file)=>{

    const name = removeExtension(file)
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`))
    }

})



router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router;
