import { Router } from "express";
import { getRoomById } from "../services/roomService.js";

const joinRoomRouter = Router();

joinRoomRouter.get("/:roomId", async (req, res) => {
    const roomId = req.params.roomId;
    
    const roomData = await getRoomById(roomId);

    if(!roomData){
        res.status(404).send("Room not found");
    }

    res.render("join", {roomData: roomData});
});

joinRoomRouter.post("/", (req, res) => {
    const roomId = req.body.roomId;
    res.redirect(`/join/${roomId}`);
})

joinRoomRouter.get("/", (req, res) => {
    res.render("joinHome");
})


export default joinRoomRouter;