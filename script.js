let control = 1;

function Gallery(){
    $(erenPhoto).attr("src", `./img/Gallery/${Math.abs(control%7)}.png`)
}


$(next).click(function() {control++; if(Math.abs(control%7) === 0)control = 1; Gallery();});
$(previous).click(function() {control--; if(Math.abs(control%7) === 0)control = -1; Gallery();});
