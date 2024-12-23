import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./userModel.js";

const {DataTypes} = Sequelize;

const testProducts = db.define('tb_tesproduct',{
  
});

export default testProducts;