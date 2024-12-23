import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./userModel.js";

const { DataTypes } = Sequelize;

const Products = db.define('tb_product', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

// Define the relationship between Users and Products
Users.hasMany(Products, {
    foreignKey: 'userId', // Ensure the foreign key matches the column in Products
    onDelete: 'CASCADE', // Optional: Delete products when a user is deleted
    onUpdate: 'CASCADE' // Ensure foreign key updates are cascaded
});
Products.belongsTo(Users, {
    foreignKey: 'userId', // Ensure the foreign key matches
    targetKey: 'id' // Reference the primary key in Users
});

export default Products;
