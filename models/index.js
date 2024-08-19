import sequelize from "../db/index.js";
import barrier from "./barriersModel.js";
import review from "./reviewsModel.js";
import barrierReview from "./barriersReviewsModel.js";
import placeCategory from "./placeCategoriesModel.js";
import fileUpload from "./fileUploadsModel.js";
import user from "./usersModel.js";
import role from "./rolesModel.js";


user.hasMany(review, {foreignKey: "userId"});
review.belongsTo(user, {foreignKey: "userId"});

role.hasOne(user, {foreignKey: "roleId"});
user.belongsTo(role, {foreignKey: "roleId"});

review.hasMany(fileUpload, {foreignKey: "reviewId"});
fileUpload.belongsTo(review, {foreignKey: "reviewId"});

placeCategory.hasMany(review, {foreignKey: "placeCategoriesId"});
review.belongsTo(placeCategory, {foreignKey: "placeCategoriesId"});

review.belongsToMany(barrier, {through: barrierReview, foreignKey: "reviewId"});
barrier.belongsToMany(review, {through: barrierReview, foreignKey: "barrierId"});

await sequelize.sync();
console.log("All models were synchronized successfully.");