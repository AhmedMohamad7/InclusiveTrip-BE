import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

import Barrier from "./BarrierModel.js";
import Review from "./ReviewModel.js";

const BarrierReview = sequelize.define("barriersReviews", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    barrierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Barrier,
            key: "id",
        },
    },
    reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Review,
            key: "id",
        },
    },
    reviews: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
});

export default BarrierReview;