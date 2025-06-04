const { express } = require("../config/reuseablePackages");
const {
    authentication,
    restrictTo,
} = require("../controllers/authcontrollers");
const {
    getAllAppointments,
    confirmAppointment,
    rescheduleAppointment,
    cancelAppointment,
    deleteAppointment,
} = require("../controllers/appointments");

const router = express();

router.route("/").get(authentication, restrictTo("mentor"), getAllAppointments);
router
    .route("/:id/confirm")
    .patch(authentication, restrictTo("mentor"), confirmAppointment);
router
    .route("/:id/reschedule")
    .patch(authentication, restrictTo("mentor"), rescheduleAppointment);
router
    .route("/:id/cancel")
    .patch(authentication, restrictTo("mentor"), cancelAppointment);

router
    .route("/:id/delete")
    .delete(authentication, restrictTo("mentor"), deleteAppointment);

module.exports = router;
