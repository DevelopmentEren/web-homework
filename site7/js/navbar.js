function item1() {
    document.querySelector('.ball').style.left="7.5%";
    document.querySelector('.ball').style.backgroundColor="darkgreen";
    document.querySelector('.item1').classList.remove("active");
    document.querySelector('.item2').classList.remove("active");
    document.querySelector('.item3').classList.remove("active");
    document.querySelector('.item4').classList.remove("active");
    document.querySelector('.item1').classList.add("active");
}

function item2() {
    document.querySelector('.ball').style.left="32.5%";
    document.querySelector('.ball').style.backgroundColor="darkred";
    document.querySelector('.item1').classList.remove("active");
    document.querySelector('.item2').classList.remove("active");
    document.querySelector('.item3').classList.remove("active");
    document.querySelector('.item4').classList.remove("active");
    document.querySelector('.item2').classList.add("active");
}

function item3() {
    document.querySelector('.ball').style.left="58%";
    document.querySelector('.ball').style.backgroundColor="darkcyan";
    document.querySelector('.item1').classList.remove("active");
    document.querySelector('.item2').classList.remove("active");
    document.querySelector('.item3').classList.remove("active");
    document.querySelector('.item4').classList.remove("active");
    document.querySelector('.item3').classList.add("active");
}

function item4() {
    document.querySelector('.ball').style.left="82.5%";
    document.querySelector('.ball').style.backgroundColor="darkorange";
    document.querySelector('.item1').classList.remove("active");
    document.querySelector('.item2').classList.remove("active");
    document.querySelector('.item3').classList.remove("active");
    document.querySelector('.item4').classList.remove("active");
    document.querySelector('.item4').classList.add("active");
}



function bgtoggle() {
    if (document.querySelector("body").style.backgroundColor=="white") {
        document.querySelector("body").style.backgroundColor="rgba(0,0,0,.9)";
        document.querySelector(".ball").style.borderColor="rgba(0,0,0,.9)";
    }

    else{
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector(".ball").style.borderColor="white";
    }
}