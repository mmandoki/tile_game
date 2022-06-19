class Tile {
    constructor(row, col, width){
        this.state = false;
        this.row = row;
        this.col = col;
        this.color = "#000000";
        this.div = document.createElement("div");

        this.div.style.width = width + "px";
        this.div.style.height = width + "px";
        this.div.style.backgroundColor = this.color;
    }

    colorDiv(){
        this.div.style.backgroundColor = this.color;
    }

    toggleColor(){
        if(this.color == "#000000"){
            this.color = "#00DD00";
        }
        else{
            this.color = "#000000";
        }
        this.colorDiv();
    }
}



let grid = document.querySelector(".grid");
// grid.style.backgroundColor = "#222222";
let ROWS = 3;
let COLS = 3;
let CELL_WIDTH = 200;
let GRID_WIDTH = CELL_WIDTH * COLS + 8;
grid.style.width = GRID_WIDTH + "px";

let cells = [];

function update(i, j){
    cells[i][j].toggleColor();

    if(i > 0){
        cells[i-1][j].toggleColor();
    }
    if(i < ROWS-1){
        cells[i+1][j].toggleColor();
    }
    if(j > 0){
        cells[i][j-1].toggleColor();
    }
    if(j<COLS-1){
        cells[i][j+1].toggleColor();
    }
}

for(let i = 0; i < ROWS; i++){
    cells.push([]);

    for(let j = 0; j < COLS; j++){
        cells[i].push(new Tile(i, j, CELL_WIDTH));
        // cells[i][j].div.style.borderRadius = "50%";
        grid.appendChild(cells[i][j].div);
        cells[i][j].div.addEventListener("click", function () {
            update(i, j);
        });
    }
}

