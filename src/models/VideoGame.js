import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize.js";

class VideoGame extends Model {}

VideoGame.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, { sequelize, modelName: 'videogames' });

  VideoGame.associate = function(models) {
    VideoGame.belongsToMany(models.Platform, { through: 'VideoGamePlatforms' });
  };
  
export default VideoGame;