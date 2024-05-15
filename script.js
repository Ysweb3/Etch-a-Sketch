const container = document.getElementById("container");
const rowContainer = document.getElementById("row-container");
const cell = document.getElementById("cell");


function createGrid(a) {
    for (i = 0; i < (a); i++){
        let newrowContainer = document.createElement("div");
        container.appendChild(newrowContainer).id = "row-container"
        for (let j = 0; j < a; j++) {
            let cell = document.createElement("div");
            newrowContainer.appendChild(cell).id = "cell";      
        }
    };

}

function createColumn(colNum){


}
createGrid(26);

cell.addEventListener("hover",() => {
    console.log("HELLO")
    cell.style.backgroundColor = "red";
});