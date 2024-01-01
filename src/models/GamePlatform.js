import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize.js";
import VideoGame from "./VideoGame.js";
import Platform from "./Platform.js";

class GamePlatform extends Model {}

GamePlatform.init({
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: VideoGame,
        key: 'id'
      }
    },
    platform_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Platform,
        key: 'id'
      }
    }
  }, { sequelize, modelName: 'game_platforms' });

VideoGame.belongsToMany(Platform, {through: GamePlatform});
Platform.belongsToMany(VideoGame, {through: GamePlatform});

export default GamePlatform;