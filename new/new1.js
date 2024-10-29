let data1 = {
  101: [
    ["21KB1A0567", "21KB1A0405", "21KB1A0575"],
    ["21KB1A0401", "21KB1A0571", "21KB1A0409"],
    ["21KB1A0568", "21KB1A0406", "21KB1A0576"],
    ["21KB1A0402", "21KB1A0572", "21KB1A0410"],
    ["21KB1A0569", "21KB1A0407", "21KB1A0577"],
    ["21KB1A0403", "21KB1A0573", "21KB1A0411"],
    ["21KB1A0570", "21KB1A0408", "21KB1A0578"],
    ["21KB1A0404", "21KB1A0574", "21KB1A0412"],
  ],
  102: [
    ["21KB1A0579", "21KB1A0424", "21KB1A0587", "21KB1A0205"],
    ["21KB1A0413", "21KB1A0583", "21KB1A0201", "21KB1A05C3"],
    ["21KB1A0580", "21KB1A0435", "21KB1A0588", "21KB1A0206"],
    ["21KB1A0414", "21KB1A0584", "21KB1A0202", "21KB1A05C7"],
    ["21KB1A0581", "21KB1A0467", "21KB1A0589", "21KB1A1201"],
    ["21KB1A0415", "21KB1A0585", "21KB1A0203", "21KB1A0207"],
    ["21KB1A0582", "21KB1A04G7", "21KB1A05C1", "21KB1A1202"],
    ["21KB1A0416", "21KB1A0586", "21KB1A0204", "21KB1A0208"],
  ],
  103: [
    ["21KB1A0209", "21KB1A1207", "21KB1A0217", "21KB1A0303"],
    ["21KB1A1203", "21KB1A0213", "21KB1A1211", "21KB1A3003"],
    ["21KB1A0210", "21KB1A1208", "21KB1A0218", "21KB1A0304"],
    ["21KB1A1204", "21KB1A0214", "21KB1A1212", "21KB1A3004"],
    ["21KB1A0211", "21KB1A1209", "21KB1A0301", "21KB1A3005"],
    ["21KB1A1205", "21KB1A0215", "21KB1A3001", "21KB1A0305"],
    ["21KB1A0212", "21KB1A1210", "21KB1A0302", "21KB1A3006"],
    ["21KB1A1206", "21KB1A0216", "21KB1A3002", "21KB1A0306"],
  ],
  104: [
    ["21KB1A0307", "21KB1A3011", "21KB1A0103", "None"],
    ["21KB1A3007", "21KB1A0311", "21KB1A3015", "None"],
    ["21KB1A0308", "21KB1A3012", "21KB1A0104", "None"],
    ["21KB1A3008", "21KB1A0312", "None", "None"],
    ["21KB1A0309", "21KB1A0101", "None", "None"],
    ["21KB1A3009", "21KB1A3013", "None", "None"],
    ["21KB1A0310", "21KB1A0102", "None", "None"],
    ["21KB1A3010", "21KB1A3014", "None", "None"],
  ],
};

