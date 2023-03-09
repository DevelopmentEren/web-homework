var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;

function avatar1() {
    if (a1 == 0) {
        document.querySelector(".avatarclick1").style.transition = ".3s";
        document.querySelector(".aciklama1").style.transition = "1s";
        document.querySelector(".avatarclick1").style.display = "none";
        document.querySelector(".aciklama1").style.opacity = "0";
        document.querySelector(".printer1").style.height = "17em";
        document.querySelector(".printer1").style.opacity = "1";
    }

    if (a1 == 1) {
        document.querySelector(".avatarclick1").style.transition = ".3s";
        document.querySelector(".aciklama1").style.transition = "1s";
        document.querySelector(".avatarclick1").style.display = "block";
        document.querySelector(".aciklama1").style.opacity = "1";
        document.querySelector(".printer1").style.height = "0%";
        document.querySelector(".printer1").style.opacity = "0";
    }

    a1++;
    if (a1==2) {
        a1=0;
    }
}

function avatar2() {
    if (a2 == 0) {
        document.querySelector(".avatarclick2").style.transition = ".3s";
        document.querySelector(".aciklama2").style.transition = "1s";
        document.querySelector(".avatarclick2").style.display = "none";
        document.querySelector(".aciklama2").style.opacity = "0";
        document.querySelector(".printer2").style.height = "17em";
        document.querySelector(".printer2").style.opacity = "1";
    }

    if (a2 == 1) {
        document.querySelector(".avatarclick2").style.transition = ".3s";
        document.querySelector(".aciklama2").style.transition = "1s";
        document.querySelector(".avatarclick2").style.display = "block";
        document.querySelector(".aciklama2").style.opacity = "1";
        document.querySelector(".printer2").style.height = "0%";
        document.querySelector(".printer2").style.opacity = "0";
    }

    a2++;
    if (a2==2) {
        a2=0;
    }
}

function avatar3() {
    if (a3 == 0) {
        document.querySelector(".avatarclick3").style.transition = ".3s";
        document.querySelector(".aciklama3").style.transition = "1s";
        document.querySelector(".avatarclick3").style.display = "none";
        document.querySelector(".aciklama3").style.opacity = "0";
        document.querySelector(".printer3").style.height = "17em";
        document.querySelector(".printer3").style.opacity = "1";
    }

    if (a3 == 1) {
        document.querySelector(".avatarclick3").style.transition = ".3s";
        document.querySelector(".aciklama3").style.transition = "1s";
        document.querySelector(".avatarclick3").style.display = "block";
        document.querySelector(".aciklama3").style.opacity = "1";
        document.querySelector(".printer3").style.height = "0%";
        document.querySelector(".printer3").style.opacity = "0";
    }

    a3++;
    if (a3==2) {
        a3=0;
    }
}

function avatar4() {
    if (a4 == 0) {
        document.querySelector(".avatarclick4").style.transition = ".3s";
        document.querySelector(".aciklama4").style.transition = "1s";
        document.querySelector(".avatarclick4").style.display = "none";
        document.querySelector(".aciklama4").style.opacity = "0";
        document.querySelector(".printer4").style.height = "17em";
        document.querySelector(".printer4").style.opacity = "1";
    }

    if (a4 == 1) {
        document.querySelector(".avatarclick4").style.transition = ".3s";
        document.querySelector(".aciklama4").style.transition = "1s";
        document.querySelector(".avatarclick4").style.display = "block";
        document.querySelector(".aciklama4").style.opacity = "1";
        document.querySelector(".printer4").style.height = "0%";
        document.querySelector(".printer4").style.opacity = "0";
    }

    a4++;
    if (a4==2) {
        a4=0;
    }
}