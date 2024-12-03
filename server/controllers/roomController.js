const getRooms = async(req, res) => {
    return res.json({message: "get all rooms new"});
};


// create room
const createRoom = async(req, res, next) => {
    return res.json({message: "create room"});
};

module.exports = {
    getRooms,createRoom
};