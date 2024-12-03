
const Booking = require("../models/bookingModel");

// get bookings
const getBookings = async(req, res, next) => {
    try{
    const bookings = await Booking.find();
    if (!bookings) {
        res.status(400);
        throw new Error("Cannot find bookings");
    }
    return res.status(200).json(bookings);
    } catch (error) {
    next(error);
    }
}

// create booking
const createBooking = async(req, res, next) => {
    try {
            const booking = await Booking.create(req.body);
            if(!booking) {
                res.status(400);
                throw new Error("cannot create booking")
            }

            return res.status(201).json(booking);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBookings,
    createBooking,
};