let data2 = {
  101: {
    room_id: 101,
    seating: {
      "0-0-0": "21KB1A0567",
      "0-1-0": "21KB1A0401",
      "0-2-0": "21KB1A0568",
      "0-3-0": "21KB1A0402",
      "0-4-0": "21KB1A0569",
      "0-5-0": "21KB1A0403",
      "0-6-0": "21KB1A0570",
      "0-7-0": "21KB1A0404",
      "1-0-0": "21KB1A0571",
      "1-1-0": "21KB1A0405",
      "1-2-0": "21KB1A0572",
      "1-3-0": "21KB1A0406",
      "1-4-0": "21KB1A0573",
      "1-5-0": "21KB1A0407",
      "1-6-0": "21KB1A0574",
      "1-7-0": "21KB1A0408",
      "2-0-0": "21KB1A0575",
      "2-1-0": "21KB1A0409",
      "2-2-0": "21KB1A0576",
      "2-3-0": "21KB1A0410",
      "2-4-0": "21KB1A0577",
      "2-5-0": "21KB1A0411",
      "2-6-0": "21KB1A0578",
      "2-7-0": "21KB1A0412",
    },
    total_students_arranged: 24,
    roll_numbers_range: {
      CSE: "21KB1A0567 - 21KB1A0578",
      ECE: "21KB1A0401 - 21KB1A0412",
    },
    total_seating: 24,
    seats_left: 0,
  },
  102: {
    room_id: 102,
    seating: {
      "0-0-0": "21KB1A0579",
      "0-1-0": "21KB1A0413",
      "0-2-0": "21KB1A0580",
      "0-3-0": "21KB1A0414",
      "0-4-0": "21KB1A0581",
      "0-5-0": "21KB1A0415",
      "0-6-0": "21KB1A0582",
      "0-7-0": "21KB1A0416",
      "1-0-0": "21KB1A0583",
      "1-1-0": "21KB1A0424",
      "1-2-0": "21KB1A0584",
      "1-3-0": "21KB1A0435",
      "1-4-0": "21KB1A0585",
      "1-5-0": "21KB1A0467",
      "1-6-0": "21KB1A0586",
      "1-7-0": "21KB1A04G7",
      "2-0-0": "21KB1A0587",
      "2-1-0": "21KB1A0201",
      "2-2-0": "21KB1A0588",
      "2-3-0": "21KB1A0202",
      "2-4-0": "21KB1A0589",
      "2-5-0": "21KB1A0203",
      "2-6-0": "21KB1A05C1",
      "2-7-0": "21KB1A0204",
      "3-0-0": "21KB1A05C3",
      "3-1-0": "21KB1A0205",
      "3-2-0": "21KB1A05C7",
      "3-3-0": "21KB1A0206",
      "3-4-0": "21KB1A1201",
      "3-5-0": "21KB1A0207",
      "3-6-0": "21KB1A1202",
      "3-7-0": "21KB1A0208",
    },
    total_students_arranged: 32,
    roll_numbers_range: {
      CSE: "21KB1A0579 - 21KB1A05C7",
      ECE: "21KB1A0413 - 21KB1A04G7",
      EEE: "21KB1A0201 - 21KB1A0208",
      IT: "21KB1A1201 - 21KB1A1202",
    },
    total_seating: 32,
    seats_left: 0,
  },
  103: {
    room_id: 103,
    seating: {
      "0-0-0": "21KB1A0209",
      "0-1-0": "21KB1A1203",
      "0-2-0": "21KB1A0210",
      "0-3-0": "21KB1A1204",
      "0-4-0": "21KB1A0211",
      "0-5-0": "21KB1A1205",
      "0-6-0": "21KB1A0212",
      "0-7-0": "21KB1A1206",
      "1-0-0": "21KB1A0213",
      "1-1-0": "21KB1A1207",
      "1-2-0": "21KB1A0214",
      "1-3-0": "21KB1A1208",
      "1-4-0": "21KB1A0215",
      "1-5-0": "21KB1A1209",
      "1-6-0": "21KB1A0216",
      "1-7-0": "21KB1A1210",
      "2-0-0": "21KB1A0217",
      "2-1-0": "21KB1A1211",
      "2-2-0": "21KB1A0218",
      "2-3-0": "21KB1A1212",
      "2-4-0": "21KB1A0301",
      "2-5-0": "21KB1A3001",
      "2-6-0": "21KB1A0302",
      "2-7-0": "21KB1A3002",
      "3-0-0": "21KB1A0303",
      "3-1-0": "21KB1A3003",
      "3-2-0": "21KB1A0304",
      "3-3-0": "21KB1A3004",
      "3-4-0": "21KB1A0305",
      "3-5-0": "21KB1A3005",
      "3-6-0": "21KB1A0306",
      "3-7-0": "21KB1A3006",
    },
    total_students_arranged: 32,
    roll_numbers_range: {
      EEE: "21KB1A0209 - 21KB1A0218",
      IT: "21KB1A1203 - 21KB1A1212",
      MECH: "21KB1A0301 - 21KB1A0306",
      AIDS: "21KB1A3001 - 21KB1A3006",
    },
    total_seating: 32,
    seats_left: 0,
  },
  104: {
    room_id: 104,
    seating: {
      "0-0-0": "21KB1A0307",
      "0-1-0": "21KB1A3007",
      "0-2-0": "21KB1A0308",
      "0-3-0": "21KB1A3008",
      "0-4-0": "21KB1A0309",
      "0-5-0": "21KB1A3009",
      "0-6-0": "21KB1A0310",
      "0-7-0": "21KB1A3010",
      "1-0-0": "21KB1A0311",
      "1-1-0": "21KB1A3011",
      "1-2-0": "21KB1A0312",
      "1-3-0": "21KB1A3012",
      "1-4-0": "21KB1A0101",
      "1-5-0": "21KB1A3013",
      "1-6-0": "21KB1A0102",
      "1-7-0": "21KB1A3014",
      "2-0-0": "21KB1A0103",
      "2-1-0": "21KB1A3015",
      "2-2-0": "21KB1A0104",
    },
    total_students_arranged: 19,
    roll_numbers_range: {
      MECH: "21KB1A0307 - 21KB1A0312",
      AIDS: "21KB1A3007 - 21KB1A3015",
      CIVIL: "21KB1A0101 - 21KB1A0104",
    },
    total_seating: 32,
    seats_left: 13,
  },
};

