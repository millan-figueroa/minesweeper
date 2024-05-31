//To create the board, we're going to use nested loops to generate the rows and columns (outer loop will generate rows vertically, and inner loop will generate cells within that row)

import Cell from "./Cell";
//"data" is a nested array that contains all info about every cell (flag/ mines/ neighbors)
//declared this component with 3 props (params), so we have to pass in 3 args
const Board = ({ data, handleCellClick, handleContextMenu }) => {
    return (
        <div className="board">
            /* vertical - use .map to loop thru "data" array, pass in each item which will render as a div containing cell */
            { data.map(datarow =>
                datarow.map(dataitem => 
                    // To make React stop generating add key (like base case?) in this case we're passing in coordinates 
                    <div key={`${dataitem.y}-${dataitem.x}`}> 
                        <Cell
                        //into each cell passing in what should happen when cell is clicked
                            onClick={() => handleCellClick(dataitem.y, dataitem.x)}
                            //handle right click
                            cMenu={(e) => handleContextMenu(e, dataitem.y, dataitem.x)}
                            //what is the individual value of that cell
                            value={dataitem}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default Board;