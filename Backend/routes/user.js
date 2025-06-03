const { express } = require("../config/reuseablePackages");
const {
    getdetails,
    updateDetails,
    uploadprofilePicture,
    deleteAccount,
} = require("../controllers/usercontroller");
const { authentication } = require("../controllers/authcontrollers");

const router = express();

router.route("/me").get(authentication, getdetails);
router.route("/me/update").patch(authentication, updateDetails);
router.route("/me/picture").put(authentication, uploadprofilePicture);
router.route("/me/delete").delete(authentication, deleteAccount);

module.exports = router;
