var DataTypes = require("sequelize").DataTypes;
var _essay_tag = require("./essay_tag");
var _essays = require("./essays");
var _inspirations = require("./inspirations");
var _records = require("./records");
var _tags = require("./tags");
var _users = require("./users");

function initModels(sequelize) {
  var essay_tag = _essay_tag(sequelize, DataTypes);
  var essays = _essays(sequelize, DataTypes);
  var inspirations = _inspirations(sequelize, DataTypes);
  var records = _records(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  essay_tag.belongsTo(essays, { as: "essay", foreignKey: "essay_id"});
  essays.hasMany(essay_tag, { as: "essay_tags", foreignKey: "essay_id"});
  essay_tag.belongsTo(tags, { as: "tag", foreignKey: "tag_id"});
  tags.hasMany(essay_tag, { as: "essay_tags", foreignKey: "tag_id"});
  essays.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(essays, { as: "essays", foreignKey: "user_id"});
  records.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasOne(records, { as: "record", foreignKey: "user_id"});

  return {
    essay_tag,
    essays,
    inspirations,
    records,
    tags,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
