$(function(){
    `use strict`;
let  winh = $(window).height();
let headerh = $(".header").innerHeight();
let nav = $(".navbar").innerHeight();
$(".slider, .carousel-item").height(winh - (headerh + nav));
/*start text loop in p*/
let p = document.getElementById("p-text");
let p_text = document.getElementById("p-text").getAttribute("data-text");
var letter= -1;
function writer(){
    let inerveal_id =setInterval(function(){
        letter++;
     if(letter=== p_text.length){
        clearInterval(inerveal_id);
          letter= -1;
          writer2();
       
       
     }else{p.innerHTML+= p_text[letter]}
    },200);
   
};

writer();
function writer2(){
    p.innerHTML= "";
};

setInterval(writer,5000);
$(".feature-work  ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
   if($(this).data("class")=== "all"){
           $(".shuffle-img .row .col-md").fadeIn(500);;
    }else{
        $(".shuffle-img .row .col-md").fadeOut(500);
        $($(this).data("class")).fadeIn();
    }
});
window.onscroll= function(){
    var looptop = $(".text-p ").offset().top;
    var caranmiy = $(".car-animy").offset().top;
    var ourwork  = $(".our-work ").offset().top;
    var latestbost =$(".latest-bost").offset().top;
    console.log(looptop);
    var camroh1 = document.getElementById("camroh1");
    if (window.scrollY >= looptop){
        $(".camroh1").addClass("skeww");
        $(".p-camro").css("left","0")
    };
    if (window.scrollY >= caranmiy -150  ){
        $(".car-animy .row .box1").css("left","0 ");
        $(".car-animy .row .box3").css("right","0");
        $(".car-animy .row .box2").addClass("skeww");
        $(".i1").fadeIn(4000);
        $(".i2").fadeIn(8000);
        $(".i3").fadeIn(12000);
        $(".i4").fadeIn(20000);
        $(".i1,.i2,.i3,.i4").css("display","inline-block")

    };
    if (window.scrollY >= ourwork){
        $(".our-work h3").css("left","0")
    };
    if(window.scrollY >= latestbost - 300 ){
        console.log("hii");
        $(".latest-bost .box1").css("left","0 ");
        $(".latest-bost .box3").css("right","0");
        $(".latest-bost .box2").addClass("skeww");
    }

};

setInterval(function(){
    
    let calsses= Math.floor(Math.random() * 4);
    console.log(calsses);
    
   
    console.log("heloow");
    
  
    let element = document.getElementById("img-background");
    
    console.log(element);
   element.className=`color${calsses}`;
    
  },1000);

})