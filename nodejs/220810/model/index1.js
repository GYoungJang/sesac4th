const Sequelize = require('sequelize');
const config = require('../config/config.json')["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db = = {"sequelize" : sequelize, "Sequelize" : Sequlize}

db.User = require('./User')(sequelize, Sequelize); // 불러오면서 () 함수 실행
// model/Visitor.js에서 함수가 실행되고 return 된 model
// db = {'Visitor': 'model/Visitors.js에서의 model}
// const a = require('./Visitor');
// const b = a(sequelize, Sequelize)
// const test = require('./Visitor') -> ./Visitor.js에서 module.exports
// const test2 = test();

module.exports = db;