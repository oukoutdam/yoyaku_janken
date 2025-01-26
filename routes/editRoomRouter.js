import { Router } from "express";
import { getRoomById } from "../models/room.model.js";

const editRoomRouter = Router();

editRoomRouter.get("/:roomId/:name", (req, res) => {
    const roomId = req.params.roomId;
    const editName = req.params.name;
    const roomData = getRoomById(roomId);

    if(!roomData){
        res.status(404).send("Room not found");
    }

    console.log(roomData);
    console.log(req.params);
    res.render("edit", {editName: editName, roomData: roomData})
})

export default editRoomRouter;