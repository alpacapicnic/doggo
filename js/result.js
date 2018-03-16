var selectedSize = localStorage.getItem('size');
var selectedFloor = localStorage.getItem('floor');
var selectedCute = localStorage.getItem('cute');

if (selectedSize === 'large'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            document.getElementById("dogChoice").innerHTML = "BIGGIE HAIRY LION";
        }
        else if(selectedCute === 'fox'){
            document.getElementById("dogChoice").innerHTML = "BIGGIE HAIRY FOX";
        }
        else document.getElementById("dogChoice").innerHTML = "BIGGIE HAIRY BAT";
    }
    else if (true){
        if (selectedCute === 'lion'){
            document.getElementById("dogChoice").innerHTML = "BIGGIE SMOOTH LION";
        }
        else if(selectedCute === 'fox'){
            document.getElementById("dogChoice").innerHTML = "BIGGIE SMOOTH FOX";
        }
        else document.getElementById("dogChoice").innerHTML = "BIGGIE SMOOTH BAT";
    }
    else if (true){
        
    }
}

