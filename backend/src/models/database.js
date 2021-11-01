import SQ from 'sequelize';
import config from '../config/index.js';

const { host, port, user, database, password, log } = config.db;

export const DataTypes = SQ.DataTypes;
export const Sequelize = new SQ.Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mysql',
  logging: log === 'true',
});
