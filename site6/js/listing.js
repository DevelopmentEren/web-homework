function goster1() {
    document.getElementById("uc1").style.display="block";
    document.getElementById("uc2").style.display="none";
    document.getElementById("uc3").style.display="none";
    say=0;
}

function goster2() {
    document.getElementById("uc1").style.display="none";
    document.getElementById("uc2").style.display="block";
    document.getElementById("uc3").style.display="none";
    say=1;
}

function goster3() {
    document.getElementById("uc1").style.display="none";
    document.getElementById("uc2").style.display="none";
    document.getElementById("uc3").style.display="block";
    say=2;
}

var say=0;

var sayac= setInterval(() => {

if (say==0) {
    goster1();
}
if (say==1) {
    goster2();
}
if (say==2) {
    goster3();
}
say++;

if(say>2)
{
    say=0;
}
},3000);