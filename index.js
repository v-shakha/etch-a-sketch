let container = document.querySelector(".container");
let button = document.querySelector(".size");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.flexWrap = "no-wrap";
container.style.maxWidth = "960px";
container.style.border = "1px solid black";
createSpace(16);
function createSpace(size){
    
    for(i=0;i<size;i++){
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexWrap = "no-wrap";
        for(j=0;j<size;j++){
            let div = document.createElement("div");
            div.classList.add("square");
            div.style.boxSizing = "border-box";
            div.style.width = "60px";
            div.style.height = "60px";
            div.style.border = "1px solid black";
            div.addEventListener('mouseenter',function(){
                div.style.backgroundColor = "black";
            })
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}
button.addEventListener('click',function(){
    let newSize = prompt("Enter new size");
    while(parseInt(newSize) > 100){
        newSize = prompt("Maximum is 100. Enter again");
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createSpace(newSize);
})