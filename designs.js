// Select color input
const chosenColor = document.getElementById('colorPicker');
//Select the skeleton's table to be constructed
const theTbl = document.getElementById('pixelCanvas');
//Select the submit action from the form
const submitReady = document.getElementById('sizePicker');

function makeGrid() {
    // Select size input
    const heightSize = document.getElementById('inputHeight').value;
    const widthSize = document.getElementById('inputWidth').value;
    for (let i = 0; i < heightSize; i++) {
        let newRow = document.createElement('tr');
        theTbl.appendChild(newRow);
        for (let j = 0; j <widthSize; j++) {
            let newCell = document.createElement('td');
            newRow.appendChild(newCell);            
        }  
    }
}

//Add event listener to the submit-form-input and call of the makeGrid()
submitReady.addEventListener('submit', function (e) {
    e.preventDefault();
    makeGrid();
})

//Add color to a cell 
theTbl.addEventListener('click', function (event) {
    event.target.style.background = chosenColor.value;  //The question here is if I should have left the heightSize and the widthSize outside the function and then call only the value inside like here.?  
})

//remove the added color when double click 
theTbl.addEventListener('dblclick', function (event) {
    event.target.style.background = 'transparent';    
})