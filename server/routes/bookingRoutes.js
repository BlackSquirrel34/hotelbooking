const { Router } = require("express");
const { getBookings, createBooking } = require("../controllers/bookingController");

router = Router();

router.get("/", getBookings);

// create booking
router.post("/", createBooking);

module.exports = router;

