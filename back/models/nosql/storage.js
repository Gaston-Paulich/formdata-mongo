const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StorageScheme = new mongoose.Schema(
    {
        title:{
            type: String,
        },
        description:{
            type: String,
        }, 
        image:{
            type: String,
        }
        

    },
    {
        versionKey: false,
        timestamps:true
    }
);

StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("storages", StorageScheme)