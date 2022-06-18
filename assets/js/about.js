let burger = document.querySelector(".humburger");
let menu = document.querySelector(".header-menu");
burger.addEventListener('click', ()=>{
   menu.style.display = (menu.style.display == 'block' ? 'none' : 'block');

})
let img = document.querySelectorAll('.container .lato');
img.forEach(one => {
   one.addEventListener('click',()=>{
   one.style.transform = 'rotate(1080deg)' 
   
}
)
})
