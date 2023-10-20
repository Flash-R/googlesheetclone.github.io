// manage the options for styling

activeCellElement = document.getElementById("activeCell");
const classNames = document.getElementsByClassName("text-align");
let boldButton = document.getElementById("bold");
let italicButton = document.getElementById("italic");
let underlineButton = document.getElementById("underline");
let activeCell = null; // kepp the value of active cell

// let defaultoptionsState = {
//     fontFamily : "sans-serif",
//     isBoldSelected: false,
//     isitalicSelected: false,
//     isUnderlineSelected: false,
//     textAlign: "left",
//     textColor: "#000",
//     backgroundColor: "#fff",
//     fontSize: 14
// }

let activeOPtionState;

// updating the style buttons
function updateStyles(button, isselected){
    if(isselected){
        button.classList.add("active-option")
    }else{
        button.classList.remove("active-option")
        
    }
}

function highlitedOPtionButtonOnFocus(){
    // check if bold is selected and add or remove the active class
    updateStyles(boldButton, activeOPtionState.isBoldSelected);
    // working on italic
    updateStyles(italicButton, activeOPtionState.isitalicSelected);
    // Working on underline
    updateStyles(underlineButton, activeOPtionState.isUnderlineSelected);

    highlitedTextAlignBtn(activeOPtionState.textAlign);
}
// to be executed when the cell is fucused
function focussed(event){

    if(activeCell && activeCell.id === event.target.id){
        return;
    }
    activeCell = event.target;
    activeCellElement.innerText = activeCell.id;

    const activeCellstyles = getComputedStyle(activeCell);
    // inintialize the states for eah focused cell
    activeOPtionState = {
        fontFamily : activeCellstyles.fontFamily,
        isBoldSelected: activeCellstyles.fontWeight === "600",
        isitalicSelected: activeCellstyles.fontStyle === "italic",
        isUnderlineSelected: activeCellstyles.textDecoration.includes("underline"),
        textAlign: activeCellstyles.textAlign,
        textColor: activeCellstyles.color,
        backgroundColor: activeCellstyles.backgroundColor,
        fontSize: activeCellstyles.fontSize
    }
    highlitedOPtionButtonOnFocus();
}

function onClickBold(clickedButton){
    // togglr the element active class
    clickedButton.classList.toggle("active-option");
    if(activeCell){
        if(activeOPtionState.isBoldSelected === false){
            activeCell.style.fontWeight = "600";
            // activeOPtionState.isBoldSelected = true;
        }else{
            activeCell.style.fontWeight = "400";
            // activeOPtionState.isBoldSelected = false;

        }
        activeOPtionState.isBoldSelected = !activeOPtionState.isBoldSelected
    }

}
// making it italic
function onClickItalic(clickedButton){
    // togglr the element active class
    clickedButton.classList.toggle("active-option");
    if(activeCell){
        if(activeOPtionState.isitalicSelected === false){
            activeCell.style.fontStyle = "italic";
            // activeOPtionState.isitalicSelected = true;
        }else{
            activeCell.style.fontStyle = "normal";
            // activeOPtionState.isitalicSelected = false;

        }
        activeOPtionState.isitalicSelected = !activeOPtionState.isitalicSelected

    }

}
// making it underline
function onClickUnderline(underlineBtn){
    // togglr the element active class
    underlineBtn.classList.toggle("active-option");
    if(activeCell){
        if(activeOPtionState.isUnderlineSelected === false){
            activeCell.style.textDecoration = "underline";
            // activeOPtionState.isitalicSelected = true;
        }else{
            activeCell.style.textDecoration = "none";
            // activeOPtionState.isitalicSelected = false;

        }
        activeOPtionState.isitalicSelected = !activeOPtionState.isitalicSelected

    }

}
// getting all the classNames for the text align
function highlitedTextAlignBtn(highlitedTextAlign){
    for (let index = 0; index < classNames.length; index++) {
        if(classNames[index].getAttribute("data-value") === highlitedTextAlign){
            classNames[index].classList.add("active-option")
        }else{
            classNames[index].classList.remove("active-option");
        }
        
    }

}
function onClickTextAlign(clickedButton){
    const selectedValue = clickedButton.getAttribute("data-value");
    highlitedTextAlignBtn(selectedValue);

    if(activeCell){
        activeCell.style.textAlign = selectedValue;
        activeOPtionState.textAlign = selectedValue;
    }
}
function onChangeColor(colorBtn){
    let selectedColor = colorBtn.value;
    if(activeCell){
        activeCell.style.color = selectedColor;
        activeOPtionState.color = selectedColor;
    }
}

// changing the backgroung color or the cell
function onChangeBg(BgColorBtn){
    let selectedBg = BgColorBtn.value;
    if(activeCell){
        activeCell.style.backgroundColor = selectedBg;
        activeOPtionState.backgroundColor = selectedBg;
    }
}
// changing font Family
function changeFontFamily(){
    let selectedFont = document.getElementById("fontFamily").value;
    if(activeCell){
        activeCell.style.fontFamily = selectedFont;
        activeOPtionState.fontFamily = selectedFont;
    }
}
// Changing font Size
function changeFontSize(){
    let selectedFontSize = document.getElementById("fontSize").value;
    if(activeCell){
        console.log(selectedFontSize);
        activeCell.style.fontSize = selectedFontSize;
        activeOPtionState.fontSize = selectedFontSize;
    }
    
}