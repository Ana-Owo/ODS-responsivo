function funcionNav(){
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}
function funcionImg(){
    var x = document.getElementById("info1");
    if (x.className === "info"){
        x.className += " responsive2";
    } else{
        x.className = "info";
    }
}
function funcionImg2(){
    var x = document.getElementById("info2");
    if (x.className === "info"){
        x.className += " responsive2";
    } else{
        x.className = "info";
    }
}