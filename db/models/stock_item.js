const db = require("../conn.js");
const { DataTypes } = require("sequelize");

const Stock_item = db.sequelize.define(
  "stock_item",
  {
    // Model attributes are defined here
    id_stock_item: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_company_stock_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_status_stock_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_user_stock_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date_stock_item: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date_stock_item: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    comment_stock_item: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = {
  Stock_item,
};