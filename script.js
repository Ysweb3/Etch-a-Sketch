const container = document.getElementById("container");
const rowContainer = document.getElementById("row-container");
let rowH = document.getElementById("row");
let columnH = document.getElementById("column");

function createGrid(){
    createGrid(5);
  
}


function createGrid(a) {
    for (i = 0; i < (a * a); i++){
        let row = document.createElement("div");
        container.appendChild(row).id = "row";
    };
}

function createColumn(colNum){


}

createGrid();