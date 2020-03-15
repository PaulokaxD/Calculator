'use strict'
let operado;
let operando;
let operador;

let nWindow = document.querySelector(".number-window");
let btn = document.querySelectorAll(".number");
let c = document.querySelector(".C");
let arrow = document.querySelector(".arrow");
let suma = document.querySelector(".plus");
let resta = document.querySelector(".minus");
let mult = document.querySelector(".mult");
let division = document.querySelector(".div");
let igual = document.querySelector(".eq");


suma.addEventListener("click", function(){
    operado = nWindow.innerText;
    nWindow.innerText = "0";
    operador = "+";
});

resta.addEventListener("click", function(){
    operado = nWindow.innerText;
    nWindow.innerText = "0";
    operador = "-";
});

mult.addEventListener("click", function(){
    operado = nWindow.innerText;
    nWindow.innerText = "0";
    operador = "×";
});

division.addEventListener("click", function(){
    operado = nWindow.innerText;
    nWindow.innerText = "0";
    operador = "÷";
});

igual.addEventListener("click", function(){
    operando = parseInt(nWindow.innerText,10);
    operado = parseInt(operado,10);
    switch(operador){
        case "+":
            nWindow.innerText = operado+operando;
            operado = operado+operando;
            break;
        case "-":
            nWindow.innerText = operado-operando;
            operado = operado-operando;
            break;
        case "×":
            nWindow.innerText = operado*operando;
            operado = operado*operando;
            break;
        case "÷":
            if(operando!=0){
                nWindow.innerText = operado/operando;
                operado = operado/operando;
            }else{
                nWindow.innerText = "Math Error"
            }
            
            break;
        default:
            break;
    }
    
    
});

arrow.addEventListener("click",function(){
    let number = arrow.innerText;
    let wnd = nWindow.innerText;
    if(!["NaN","Math Error","0"].includes(wnd)){
        if(number!=="0"){
            nWindow.innerText = wnd.substr(0,wnd.length-1);
        }
    }
    
});//0cuando se boora, borrar error ynan

btn.forEach(elem => {
	elem.addEventListener("click", function() {
	    let number = elem.innerText;
        if(nWindow.innerText==="0"){
            nWindow.innerText = number;
        }else{
            nWindow.innerText += number;
        }
	})
});

c.addEventListener("click",function(){
    let number = c.innerText;
    if(number!=="0"){
        operador = "n";
        nWindow.innerText = "0";
    }
});

