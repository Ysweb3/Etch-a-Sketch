const container = document.querySelector("#container");
const rowContainer = document.querySelector("#row-container");
const cell = document.getElementById("cell");
const sizeSlider = document.getElementById("grid-size");
const sizeSliderOutput = document.getElementById("slider-value");
const sizeBtn = document.getElementById("Change-Btn");
const resetBTn = document.getElementById("Reset-Btn");
const allCells = document.getElementById("#cell");
const canvasSize = 800;
let gridValue;
let color = "Black";


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
function Slidervalue(){
    sizeSlider.onchange = (e) => {
    let vlaue = e.target.value;
    CreateCanvas(vlaue);
    sizeSliderOutput.textContent = sizeSlider.value;
    }
    return value;
}   



resetBTn.addEventListener("click", () => {
    CreateCanvas(value)
    
});

value = Slidervalue()



         

