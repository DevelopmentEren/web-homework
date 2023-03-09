var gun,saat,dk,sn;
gun=51;
saat=11;
dk=28;
sn=37;

function timing() {
    sn--;
    if (sn<0) {
        dk--;
        sn=59;
    }
    if (dk<0) {
        saat--;
        dk=59;
    }
    if (saat<0) {
        gun--;
        saat=23;
    }
    if (gun<0) {
        gun=51;
        saat=11;
        dk=28;
        sn=37;
    }

    document.querySelector(".gunyazi").innerHTML=gun;
    document.querySelector(".saatyazi").innerHTML=saat;
    document.querySelector(".dkyazi").innerHTML=dk;
    document.querySelector(".snyazi").innerHTML=sn;
}

setInterval(timing,1000);