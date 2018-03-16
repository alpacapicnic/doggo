var selectedSize;
var selectedFloor;
var selectedCute;
    
    var radios = document.forms["form"].elements["size"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedSize = this.value;
            checkButton();
        }
    }
    var radios = document.forms["form"].elements["floor"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedFloor = this.value;
            checkButton();
        }
    }
    var radios = document.forms["form"].elements["cute"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedCute = this.value;
            checkButton();
        }
    }

    


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


    

    


