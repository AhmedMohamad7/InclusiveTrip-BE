import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const placeCategory = sequelize.define("placeCategories", {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });

export default placeCategory;