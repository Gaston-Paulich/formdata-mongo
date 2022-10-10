const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");
const validateObjectDataCreate = [
  check("title").exists().notEmpty(),
  check("description").exists().notEmpty(),
 // check("noticiaId").exists().notEmpty().isMongoId(),
  check("author").exists().notEmpty(),
  check("tower").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateObjectDataUpdate = [
  check("id").exists().notEmpty(),
  check("title").exists().notEmpty(),
  check("description").exists().notEmpty(),
  check("noticiaId").exists().notEmpty().isMongoId(),
  check("author").exists().notEmpty(),
  check("tower").exists().notEmpty(),
  
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateId = [
  check("id").exists().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateId, validateObjectDataCreate, validateObjectDataUpdate };
