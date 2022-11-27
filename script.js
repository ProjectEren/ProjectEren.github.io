let photo = document.getElementById("erenPhoto");
let previous = document.getElementById("previous");
console.log(previous);
let next = document.getElementById("next");

let control = 0;

function Gallery(){
    switch(Math.abs(control%7)){
        case 0:
            photo.src = "./img/Gallery/1.png";
            break;
        case 1:
            photo.src = "./img/Gallery/2.png";
            photo.
            break;
        case 2:
            photo.src = "./img/Gallery/3.png";
            break;
        case 3:
            photo.src = "./img/Gallery/4.png";
            break;
        case 4:
            photo.src = "./img/Gallery/5.png";
            break;
        case 5:
            photo.src = "./img/Gallery/6.png";
            break;
         case 6:
            photo.src = "./img/Gallery/7.png";
            break;
    }
}

next.addEventListener("click", function() {control++; Gallery(); console.log(control)});
previous.addEventListener("click", function() {control--; Gallery(); console.log(control)});


