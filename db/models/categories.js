'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  //Apparently this models will be initialized
  Categories.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'categories',
      underscored: true,
    }
  );
  return Categories;
};
