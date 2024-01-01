import {sequelize, Sequelize} from "../database/sequelize.js";

const VideoGames = sequelize.define('videogames', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: Sequelize.STRING,
    publisher: Sequelize.STRING,
    release_date: Sequelize.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

const Platforms = sequelize.define('platforms', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

const GamePlatforms = sequelize.define('game_platforms', {
    game_id: { type: Sequelize.INTEGER, references: { model: VideoGames, key: 'id' } },
    platform_id: { type: Sequelize.INTEGER, references: { model: Platforms, key: 'id' } }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

  VideoGames.belongsToMany(Platforms, {
    through: GamePlatforms,
    as: 'platforms' // alias
  });
  
  Platforms.belongsToMany(VideoGames, {
    through: GamePlatforms,
    timestamps: false
  });

export {VideoGames, Platforms, GamePlatforms};