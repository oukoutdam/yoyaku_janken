import Room from "../models/room.model.js";

export async function createRoom(data){
    try{
        const room = new Room(data);
        return await room.save();
    } catch(error){
        throw new Error("Error creating room", error.message);
    }
}

export async function getRoomById(roomId){
    try{
        return await Room.findOne({roomId: roomId})
    } catch(error){
        throw new Error("Error fetching room", error.message);
    }
}

export async function updateUserChoices(roomId, name, choices){
    try{
        const room = await getRoomById(roomId);
        if (!room) throw new Error("Room not found");

        const member = room.members.find(member => member.name === name);
        if (!member) throw new Error("Member not found");

        member.rpsChoices = choices;
        await room.save();

        return member;
    } catch(error){
        throw new Error("Error update user choices: ", error.message);
    }
}