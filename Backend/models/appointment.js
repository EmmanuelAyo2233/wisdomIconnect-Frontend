"use strict";
const sequelize = require("../config/db");
const { DataTypes } = require("../config/reuseablePackages");

const Appointment = sequelize.define("appointment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: null, // e.g. booked, cancelled, completed
    },
});

module.exports = Appointment;
