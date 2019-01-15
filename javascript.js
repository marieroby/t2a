// menu tiroir trop stylé :
var bool=true;
function cache(id){
    if(bool==true){
        document.getElementById(id).style.display='none';
        bool=false;
    }else{
        document.getElementById(id).style.display='block';
        bool=true;
    }
}

// photo s'agrandit wouaaaa :
function bigImg(x) {
    x.style.height = "137px";
    x.style.width = "187px";
}

function normalImg(x) {
    x.style.height = "110px";
    x.style.width = "150px";
}

// je donne s'agrandit wouhou
function bigDiv(x) {
    x.style.height = "75px";
    x.style.width = "500px";
}

function normalDiv(x) {
    x.style.height = "75px";
    x.style.width = "300px";
}