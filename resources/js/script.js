$(document).ready(function () {
  setTimeout(function () {
    $(".loader_bg").hide();
  }, 2000);
}); 
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < $("#intro").offset().top){
      $(".arrow").addClass("hidden");
      $("#navbar_top").removeClass("sticky-top");
    }
    else{
      $(".arrow").removeClass("hidden");
      $("#navbar_top").addClass("sticky-top");
    }
  })
})
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll_nav = $(window).scrollTop();
    if(scroll_nav < 155){
      $("#navbar_top").removeClass("sticky-top");
      $("#navbar_top").removeClass("bg-nav");
    }
    else{
      $("#navbar_top").addClass("sticky-top");
      $("#navbar_top").addClass("bg-nav");
    }
  })
})

var words = ["SOLUTIONS","TEMPLATE","SERVICES"];
function words1(){
  document.getElementById("words").innerHTML=words[0];
}
window.setInterval(words1, 2000);
function words2(){
  document.getElementById("words").innerHTML=words[1];
}
window.setInterval(words2, 4000);
function words3(){
  document.getElementById("words").innerHTML=words[2];
}
window.setInterval(words3, 6000);
//////////////////////////////////////
var details_h3_1= document.getElementById("details_h3_1");
var details_h32= document.getElementById("details_h3_2");
var details_h33= document.getElementById("details_h3_3");
/////////////////////////////////////
var click1 = document.getElementById("click1");
var click2 = document.getElementById("click2");
var click3 = document.getElementById("click3");
////////////////////////////////////
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
//////////////////////////////////////
click1.onmouseover = function (){
  "use strict";
  click1.style.color ='#14bf98';
  details_h3_1.style.color ='#14bf98';
}
click2.onmouseover = function (){
  "use strict";
  click2.style.color ='#14bf98';
  details_h3_2.style.color ='#14bf98';
}
click3.onmouseover = function (){
  "use strict";
  click3.style.color ='#14bf98';
  details_h3_3.style.color ='#14bf98';
}
///////////////////////////////////////
click1.onmouseout = function (){
  "use strict";
  click1.style.color ='#484a46';
  details_h3_1.style.color ='#484a46';
}
click2.onmouseout = function (){
  "use strict";
  click2.style.color ='#484a46';
  details_h3_2.style.color ='#484a46';
}
click3.onmouseout = function (){
  "use strict";
  click3.style.color ='#484a46';
  details_h3_3.style.color ='#484a46';
}
function showhide1() {
  if((p1.style.display !="none") && (p2.style.display ="none") && (p3.style.display ="none")){
    p1.style.display = "none";
  }
  else{
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
  }
}
function showhide2() {
  if((p1.style.display ="none") && (p2.style.display !="none") && (p3.style.display ="none")){
    p2.style.display = "none";
    p1.style.display = "none";
    p3.style.display = "none";
  }
  else{
    if((p1.style.display ="block") || (p3.style.display ="block") && (p2.style.display ="block")){
      p2.style.display = "block";
      p1.style.display = "none";
      p3.style.display = "none";
    }
  }
}
function showhide3() {
  if((p1.style.display ="none") && (p2.style.display ="none") && (p3.style.display !="none")){
    p3.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
  }
  else{
    if((p1.style.display ="block") || (p2.style.display ="block") && (p3.style.display ="block")){
      p3.style.display = "block";
      p1.style.display = "none";
      p2.style.display = "none";
    }
  }
}

$(document).ready(function() {
  $("#carouselExampleControls").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});
/////////////////////////////////////
/* active class "is_clicked" */
var activeclass = document.querySelectorAll('#filtre-btn button');
  for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].addEventListener('click', activateClass);
  }
function activateClass(e) {
  for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].classList.remove('is_clicked');
  }
  e.target.classList.add('is_clicked');
}
//////////////////////////////////////
function show_all(){
  var all = document.querySelectorAll('.all');
  for(var i=0; i < all.length; i++){
    all[i].style.display = 'block';
  }
};
function is_design(){
  var not_design = document.querySelectorAll('.not_design');
  for(var i=0; i< not_design.length; i++){
    not_design[i].style.display = 'none';
  }
  var isdesign = document.querySelectorAll('.isdesign');
  for(var i=0; i< isdesign.length; i++){
    isdesign[i].style.display = 'block';
  }
};
function is_dev(){
  var not_dev = document.querySelectorAll('.not_dev');
  for(var i=0; i< not_dev.length; i++){
    not_dev[i].style.display = 'none';
  }
  var isdev = document.querySelectorAll('.isdev');
  for(var i=0; i< isdev.length; i++){
    isdev[i].style.display = 'block';
  }
};
function is_marketing(){
  var not_marketing = document.querySelectorAll('.not_marketing');
  for(var i=0; i< not_marketing.length; i++){
    not_marketing[i].style.display = 'none';
  }
  var ismarketing = document.querySelectorAll('.ismarketing');
  for(var i=0; i< ismarketing.length; i++){
    ismarketing[i].style.display = 'block';
  }
};
function is_seo(){
  var not_seo = document.querySelectorAll('.not_seo');
  for(var i=0; i< not_seo.length; i++){
    not_seo[i].style.display = 'none';
  }
  var isseo = document.querySelectorAll('.isseo');
  for(var i=0; i< isseo.length; i++){
    isseo[i].style.display = 'block';
  }
};
////////////////////////////////////
var back_btn = document.getElementsByClassName('back-btn');
var span_back = document.getElementsByClassName('close');
var project1 = document.getElementById("project1");
var project = document.getElementsByClassName('project');
for(var i=0; i<back_btn.length; i++){
  back_btn[i].onclick = function(){
    for(var j=0; j<project.length; j++){
      project[j].style.display = 'none';
    }
  }
}
for(var i=0; i<span_back.length; i++){
  span_back[i].onclick = function(){
    for(var j=0; j<project.length; j++){
      project[j].style.display = 'none';
    }
  }
}
////////////////////////////////////
var div_project1 = document.getElementById('div-project1');
var div_project2 = document.getElementById('div-project2');
var div_project3 = document.getElementById('div-project3');
var div_project4 = document.getElementById('div-project4');
var div_project5 = document.getElementById('div-project5');
var div_project6 = document.getElementById('div-project6');
var div_project7 = document.getElementById('div-project7');
var div_project8 = document.getElementById('div-project8');
div_project1.onclick = function(){
  project1.style.display = 'block';
}
div_project2.onclick = function(){
  project2.style.display = 'block';
}
div_project3.onclick = function(){
  project3.style.display = 'block';
}
div_project4.onclick = function(){
  project4.style.display = 'block';
}
div_project5.onclick = function(){
  project5.style.display = 'block';
}
div_project6.onclick = function(){
  project6.style.display = 'block';
}
div_project7.onclick = function(){
  project7.style.display = 'block';
}
div_project8.onclick = function(){
  project8.style.display = 'block';
}
////////////////////////////////////
var map = document.querySelector('#map');
var my_position = document.querySelector('.my-position');
my_position.onclick = function(){
  map.style.display = 'block';
}