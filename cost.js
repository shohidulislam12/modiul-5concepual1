const insert =document.getElementById("insert");
const inputName=document.getElementById('inputname');
const annount=document.getElementById('annount')
const inputAmount=document.getElementById('inputamount');
let totalAmount=0;
insert.addEventListener("click",function(){
    inputN=inputName.value;
    inputA=inputAmount.value;
  totalAmount=Number(inputAmount.value)+totalAmount;
  inputAmount.value='';
   inputName.value='';
     annount.innerText=totalAmount;
     //list 
  
    let rowcontainer=document.getElementById('listcontainer');
    let row=document.createElement('div')
    row.style.display="flex";
    row.style.justifyContent="space-between"
     const list=document.createElement('p');
     list.innerText=inputN;
    row.appendChild(list)
     const price=document.createElement('p');
  price.innerText=inputA;
     row.appendChild(price);
    rowcontainer.appendChild(row)
})

// const row=`
// <div class="flex justify-between" data-amount="${annount}">
//   <p>${expense}</p>
//   <p>${amount}</p>

// </div>  
// `
// let rowContainer=document.getElementById("rowcontainer")

// rowContainer.innerHTML +=row;