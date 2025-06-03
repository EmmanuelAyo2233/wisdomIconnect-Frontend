const {express} = require('../config/reuseablePackages')
const {signup, login} = require('../controllers/authcontrollers')

const router = express.Router()

// Sigup
router.route('/register').post(signup)

// Login
router.route('/login').post(login)


module.exports = router