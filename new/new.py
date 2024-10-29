import json
from py_mini_racer import py_mini_racer

# JavaScript code to be executed
js_code = """
function processData(data) {
  let roomData = data;

  function swapIfNeeded(rooms, idx1, idx2) {
    if (rooms[idx1][0].slice(7, 8) === rooms[idx1][1].slice(7, 8)) {
      [rooms[idx1][1], rooms[idx2][1]] = [rooms[idx2][1], rooms[idx1][1]];
    }
  }

  function swapAdditionalColumnsIfNeeded(rooms, idx1, idx2) {
    if (rooms[idx1].length === 4) {
      if (rooms[idx1][2].slice(7, 8) === rooms[idx1][3].slice(7, 8)) {
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

  return updatedDataJson;
}
"""

# Read data.json
with open('data.json', 'r') as file:
    data = json.load(file)

# Create a PyMiniRacer context
ctx = py_mini_racer.MiniRacer()

# Execute JavaScript code
updatedDataJson = ctx.eval(js_code + "\nprocessData(" + json.dumps(data) + ")")

# Print or use the updated data JSON as needed
print("Updated Data JSON:")
print(updatedDataJson)
