import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const review = sequelize.define("reviews", {
    gpsCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    comment : {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default review;