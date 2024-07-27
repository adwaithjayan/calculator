const display = document.getElementById('display');


function appendNumber(data) {
    display.value += data;
}
function calculateAns() { 
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error';
    }
}


function clearnumb(){
    display.value = '';
}