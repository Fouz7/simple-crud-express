import { sequelize } from "./sequelize.js";
import VideoGame from "../models/VideoGame.js";
import Platform from "../models/Platform.js";

const models = { VideoGame, Platform };

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

export default models;