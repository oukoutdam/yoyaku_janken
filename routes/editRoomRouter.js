import { Router } from "express";
import { getRoomById, updateUserChoices } from "../services/roomService.js";

const editRoomRouter = Router();

editRoomRouter.get("/:roomId/:name", async (req, res) => {
    const roomId = req.params.roomId;
    const editName = req.params.name;
    const roomData = await getRoomById(roomId);

    if(!roomData){
        res.status(404).send("Room not found");
    }

    console.log(roomData);
    console.log(req.params);
    res.render("edit", {editName: editName, roomData: roomData})
})

editRoomRouter.post("/", async (req, res) => {
    const roomId = req.body.roomId;
    const name = req.body.name;
    const choices = req.body.choices;

    await updateUserChoices(roomId, name, choices);
    res.redirect(`/join/${roomId}`);
})

export default editRoomRouter;