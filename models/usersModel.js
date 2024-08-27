import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";
import role from "./rolesModel.js";


const user = sequelize.define("users", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: role,
            key: "id",
        },
        defaultValue: 3,
    },
    profilePhoto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    });

export default user;