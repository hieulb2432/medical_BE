'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor_Infor.belongsTo(models.User, {foreignKey: 'doctorId'});
      Doctor_Infor.belongsTo(models.Allcode, {foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceTypeData'});
      Doctor_Infor.belongsTo(models.Clinic, {foreignKey: 'clinicId', targetKey: 'id', as: 'clinicData'});
      Doctor_Infor.belongsTo(models.Specialty, {foreignKey: 'specialtyId', targetKey: 'id', as: 'specialtyData'});
    }
  };
  Doctor_Infor.init({
    specialtyId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    priceId: DataTypes.STRING,
    contentHTML: DataTypes.TEXT('long'),
    contentMarkdown: DataTypes.TEXT('long'),
    description: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'Doctor_Infor',
    freezeTableName: true,
  });
  return Doctor_Infor;
};