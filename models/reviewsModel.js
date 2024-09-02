import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const review = sequelize.define("reviews", {
    placeName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    placeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default review;