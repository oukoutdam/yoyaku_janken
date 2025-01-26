import { Router } from "express";
import { getRoomById } from "../models/room.model.js";

const joinRoomRouter = Router();

joinRoomRouter.get("/:roomId", (req, res) => {
    const roomId = req.params.roomId;
    const roomData = getRoomById(roomId);

    if(!roomData){
        res.status(404).send("Room not found");
    }

    res.render("join", {roomData: roomData});

});


export default joinRoomRouter;