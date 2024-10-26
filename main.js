let guest= document.querySelector('p')
let user=document.querySelector('input')
let btn=document.querySelector('button')
//guest.textContent=user.value
btn.addEventListener('click',function(){
  guest.textContent=user.value
})