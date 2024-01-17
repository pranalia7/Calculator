// let input=document.getElementById('inputBox')
// let buttons=document.querySelectorAll('but')
// let string="";
// let ar=Array.from(buttons);
// ar.forEach(but=>{
//     but.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '=='){
//             string=eval(string);
//             input.value=string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string ="";
//             input.value=string;
//         }
//         else if(e.target.innerHTML== 'DEL'){
//             string =string.substring(0,string.length-1);
//             input.value=string;
//         }
//         else{
//             string=string+e.target.innerHTML;
//             input.value=string;
//         }
//     })
// })
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let ar = Array.from(buttons);
ar.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})