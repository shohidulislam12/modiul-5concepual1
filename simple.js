
const value=document.getElementById('value');
const increment=document.getElementById('increment_button');
increment.addEventListener('click',function(){
   let real_value=Number(value.innerText);
   real_value++;
    value.innerText=real_value;
})
const decrement=document.getElementById('decrement_button');
decrement.addEventListener('click',function(){
   let real_value=Number(value.innerText);
   real_value--;
    value.innerText=real_value;

})
const counter =document.getElementById('count');
counter.addEventListener("click",function(){
   const decrement=document.getElementById('decrement_button');
   const increment=document.getElementById('increment_button');
  
if(increment.getAttribute('disabled')==null){
decrement.setAttribute('disabled',true);
increment.setAttribute('disabled',true);
counter.style.backgroundColor='red'
}
else{
decrement.removeAttribute('disabled');
increment.removeAttribute('disabled');
counter.style.backgroundColor=''
}




})