let submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    var answers = document.querySelectorAll('.q input');
    let score =0;
    let spancscore =document.querySelector('.test');
    let x =document.querySelectorAll('.q .answer');


    answers.forEach(a => {
        
  

        if(a.checked){
            a.style.background = ("red");
            spancscore.innerHTML = 'Please Try Again  0pts'
            spancscore.style.color = 'red'

        }
        if(a.checked && a.value == 1){
       


        
    a.style.background = "green";
   
    score =score +10
    spancscore.innerHTML ='Your Score:'+ score+'pts'
    spancscore.style.color = 'green'
    if(score === 100){
        spancscore.innerHTML = score+"pts" + ' Excellent!'
      
    }
    if(score <=50){
        spancscore.innerHTML = ' Please Try Again ' + score +"pts"
        spancscore.style.color = 'red'
    }
    if(score< 80 && score > 55){
        spancscore.innerHTML = 'You Can Better ' + score +"pts"
        spancscore.style.color = 'orange'
    }


   
    
     /*      x.forEach(w =>{
                let to = a[x].value;
to.innerHTML = 'salaah'
}
       
   ) */
/*  x.forEach(qw =>{
    if(spancscore.style.background = 'green' && a.value ==1 && a.checked && score +10){
       qw.innerHTML = ' You are right'
    } */
        
  



  



           }
           
        });
})



// const spanc = document.getElementById('answer')
// const len =document.getElementsByName('beforemg');
// const lg = document.getElementById('lg');
// const sub = document.getElementById('submit');
// sub.addEventListener('click', ()=>{
// for(i=0;i<len.length;i++){
//     if(len[i].checked){
//         const lun = len[i].value;
//         if(lun ==="lundi gras"){
//         spanc.innerHTML = 'You are right'
 
//         spanc.style.color = 'green'
// }

//     else{
//         spanc.innerHTML = 'you wrong please try again'
//       spanc.style.color = 'red'

//     }
// }
// }
// })










// /* var mar;
// console.log(lundigras.value);
// for(let i=0;i<lundigras.length;i++){
//     if(lundigras[i].checked){
// mar = lundigras[i].value
//     } */

// /* } */

// /* if(lundigras.value===lg.value){
//       spanc.innerHTML = 'You are right'
//     spanc.style.color = 'green'

// }
// else{
//     spanc.innerHTML = 'you wrong please try again'
//       spanc.style.color = 'red'
// }
// console.log(); */
// /* lundigras.addEventListener('click',()=>{
//     spanc.innerHTML = 'You are right'
//     spanc.style.color = 'green' */
// /* }) */
