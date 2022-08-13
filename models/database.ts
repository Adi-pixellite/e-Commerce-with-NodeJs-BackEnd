import { Sequelize } from "sequelize";
//const Sequelize = require('sequelize');
import { initModels } from "./init-models";

const sequelize = new Sequelize('DB_NAME', 'USER_NAME', 'PASSWORD', {
    host: 'localhost',
    dialect: 'mysql'
  });

const models = initModels(sequelize)

export default models
