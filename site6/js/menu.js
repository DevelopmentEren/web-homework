// window.addEventListener('scroll' , () => {
//     const scrolled=window.screenY;
//     console.log(scrolled);
//     if (window.scrollBy(0,0)) {
//         document.getElementById("menu").style.borderBottom="1px solid  rgba(255, 255, 255, .215);";
//     }

//     else{
//         document.getElementById("menu").style.borderBottom="0px solid transparant";
//     }
// });
    
window.addEventListener("scroll" , () =>{
var menu=document.getElementById("menu");
var li = document.getElementById("menul")
menu.classList.toggle("kay" , window.scrollY > 0 );
li.classList.remove("menuli5" , window.scrollY > 0 );
});

function click() {
    var spni=document.getElementById("spn");
    var spni1=document.getElementById("spn1");
    var li=document.getElementById("menuli");
    var lix=document.getElementById("menulix");
    var lixx=document.getElementById("menulixx");
    var lixxx=document.getElementById("menulixxx");
    spni.classList.toggle("d-none");
    spni1.classList.remove("d-none");
    document.getElementById("menul").style.display="block";
    li.classList.toggle("menuli2");
    lix.classList.toggle("menuli2");
    lixx.classList.toggle("menuli2");
    lixxx.classList.toggle("menuli2");
}

function click1() {
    var spni=document.getElementById("spn");
    var spni1=document.getElementById("spn1");
    var li=document.getElementById("menuli");
    var lix=document.getElementById("menulix");
    var lixx=document.getElementById("menulixx");
    var lixxx=document.getElementById("menulixxx");
    spni.classList.remove("d-none");
    spni1.classList.toggle("d-none");
    document.getElementById("menul").style.display="none";
    li.classList.remove("menuli2");
    lix.classList.remove("menuli2");
    lixx.classList.remove("menuli2");
    lixxx.classList.remove("menuli2");
}