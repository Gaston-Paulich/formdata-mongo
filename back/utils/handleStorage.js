const multer = require("multer");
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)

    },
    filename:function (req, file, cb) {
        //archivo.pdf foto.png video.mp4 hay que obtener la extensión (formato)

        const ext = file.originalname.split(".").pop(); //parte el nombre del archivo donde esta el punto, esto devuelve la extensión como ["name", "png"]

        const filename = `file-${Date.now()}.${ext}`;

        cb(null, filename)
    },


});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;