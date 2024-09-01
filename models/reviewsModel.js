import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const review = sequelize.define("reviews", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gpsCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default review;