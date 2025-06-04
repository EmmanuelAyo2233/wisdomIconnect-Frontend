const getAllAppointments = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "Fetched all appointments successfully",
    });
};

const confirmAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "appointment confirmed successfully",
    });
};
const rescheduleAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "appointment rescheduled successfully",
    });
};

const cancelAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "appointment confirmed successfully",
    });
};

const deleteAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "appointment deleted successfully",
    });
};

module.exports = {
    getAllAppointments,
    cancelAppointment,
    rescheduleAppointment,
    confirmAppointment,
    deleteAppointment,
};
