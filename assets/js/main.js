let burger = document.querySelector(".humburger");
let menu = document.querySelector(".header-menu");

burger.addEventListener('click', ()=>{
    menu.style.display = (menu.style.display == 'block' ? 'none' : 'block');
});


let megmeg = document.querySelectorAll('.bigcontainer  .imgcard');
megmeg.forEach(meg =>{
meg.addEventListener('click', ()=>{
    meg.style.transform = 'rotate(360deg)'

 
    
})
})
