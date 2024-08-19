import e from "cors";
import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const fileUpload = sequelize.define("fileUploads", {
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileSize: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });


    export default fileUpload;