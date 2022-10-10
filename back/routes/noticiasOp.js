const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/noticiasOp");


const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require("../validators/noticiasOp");


//Routes

router.get("/", (req,res)=>{
  res.sendFile(__dirname + "/noticiasOp.html" );
  });

router.get("/:id", validateId, getItem);

router.post("/",validateObjectDataCreate,createItem);

router.put("/:id", validateObjectDataUpdate, updateItem);

router.delete("/:id", validateId, deleteItem);





module.exports = router;
