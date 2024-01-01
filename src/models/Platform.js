import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize.js";

class Platform extends Model {}

Platform.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { sequelize, modelName: 'platforms' });

  Platform.associate = function(models) {
    Platform.belongsToMany(models.VideoGame, { through: 'VideoGamePlatforms' });
  };

export default Platform;