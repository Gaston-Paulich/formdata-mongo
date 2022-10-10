const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const mongoseDelete = require('mongoose-delete')

const noticiasOpScheme = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    tower: {
      type: String,
    },
    
    noticiaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
noticiasOpScheme.plugin(mongoosePaginate);
noticiasOpScheme.plugin(mongoosePaginateAggregate);
noticiasOpScheme.plugin(mongoseDelete, { overrideMethods: true, deletedAt:true })
module.exports = mongoose.model("noticiasOp", noticiasOpScheme);
