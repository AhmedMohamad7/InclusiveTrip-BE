import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

import barrier from "./barriersModel.js";
import review from "./reviewsModel.js";

const barrierReview = sequelize.define("barriersReviews", {
    barrierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: barrier,
            key: "id",
        },
    },
    reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: review,
            key: "id",
        },
    },
    reviews: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
});

export default barrierReview;