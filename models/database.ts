import { Sequelize } from "sequelize";
//const Sequelize = require('sequelize');
import { initModels } from "./init-models";

const sequelize = new Sequelize('sql8510992', 'sql8510992', 'bdKi6sqxMT', {
    host: 'sql8.freemysqlhosting.net',
    dialect: 'mysql'
  });

const models = initModels(sequelize)

export default models