const { Router } = require("express")
const { getRooms, createRoom, getRoom, updateRoom, deleteRoom } = require("../controllers/roomController");

const router = Router();

// get all rooms
router.get("/", getRooms);

// create room
router.post("/", createRoom);

// get single room
router.get("/:id", getRoom);

// update room by id
router.put("/:id", updateRoom);

// delete room by id
router.delete("/:id", deleteRoom);

module.exports = router;