import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const role = sequelize.define("roles", {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });


export default role;