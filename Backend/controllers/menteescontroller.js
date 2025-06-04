const { User, Mentor } = require("../models");
const { Op } = require("../config/reuseablePackages");

const getAllMentors = async (req, res) => {
    try {
        const mentors = await Mentor.findAll({
            include: [
                {
                    model: User,
                    as: "user",
                    required: false,
                    attributes: { exclude: ["password"] },
                },
            ],
        });
        return res.status(201).json({
            status: "success",
            message: "All mentors fetched successfully",
            data: mentors,
        });
    } catch (error) {
        console.error("All mentors error", error);
        res.status(500).json({
            message: "Failed to fetch all mentors",
            error: error.message,
        });
    }
};

const getMentorsDetails = async (req, res) => {
    try {
        const id = req.params.id || req.query.id;
        const email = req.params.email || req.query.email;

        if (!id && !email) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide either mentor ID or email",
            });
        }

        const whereClause = {};

        if (id) whereClause.id = id;
        if (email) whereClause.email = email;

        const mentor = await Mentor.findOne({
            where: whereClause,
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: { exclude: ["password"] },
                },
            ],
        });

        if (!mentor) {
            return res.status(404).json({
                status: "fail",
                message: "Mentor not found",
            });
        }

        return res.status(201).json({
            status: "success",
            message: "mentors details",
            data: mentor,
        });
    } catch (error) {
        console.error("Mento details error", error);
        res.status(500).json({
            message: "Failed to load mentor details",
            error: error.message,
        });
    }
};

const bookApppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "Appointment Booked with Mentor name",
    });
};

const resceduleAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "Appointment Reschdeuled with Mentor name",
    });
};

const cancelAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "Appointment Cancelled with Mentor name",
    });
};

const deleteAppointment = async (req, res) => {
    return res.status(201).json({
        status: "success",
        message: "Appointment deleted succefully",
    });
};

module.exports = {
    getAllMentors,
    getMentorsDetails,
    bookApppointment,
    resceduleAppointment,
    cancelAppointment,
    deleteAppointment,
};
