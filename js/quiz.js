var selectedSize;
var selectedFloor;
var selectedCute;
    
    var radios = document.forms["form"].elements["size"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedSize = this.value;
            checkAnswers();
        }
    }
    var radios = document.forms["form"].elements["floor"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedFloor = this.value;
            checkAnswers();
        }
    }
    var radios = document.forms["form"].elements["cute"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedCute = this.value;
            checkAnswers();
        }
    }

function checkAnswers(){
    localStorage.setItem('size', selectedSize);
    localStorage.setItem('floor', selectedFloor);
    localStorage.setItem('cute', selectedCute);
}


/*function checkSize(){
    if (selectedSize === 'large'){
        console.log('large');
    }
    else console.log('small');
    
}*/


//document.getElementById("dogChoice").innerHTML = selectedSize;

/*function Box1Checked(){
    alert("Box1 is checked");
}*/

/*function checkButton(){

    console.log(selectedSize);
}   
function checkButton(){

    console.log(selectedFloor);
}   
function checkButton(){

    console.log(selectedCute);
} */  


    

    


