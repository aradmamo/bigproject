let burger = document.querySelector(".humburger");
let menu = document.querySelector(".header-menu");
burger.addEventListener('click', ()=>{
   menu.style.display = (menu.style.display == 'block' ? 'none' : 'block');

})