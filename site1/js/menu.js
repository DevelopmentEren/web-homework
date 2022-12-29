window.addEventListener("scroll" , () =>{
    var menu=document.getElementById("menu-b");
    var li = document.getElementById("menuli");
    var li1 = document.getElementById("menuli1");
    var li2 = document.getElementById("menuli2");
    var li3 = document.getElementById("menuli3");
    var li4 = document.getElementById("menuli4");
    var li5 = document.getElementById("menuli5");
    menu.classList.toggle("kay" , window.scrollY > 130 );
    li.classList.toggle("menuli" , window.scrollY > 130 );
    li1.classList.toggle("menuli" , window.scrollY > 130 );
    li2.classList.toggle("menuli" , window.scrollY > 130 );
    li3.classList.toggle("menuli" , window.scrollY > 130 );
    li4.classList.toggle("menuli" , window.scrollY > 130 );
    li5.classList.toggle("menuli" , window.scrollY > 130 );
    });