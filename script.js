//FIX RAINBOW BUG

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
const rainbowCheckbox = document.querySelector("#rainbow");

//Default values
const canvasSize = 800;
let gridValue;
let prevColor = "000000";
let color ="000000";
let colorBackup= "";
let opacity = 0;

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
function GridColor(color,effect){
    if(effect == "none"){
    const allCells = document.querySelectorAll("#cell");
    allCells.forEach(box => {   
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#"+color;     
            
        });
    });
    }
    else if (effect == "rainbow"){ 
        const allCells = document.querySelectorAll("#cell");
        allCells.forEach(box => {
            box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#"+RandomColor();     
            console.log("Rainbow")
            });
        });

    }
}
function ClearCanvas(){
    container.innerHTML= "";
    
}
function CreateCanvas(size){
    ClearCanvas();
    CreateGrid(size);
    GridColor(color,"none");
}

function RandomColor(){
    color = Math.floor(Math.random()*16777215).toString(16);
    return color;

}

CreateCanvas(16);

//Events
colorPicker.addEventListener("input" , (e) =>{
    let tempColor = e.target.value;
    color = tempColor.replace("#" ,"");
    colorBackup = color;
    console.log(color);
    console.log(prevColor);
    GridColor(color,"none");
    eraserCheckbox.checked = false;
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

eraserCheckbox.addEventListener("change", () => { 
    if(eraserCheckbox.checked){
        prevColor = color;
        color = "FFFFFF";
        
        GridColor(color,"none")
        rainbowCheckbox.checked = false;
    }
    else{
        color = prevColor;
        GridColor(color,"none");
        
    }

});

rainbowCheckbox.addEventListener("change", () => {   
    if(rainbowCheckbox.checked){
        prevColor = color;
        GridColor(color,"rainbow");
        eraserCheckbox.checked = false;
    }
    else{
        color = prevColor;
        GridColor(prevColor,"none");
        
    }

});






         

