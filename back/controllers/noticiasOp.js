const mongoose = require("mongoose");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { noticiasOpModel } = require("../models");
//const optionsPaginate = require("../config/paginationParams");

/**
 * Get detail by single row
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const [data] = await noticiasOpModel.aggregate([
      {
        $lookup: {
          from: "storages",
          localField: "mediaId",
          foreignField: "_id",
         
        },
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(id),
        },
      },
    ]);

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const [, options] = optionsPaginate(req);
    const data = await noticiasOpModel.paginate({}, options);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    req = matchedData(req);
    console.log(req);
    const data = await noticiasOpModel.create(req);
    
    res.send("noticia guardada!");
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * update detail row
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id, ...body } = req;

    const data = await noticiasOpModel.findOneAndUpdate(id, body, {
      new: true,
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * delete row
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const findData = await noticiasOpModel.delete({ _id: id });
    const data = {
      findData: findData,
      deleted: true,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
