import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const placeCategory = sequelize.define("placeCategories", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    selected: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    });

export default placeCategory;