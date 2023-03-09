function slide1c() {
    document.querySelector(".slide1").classList.remove("activeslide");
    document.querySelector(".slide2").classList.remove("activeslide");
    document.querySelector(".slide3").classList.remove("activeslide");
    document.querySelector(".slide4").classList.remove("activeslide");
    document.querySelector(".slide5").classList.remove("activeslide");
    
    y=1;
    document.querySelector(".footslide1").style.opacity=1;
    document.querySelector(".footslide2").style.opacity=.7;
    document.querySelector(".footslide3").style.opacity=.7;
    document.querySelector(".footslide4").style.opacity=.7;
    document.querySelector(".footslide5").style.opacity=.7;
    document.querySelector(".slide1").classList.add("activeslide");
}

function slide2c() {
    document.querySelector(".slide1").classList.remove("activeslide");
    document.querySelector(".slide2").classList.remove("activeslide");
    document.querySelector(".slide3").classList.remove("activeslide");
    document.querySelector(".slide4").classList.remove("activeslide");
    document.querySelector(".slide5").classList.remove("activeslide");
    
    y=2;
    document.querySelector(".footslide2").style.opacity=1;
    document.querySelector(".footslide1").style.opacity=.7;
    document.querySelector(".footslide3").style.opacity=.7;
    document.querySelector(".footslide4").style.opacity=.7;
    document.querySelector(".footslide5").style.opacity=.7;
    document.querySelector(".slide2").classList.add("activeslide");
}

function slide3c() {
    document.querySelector(".slide1").classList.remove("activeslide");
    document.querySelector(".slide2").classList.remove("activeslide");
    document.querySelector(".slide3").classList.remove("activeslide");
    document.querySelector(".slide4").classList.remove("activeslide");
    document.querySelector(".slide5").classList.remove("activeslide");
    
    y=3;
    document.querySelector(".footslide3").style.opacity=1;
    document.querySelector(".footslide2").style.opacity=.7;
    document.querySelector(".footslide1").style.opacity=.7;
    document.querySelector(".footslide4").style.opacity=.7;
    document.querySelector(".footslide5").style.opacity=.7;
    document.querySelector(".slide3").classList.add("activeslide");
}

function slide4c() {
    document.querySelector(".slide1").classList.remove("activeslide");
    document.querySelector(".slide2").classList.remove("activeslide");
    document.querySelector(".slide3").classList.remove("activeslide");
    document.querySelector(".slide4").classList.remove("activeslide");
    document.querySelector(".slide5").classList.remove("activeslide");
    
    y=4;
    document.querySelector(".footslide4").style.opacity=1;
    document.querySelector(".footslide2").style.opacity=.7;
    document.querySelector(".footslide3").style.opacity=.7;
    document.querySelector(".footslide1").style.opacity=.7;
    document.querySelector(".footslide5").style.opacity=.7;
    document.querySelector(".slide4").classList.add("activeslide");
}

function slide5c() {
    document.querySelector(".slide1").classList.remove("activeslide");
    document.querySelector(".slide2").classList.remove("activeslide");
    document.querySelector(".slide3").classList.remove("activeslide");
    document.querySelector(".slide4").classList.remove("activeslide");
    document.querySelector(".slide5").classList.remove("activeslide");
    
    y=5;
    document.querySelector(".footslide5").style.opacity=1;
    document.querySelector(".footslide2").style.opacity=.7;
    document.querySelector(".footslide3").style.opacity=.7;
    document.querySelector(".footslide4").style.opacity=.7;
    document.querySelector(".footslide1").style.opacity=.7;
    document.querySelector(".slide5").classList.add("activeslide");
}

var y=1;

function slidefor() {
    if (y==1) slide1c();
    if (y==2) slide2c();
    if (y==3) slide3c();
    if (y==4) slide4c();
    if (y==5) slide5c();

    if (y==1) document.querySelector(".footslide1").style.opacity=1;
    else document.querySelector(".footslide1").style.opacity=.7;
    if (y==2) document.querySelector(".footslide2").style.opacity=1;
    else document.querySelector(".footslide2").style.opacity=.7;
    if (y==3) document.querySelector(".footslide3").style.opacity=1;
    else document.querySelector(".footslide3").style.opacity=.7;
    if (y==4) document.querySelector(".footslide4").style.opacity=1;
    else document.querySelector(".footslide4").style.opacity=.7;
    if (y==5) document.querySelector(".footslide5").style.opacity=1;
    else document.querySelector(".footslide5").style.opacity=.7;

    y++;

    if (y>5) {
        y=1;
    }
}

setInterval(slidefor,3000);