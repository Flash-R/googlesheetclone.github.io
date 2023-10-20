let head = document.getElementById("header");

for(let i =65; i <= 90; i++){
    let char = String.fromCharCode(i);

    let boldElement = document.createElement("b");
    boldElement.innerText = char;

    head.appendChild(boldElement);

}

let cellContainer = document.getElementById("rowsCell");
for(let j = 1; j <= 100; j++){
    const newRow = document.createElement("div")
    for(let i = 64; i <= 90; i++){
        if(i === 64){
            const sno = document.createElement("b");
            sno.innerText = j;
            newRow.appendChild(sno);
    
        }else{
            let cell = document.createElement("div")
            newRow.appendChild(cell);
            cell.id = String.fromCharCode(i) + j;
            cell.contentEditable = true;
            cell.addEventListener("focus",focussed);
        }
    }
    cellContainer.appendChild(newRow);
}