function manipulateData(data) {
  let result = {};
  for (const [roomid, seats] of Object.entries(data)) {
    let roomData = {};
    for (let i = 0; i < seats.length; i++) {
      for (let j = 0; j < seats[i].length; j++) {
        roomData[`${j + 1}:${i + 1}`] = seats[i][j];
      }
    }
    result[roomid] = roomData;
  }
  return result;
}

function processData(DataS, result) {
  for (const [roomid, seats] of Object.entries(DataS)) {
    if (result.hasOwnProperty(roomid)) {
      seats.seating = result[roomid];
    }
  }
  return DataS;
}

function processDataFromJson(data1, data2) {
  let result = manipulateData(data1);
  let updatedDataS = processData(data2, result);
  return JSON.stringify(updatedDataS);
}

let updatedDataJson = processDataFromJson(data1, data2);
console.log(updatedDataJson);


// function processData(data) {
//   let roomData = data;

//   function swapIfNeeded(rooms, idx1, idx2) {
//     if (rooms[idx1][0].slice(6, 8) === rooms[idx1][1].slice(6, 8)) {
//       [rooms[idx1][1], rooms[idx2][1]] = [rooms[idx2][1], rooms[idx1][1]];
//     }
//   }

//   function swapAdditionalColumnsIfNeeded(rooms, idx1, idx2) {
//     if (rooms[idx1].length === 4) {
//       if (rooms[idx1][2].slice(6, 8) === rooms[idx1][3].slice(6, 8)) {
//         [rooms[idx1][3], rooms[idx2][3]] = [rooms[idx2][3], rooms[idx1][3]];
//       }
//     }
//   }

//   function updateRoomData(roomData) {
//     const updatedRoomData = {};

//     for (const [roomKey, rooms] of Object.entries(roomData)) {
//       if (rooms.length % 2 === 0) {
//         for (let i = 0; i < rooms.length; i += 2) {
//           swapIfNeeded(rooms, i, i + 1);
//           swapAdditionalColumnsIfNeeded(rooms, i, i + 1);
//         }
//       }
//       updatedRoomData[roomKey] = rooms;
//     }

//     return updatedRoomData;
//   }

//   let roomDataCopy = updateRoomData(roomData);
//   let updatedDataJson = JSON.stringify(roomDataCopy, null, 2);

//   // return roomDataCopy;
//   return updatedDataJson;
// }

// let updatedDataJson = processData(data1);
// console.log(updatedDataJson)

// async function loadData() {
//   try {
//     const [data1Response, data2Response] = await Promise.all([
//       fetch("data.json"),
//       fetch("new.json"),
//     ]);

//     const data1 = await data1Response.json();
//     const data2 = await data2Response.json();

//     let result1 = JSON.stringify(data1);
//     let result2 = JSON.parse(result1);

//     let result = manipulateData(result2);

//     function manipulateData(data) {
//       let result = {};

//       for (const [roomid, seats] of Object.entries(data)) {
//         let roomData = {};
//         for (let i = 0; i < seats.length; i++) {
//           for (let j = 0; j < seats[i].length; j++) {
//             roomData[`${j + 1}:${i + 1}`] = seats[i][j];
//           }
//         }
//         result[roomid] = roomData;
//       }
//       console.log(result);
//       return result;
//     }

//     let process1 = JSON.stringify(data2);
//     let process2 = JSON.parse(process1);
//     console.log(process2);

//     let processResult = processData(process2, result);
//     console.log("Process result:", processResult);

//     function processData(DataS, result) {
//       for (const [roomid, seats] of Object.entries(DataS)) {
//         if (result.hasOwnProperty(roomid)) {
//           seats.seating = result[roomid];
//         }
//       }
//       return DataS;
//     }

//     let updatedDataS = processData(process2, result);
//     console.log(updatedDataS);
//   } catch (error) {
//     console.error("Error loading data:", error);
//   }
// }

// loadData();
