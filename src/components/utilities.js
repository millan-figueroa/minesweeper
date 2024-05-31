// Utility functions for use on game board

//create the initial array of data for all cells in the grid
export const createEmptyArray = (height, width) => {
    let data = [];
    for (let i = 0; i < height; i++) { //loop vertically
      data.push([]);
      for (let j = 0; j < width; j++) { //loop horizontally
        //set properties for each cell at point x,y in the grid
        data[i][j] = {
          y: i,
          x: j,
          isMine: false,
          neighbor: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
        };
      }
    }
    return data;
};

//Get a grid of all cells around the current cell (see illustration)
export const traverseBoard = (y, x, data, height, width) => {
    const el = [];

    if (x > 0) el.push(data[y][x - 1]); // left
//      _____________
//      |___|___|___|
//      |_X_|_O_|___|
//      |___|___|___|

    if (y < height - 1 && x > 0) el.push(data[y + 1][x - 1]); // diagonal top left
//      _____________
//      |_X_|___|___|
//      |___|_O_|___|
//      |___|___|___|

    if (y < height - 1) el.push(data[y + 1][x]); // top
//      _____________
//      |___|_X_|___|
//      |___|_O_|___|
//      |___|___|___|

    if (y < height - 1 && x < width - 1) el.push(data[y + 1][x + 1]); // diagonal top right
//      _____________
//      |___|___|_X_|
//      |___|_O_|___|
//      |___|___|___|

    if (x < width - 1) el.push(data[y][x + 1]); // right
//      _____________
//      |___|___|___|
//      |___|_O_|_X_|
//      |___|___|___|

    if (y > 0 && x < width - 1) el.push(data[y - 1][x + 1]); // diagonal bottom right
//      _____________
//      |___|___|___|
//      |___|_O_|___|
//      |___|___|_X_|

    if (y > 0) el.push(data[y - 1][x]); // bottom
//      _____________
//      |___|___|___|
//      |___|_O_|___|
//      |___|_X_|___|

if (y > 0 && x > 0) el.push(data[y - 1][x - 1]); // diagonal bottom left
//      _____________
//      |___|___|___|
//      |___|_O_|___|
//      |_X_|___|___|

    return el;
};