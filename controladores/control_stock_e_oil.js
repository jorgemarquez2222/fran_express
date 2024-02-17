const { Stock_e_oil } = require("../db/models/stock_e_oil.js");
const db = require("../db/conn.js");

const getStocks_e_oil = async (req, res) => {
  const data = await Stock_e_oil.findAll();
  if (data.length <= 0) {
    res.status(201).json({
      code: 201,
      message: "Results not foundssdsdasdasd",
      statusText: "nuevo mensaje",
      ok: "false",
    });
    return;
  }
  res.status(200).json(data);
};

const getStock_e_oilQuerySql2 = async (req, res) => {
  const data = await db.sequelize.query("SELECT  * from stock_e_oil"); //
  if (data.length <= 0) {
    res.status(204).json({
      code: 204,
      message: "Results not found",
    });
    return;
  }
  res.status(200).json(data);
};

const getStock_e_oil = async (req, res) => {
  let resultGetOne = await Stock_e_oil.findAll({
    where: {
      id_status_stock_e_oil: 1,
    },
  });
  res.json(resultGetOne);
};

const createStock_e_oil = async (req, res) => {
  const resultNew = await Stock_e_oil.create({
    id_company_stock_e_oil: req.body.idcompanystockeoil,
    id_status_stock_e_oil: req.body.idstatusstockeoil,
    id_user_stock_e_oil: req.body.iduserstockeoil,
    start_date_stock_e_oil: req.body.startdatestockeoil,
    end_date_stock_e_oil: req.body.enddatestockeoil,
    comment_stock_e_oil: req.body.commentstockeoil,
  });
  Object.entries(resultNew).length === 0
    ? res.json({ message: "Register is not created" })
    : res.json({ message: resultNew });
};

const updateStock_e_oil = async (req, res) => {
  try {
    const obj = req.body;
    const id_stock_e_oil = req.body.id_stock_e_oil;
    let resultUpdate = await Stock_e_oil.update(obj, {
      where: {
        id_stock_e_oil: id_stock_e_oil,
      },
    });
    if (resultUpdate[0] === 1) {
      res.status(200).json({
        message: "Status Update successfully",
        resultUpdate: resultUpdate,
      });
    } else {
      throw { status: res.status, statusText: res.statusText };
      res.status(400).json({
        error: "valor demasiado grande",
        message: "Status not successfully",
        resultUpdate: resultUpdate,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: "valor demasiado grande",
      message: "Status not successfully",
    });
    console.log(err.stack);
    console.log("aca solo el error", err);
  }
};

const deleteStock_e_oil = async (req, res) => {
  try {
    console.log(req.body);
    const id_stock_e_oil = req.body.id;
    let resultDelete = await Stock_e_oil.destroy({
      where: {
        id_stock_e_oil,
      },
    });
    resultDelete === 1
      ? res.json({
          message: "Status was deleted successfully",
          resultDelete: resultDelete,
        })
      : res.json({
          message: "Status Not deleted successfully",
          resultdelete: resultDelete,
        });
  } catch (err) {
    console.log(err.stack);
  }
};

module.exports = {
  getStocks_e_oil,
  getStock_e_oilQuerySql2,
  getStock_e_oil,
  createStock_e_oil,
  updateStock_e_oil,
  deleteStock_e_oil,
};