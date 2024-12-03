const { Router } = require("express")
const { getRooms, createRoom } = require("../controllers/roomController");

const router = Router();

// get all rooms
router.get("/", getRooms);

// create room
router.post("/", createRoom);

module.exports = router;