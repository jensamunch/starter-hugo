document.addEventListener("DOMContentLoaded", function(event) {

  let mainNav=document.getElementById('main-nav');
  let navbarToggle=document.getElementById('navbar-toggle');

  navbarToggle.addEventListener('click',function(){

      if(navbarToggle.classList.contains("active")){
          mainNav.style.display="none";
          navbarToggle.classList.remove("active");
      }
      else{
          mainNav.style.display="flex";
          navbarToggle.classList.add("active");
      }
  });

});
