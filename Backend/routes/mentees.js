const { express } = require("../config/reuseablePackages");
const {
    authentication,
    restrictTo,
} = require("../controllers/authcontrollers");
const {
    getAllMentors,
    getMentorsDetails,
    bookApppointment,
    resceduleAppointment,
    cancelAppointment,
    deleteAppointment,
} = require("../controllers/menteescontroller");

const router = express();

router.route("/").get(authentication, restrictTo("mentee"), getAllMentors);
router
    .route("/:id")
    .get(authentication, restrictTo("mentee"), getMentorsDetails);
router
    .route("/:id/book")
    .post(authentication, restrictTo("mentee"), bookApppointment);

router
    .route("/:id/reschedule")
    .patch(authentication, restrictTo("mentee"), resceduleAppointment);

router
    .route("/:id/cancel")
    .patch(authentication, restrictTo("mentee"), cancelAppointment);

router
    .route("/:id/delete")
    .delete(authentication, restrictTo("mentee"), deleteAppointment);

module.exports = router;
