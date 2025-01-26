import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rpsChoices: {
    type: [String], // Array of strings
    required: true,
    default: [],
  },
});

const RoomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  numRounds:{
    type: Number,
    required: true,
  },
  members: {
    type: [MemberSchema],
    required: true,
    default: [],
  },
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;


// const Rooms = [
//     {
//         roomId: 'abc123',
//         members: [
//             {
//                 name: 'Alice',
//                 rpsChoices: ["rock", "rock", "paper"]
//             },
//             {
//                 name: 'Bob',
//                 rpsChoices: ["paper", "scissors", "rock"]
//             }
//         ]
//     },
//     {
//         roomId: 'def456',
//         members: [
//             {
//                 name: 'Charlie',
//                 rpsChoices: ["paper", "paper"]
//             },
//             {
//                 name: 'David',
//                 rpsChoices: ["rock", "scissors"]
//             }
//         ]
//     }
// ]

// export function createRoom(data){
//     Rooms.push(data);
// }

// export function getRoomById(roomId){
//     return Rooms.find(room => room.roomId === roomId);
// }

// export function getUserChoices(roomId, name){
//     const room = getRoomById(roomId);
//     return room.members.find(member => member.name === name).rpsChoices;
// }

// export function updateUserChoices(roomId, name, choices){
//     const room = getRoomById(roomId);
//     const member = room.members.find(member => member.name === name);
//     member.rpsChoices = choices;
// }