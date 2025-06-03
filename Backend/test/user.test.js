process.env.NODE_ENV = 'test';

const sequelize = require('../config/reuseable_modules')
const {User} = require('../models/user.model')