//**** This component adds functionality to each cell 1. What should be in it, 2. How it should be styled, 3. How it should behave*/
//gameData
    //isRevealed
    //hasMine
    //hasFlag
    //empty
    //neighbor

    //1. Function to determine content of cell based on user interaction
    //pass in as prop (just like a parameter for function)
    const Cell = ({value, onClick, cMenu}) => {
        const getValue = () => {
            if(!getValue.isRevealed) {
                return getValue.isFlagged ? "🚩" : null; //if not revealed, then flagged or nothing
            }
            if (value.isMine) {
                return "💣";
            }
            if (value.neighbor === 0) { //if no neighboring mines, then blank (and revealed)
            return null;
            }
    }

    //2. How should cell be styled - what css should we hook into depending on value
      //chain class names together for display
      //check value.neighbor and set color depending on value
    let className = "cell" +
    //if revealed/ clicked on, use default style (light grey) otherwise, hidden
    (value.isRevealed ? "" : " hidden") +
    //if mine, use mine style, otherwise default
    (value.isMine ? " is-mine" : "") +
    //if flag, use flag style, otherwise default
    (value.isFlagged ? " is-flag" : "") +
    //for number colors: wrapped case in anon function so no break needed
    (() => {
        switch(value.neighbor) {
        case 1: return " blue";
        case 2: return " green";
        case 3: return " red";
        case 4: return " blue";
        default: return " purple";
        }
    })();

    //3. How should the cell behave? 
    //return cell as a div with behavior and appearance
    //e.preventDefault prevents any default behavior of that tag (like r-click context menu)
    return ( 
        <div onClick={onClick} className={className} onContextMenu={cMenu}>
        {getValue()}
        </div>
    );
};
    

    
        

export default Cell;