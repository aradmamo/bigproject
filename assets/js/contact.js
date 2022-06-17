let burger = document.querySelector(".humburger");
let menu = document.querySelector(".header-menu");
burger.addEventListener('click', ()=>{
   menu.style.display = (menu.style.display == 'block' ? 'none' : 'block');

});


const fn = document.getElementById('first');
const ln = document.getElementById('lastname');
const email = document.getElementById('email');
const span = document.getElementById('error');
const btn  = document.getElementById('btn');
const form = document.querySelector("form")
const error2 = document.getElementById('erroremail');
const tel = document.getElementById('tel')
btn.addEventListener("click", function(e) {
    if(fn.value == "" || ln.value =="" || email=="" ||tel ==""){
        
span.innerHTML = "*Sir you forgot one or more of your details"
span.style.color ="red"


    }
    else{
        span.innerHTML = "";
    }
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
        e.preventDefault();
      
error2.innerHTML = "*Sir please check your email again"


error2.style.color = "red"
}

    else{
        error2.innerHTML =""
    }
}
)
