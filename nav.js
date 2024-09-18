const ul=document.getElementById('ul');
const lists=document.getElementsByTagName('li');
let lastClick=null;
for (const list of lists){
   list.addEventListener('click',function(){
   
    if(lastClick==null){
        list.style.backgroundColor='red';
        list.style.padding='10px';
        list.style.margin='10px';
        list.style.borderRadius='15px';
lastClick=list;    
    }
    else{
       lastClick.style.backgroundColor='transparent';
        lastClick.style.padding='';
        lastClick.style.margin='';
        lastClick.style.borderRadius='';
        list.style.backgroundColor='red';
        list.style.padding='10px';
        list.style.margin='10px';
        list.style.borderRadius='15px';
        lastClick=list;    
    }
 
   })
}