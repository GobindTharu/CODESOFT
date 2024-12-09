let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

 let string = "";
 let arr = Array.from(buttons);
 arr.forEach(button => {
    button.addEventListener('click', (c)        => { 
     if(c.target.innerHTML == '=')
     {
     string = eval(string);
     input.value = string;
     } 
  else if(c.target.innerHTML == 'Ac')
     {
     string = "";
     input.value = string; 
     }
    else if  (c.target.innerHTML == 'Del')
     { 
     string = string.substring(0, string.length-1);
     input.value = string;
     }
     
   else{
      string += c.target.innerHTML;
       input.value = string;
      }
     })
 })
