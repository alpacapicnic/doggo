var selectedSize = localStorage.getItem('size');
var selectedFloor = localStorage.getItem('floor');
var selectedCute = localStorage.getItem('cute');

function Dog (image, breed, bio) {
    this.image = image;
    this.breed = breed;
    this.bio = bio;
}

//all dog objects
var golden = new Dog ('breeds/golden.jpg', 'Golden Retriever', 'The temperament of the Golden Retriever is a hallmark of the breed, and is described in the standard as "kindly, friendly and confident".');
var german = new Dog ('breeds/gshepherd.jpg', 'German Shepherd', 'German Shepherds are highly intelligent and obedient, as well as being protective of their owners.');
var rott = new Dog ('breeds/rottweiler.jpg', 'Rottweiler', 'The Rottweiler is good-natured, placid in basic disposition, very devoted, obedient, biddable and eager to work.');
var lab = new Dog ('breeds/labrador.jpg', 'Labrador Retriever', 'Labradors have a reputation as a very even-tempered breed and an excellent family dog.');
var doberman = new Dog ('breeds/doberman.jpg', 'Doberman Pinscher', 'The Doberman Pinscher has ranked amongst the most intelligent of dog breeds in experimental studies and expert evaluations.');
var mastiff = new Dog ('breeds/bullmastiff.jpeg', 'Bullmastiff', 'Bullmastiffs are strong, powerful, but sensitive dogs.');




var australian = new Dog ('breeds/austshepherd.jpeg', 'Australian Shepherd', 'Enjoys working, whether it is learning and practicing tricks, competing in dog agility, or engaging in any other physically and mentally involving activity.');

if (selectedSize === 'large'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            SetFinalVariables(golden);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(german);
        }
        else SetFinalVariables(rott);
    }
    else if (true){
        if (selectedCute === 'lion'){
            SetFinalVariables(lab);
        }
        else if(selectedCute === 'fox'){
            SetFinalVariables(doberman);
        }
        else SetFinalVariables(mastiff);
    }
}
else if (selectedSize === 'small'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            //SetFinalVariables(australian);
            var img = new Image();
            var div = document.getElementById('resultImage');

            img.onload = function() {
            div.appendChild(img);   
            };

        img.src = australian.image;
        }
        else if(selectedCute === 'fox'){
            document.getElementById("dogChoice").innerHTML = "SMALL HAIRY FOX";
        }
        else document.getElementById("dogChoice").innerHTML = "SMALL HAIRY BAT";
    }
    else if (true){
        if (selectedCute === 'lion'){
            document.getElementById("dogChoice").innerHTML = "SMALL SMOOTH LION";
        }
        else if(selectedCute === 'fox'){
            document.getElementById("dogChoice").innerHTML = "SMALL SMOOTH FOX";
        }
        else document.getElementById("dogChoice").innerHTML = "SMALL SMOOTH BAT";
    }
}    
else if (selectedSize === 'closet'){
    if (selectedFloor === 'shaggy'){
        if (selectedCute === 'lion'){
            document.getElementById("dogChoice").innerHTML = "SMALL HAIRY LION";
        }
        else if(selectedCute === 'fox'){
            document.getElementById("dogChoice").innerHTML = "SMALL HAIRY FOX";
        }
        else document.getElementById("dogChoice").innerHTML = "SMALL HAIRY BAT";
    }
    else if (true){
        if (selectedCute === 'lion'){
            document.getElementById("dogChoice").innerHTML = "SMALL SMOOTH LION";
        }
        else if(selectedCute === 'fox'){
            document.getElementById("dogChoice").innerHTML = "SMALL SMOOTH FOX";
        }
        else document.getElementById("dogChoice").innerHTML = "SMALL SMOOTH BAT";
    }
}  

function SetFinalVariables(dog) {
    document.getElementById("resultBreed").innerHTML = dog.breed;
    document.getElementById("resultBio").innerHTML = dog.bio;

    var img = new Image();
            var div = document.getElementById('resultImage');

            img.onload = function() {
            div.appendChild(img);   
            };

        img.src = dog.image;
        

}
