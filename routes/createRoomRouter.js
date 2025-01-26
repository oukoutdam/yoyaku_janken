import { Router } from "express";
import { createRoom } from "../services/roomService.js";

function transformData(obj) {
    const numPeople = parseInt(obj.numPeople);
    const result = [];
    for (let i = 0; i < numPeople; i++) {
        result.push({
        name: obj[`member_${i}`],
        rpsChoices : []
        });
    }
    return result;
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({length: 10}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }

const createRoomRouter = Router();

createRoomRouter.get('/', (req, res) => {
    res.render('create');
});

createRoomRouter.post('/', async (req, res) => {
    console.log(req.body);
    const members = transformData(req.body);
    let data = {};
    data.members = members;
    data.numRounds = req.body.numRounds;
    data.roomId = generateRandomString();

    console.log(data);
    await createRoom(data);

    res.redirect(`/join/${data.roomId}`);
})

export default createRoomRouter;