// const roomData = {
//   '101': [['21KB1A0566', '21KB1A0571', '21KB1A0575'], ['21KB1A0401', '21KB1A0405', '21KB1A0409'], ['21KB1A0568', '21KB1A0572', '21KB1A0576'], ['21KB1A0402', '21KB1A0406', '21KB1A0410'], ['21KB1A0569', '21KB1A0573', '21KB1A0577'], ['21KB1A0403', '21KB1A0407', '21KB1A0411'], ['21KB1A0570', '21KB1A0574', '21KB1A0578'], ['21KB1A0404', '21KB1A0408', '21KB1A0412']], '102': [['21KB1A0579', '21KB1A0583', '21KB1A0587', '21KB1A05C3'], ['21KB1A0413', '21KB1A0424', '21KB1A0201', '21KB1A0205'], ['21KB1A0580', '21KB1A0584', '21KB1A0588', '21KB1A05C7'], ['21KB1A0414', '21KB1A0435', '21KB1A0202', '21KB1A0206'], ['21KB1A0581', '21KB1A0585', '21KB1A0589', '21KB1A1201'], ['21KB1A0415', '21KB1A0467', '21KB1A0203', '21KB1A0207'], ['21KB1A0582', '21KB1A0586', '21KB1A05C1', '21KB1A1202'], ['21KB1A0416', '21KB1A04G7', '21KB1A0204', '21KB1A0208']], '103': [['21KB1A0209', '21KB1A0213', '21KB1A0217', '21KB1A0303'], ['21KB1A1203', '21KB1A1207', '21KB1A1211', '21KB1A3003'], ['21KB1A0210', '21KB1A0214', '21KB1A0218', '21KB1A0304'], ['21KB1A1204', '21KB1A1208', '21KB1A1212', '21KB1A3004'], ['21KB1A0211', '21KB1A0215', '21KB1A0301', '21KB1A0305'], ['21KB1A1205', '21KB1A1209', '21KB1A3001', '21KB1A3005'], ['21KB1A0212', '21KB1A0216', '21KB1A0302', '21KB1A0306'], ['21KB1A1206', '21KB1A1210', '21KB1A3002', '21KB1A3006']], '104': [['21KB1A0307', '21KB1A0311', '21KB1A0103', 'None'], ['21KB1A3007', '21KB1A3011', '21KB1A3015', 'None'], ['21KB1A0308', '21KB1A0312', '21KB1A0104', 'None'], ['21KB1A3008', '21KB1A3012', 'None', 'None'], ['21KB1A0309', '21KB1A0101', 'None', 'None'], ['21KB1A3009', '21KB1A3013', 'None', 'None'], ['21KB1A0310', '21KB1A0102', 'None', 'None'], ['21KB1A3010', '21KB1A3014', 'None', 'None']]}

// let roomDataCopy = roomData;

// console.log(roomData);
// console.log(roomDataCopy);
// console.log(Object.keys(roomData));
// console.log(Object.values(roomData));

// const objectLength = Object.keys(roomData);
// // console.log(objectLength.length);

// for(const room1 of Object.keys(roomData)){
//     console.log(room1);
// }

// Outer loop over each 'rooms' array in roomData
// for (const rooms of Object.values(roomData)) {
//   if (rooms.length % 2 === 0) {
// console.log("Current rooms array:");
// console.log(rooms);
// if (rooms[4][0].slice(7, 8) === rooms[i][0].slice(7, 8))
// console.log(rooms[4][0]);
// // Loop through each even column
// for (let col = 1; col < rooms[0].length; col += 2) {
//   // Inner loop to iterate through pairs and swap if necessary
//   for (let i = 0; i < rooms.length - 1; i += 2) {
//     if (rooms[i][0].slice(7, 8) === rooms[i][0].slice(7, 8)) {
//       // console.log(rooms[i][0] , rooms[i][0])
//     //   console.log(`Swapping ${rooms[i][col]} with ${rooms[i + 1][col]}`);
//       // Swap using array destructuring
//       [rooms[i][col], rooms[i + 1][col]] = [
//         rooms[i + 1][col],
//         rooms[i][col],
//       ];
//       // // Output updated rooms array after swap
//     //   console.log("Updated rooms array:");
//       //   console.log(rooms);
//     }
//   }
// }
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

///// It works only for second column

// for (const rooms of Object.values(roomData)) {
//   if (rooms.length % 2 === 0) {
//     console.log(rooms);

//     // Loop through pairs and swap if necessary
//     for (let i = 0; i < rooms.length - 1; i += 2) {
//       if (rooms[i][0].slice(7, 8) === rooms[i][0].slice(7, 8)) {
//         console.log(rooms[i + 1][1], rooms[i][1]);
//         [rooms[i][1], rooms[i + 1][1]] = [rooms[i + 1][1], rooms[i][1]];
//       }
//     }

// }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
// for (let i = 0; i < rooms.length - 1; i += 2) {
//   if (rooms[i][0].slice(7, 8) === rooms[i][0].slice(7, 8)) {
//     console.log(rooms[i + 1][1], rooms[i][1]);
//     [rooms[i][1], rooms[i + 1][1]] = [rooms[i + 1][1], rooms[i][1]];
//   }
// }

// let roomData; //store the json here by parsing the json to dictionary

// Assuming both files are in the same folder
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Data loaded successfully, 'data' variable holds your JSON data
    console.log(data); // You can access the JSON data here
    // Store 'data' in a variable or use it as needed
    processData(data);
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

function processData(Data) {
 let roomData = Data;

function swapIfNeeded(rooms, idx1, idx2) {
  if (rooms[idx1][0].slice(6, 8) === rooms[idx1][1].slice(6, 8)) {
    [rooms[idx1][1], rooms[idx2][1]] = [rooms[idx2][1], rooms[idx1][1]];
  }
}

function swapAdditionalColumnsIfNeeded(rooms, idx1, idx2) {
  if (rooms[idx1].length === 4) {
    if (rooms[idx1][2].slice(6, 8) === rooms[idx1][3].slice(6, 8)) {
      [rooms[idx1][3], rooms[idx2][3]] = [rooms[idx2][3], rooms[idx1][3]];
    }
  }
}

function updateRoomData(roomData) {
  const updatedRoomData = {};

  for (const [roomKey, rooms] of Object.entries(roomData)) {
    if (rooms.length % 2 === 0) {
      for (let i = 0; i < rooms.length; i += 2) {
        swapIfNeeded(rooms, i, i + 1);
        swapAdditionalColumnsIfNeeded(rooms, i, i + 1);
      }
    }
    updatedRoomData[roomKey] = rooms;
  }

  return updatedRoomData;
}

let roomDataCopy = updateRoomData(roomData);
let updatedDataJson = JSON.stringify(roomDataCopy, null, 2);

console.log(roomData);
console.log(roomDataCopy);
console.log(updatedDataJson);
}

