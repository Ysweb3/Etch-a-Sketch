const container = document.querySelector("#container");
const rowContainer = document.querySelector("#row-container");
const cell = document.getElementById("cell");
const sizeSlider = document.getElementById("grid-size");
const sizeSliderOutput = document.getElementById("slider-value");
const resetBTn = document.getElementById("Reset-Btn");
const allCells = document.getElementById("#cell");
const colorPicker = document.querySelector("#color-input");
const eraserCheckbox = document.querySelector("#eraser");
const eraserLable = document.querySelector("#eraser-label");

//Default values
const canvasSize = 800;
let gridValue;
let prevColor = "#000000";
let color ="#000000";

eraserCheckbox.addEventListener("change", () => {   
    if(eraserCheckbox.checked){
        eraserLable.textContent = "Eraser ON ";
        prevColor = color;
        color = "#FFFFFF";
        console.log("COLOR"+color);
        console.log("PREV COLOR"+prevColor);
        GridColor(color)
    }
    else{
        eraserLable.textContent = "Eraser OFF "
        color = prevColor;
        GridColor(prevColor);
        console.log("PREV COLOR"+prevColor);
    }

});



//Functions
function CreateGrid(a) {
    console.log(a);
    for (i = 0; i < (a); i++){
        let newRowContainer = document.createElement("div");
        container.appendChild(newRowContainer).id = "row-container";
        for (let j = 0; j < a; j++) {
            let cell = document.createElement("div");
            newRowContainer.appendChild(cell).id = "cell";    
            cell.style.height =`${canvasSize / a + 0.01}px`;
            cell.style.width =`${canvasSize / a + 0.01}px` ;
        }
    };
}
function GridColor(color){
    
    const allCells = document.querySelectorAll("#cell");
    allCells.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color; 
        });
    });
}
function ClearCanvas(){
    container.innerHTML= "";
}
function CreateCanvas(size){
    ClearCanvas();
    CreateGrid(size);
    GridColor(color)
}

CreateCanvas(16);

//Events
colorPicker.addEventListener("input" , (e) =>{
    color = e.target.value;
    console.log(color);
    console.log(prevColor);
    GridColor(color)
});

sizeSlider.onchange = (e) => {
    let vlaue = e.target.value;
    CreateCanvas(vlaue);
    sizeSliderOutput.textContent = sizeSlider.value+"x"+sizeSlider.value ;
}

resetBTn.addEventListener("click", () => {
    const allCells = document.querySelectorAll("#cell");
    allCells.forEach(box => {
        box.style.backgroundColor = "white"; 
    })
});





         

