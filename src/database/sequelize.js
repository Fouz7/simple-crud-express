import { Sequelize } from "sequelize";

const sequelize = new Sequelize('library', 'root', 'rahasia', {
    host: 'localhost',
    dialect: 'mysql'
});

export {sequelize, Sequelize};