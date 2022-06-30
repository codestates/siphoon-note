const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('essay_tag', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    essay_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'essays',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'essay_tag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_tags_essay_tag",
        using: "BTREE",
        fields: [
          { name: "tag_id" },
        ]
      },
      {
        name: "fk_essays_essay_tag",
        using: "BTREE",
        fields: [
          { name: "essay_id" },
        ]
      },
    ]
  });
};
