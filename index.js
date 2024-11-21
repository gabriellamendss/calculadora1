//programa

const display = document.getElementById("display")
function appendToDisplay(input){
 display.value += input;
}

function clearDisplay(){
 display.value = "";
}

//eval poderia funcionar normalmente se estivesse sozinho, mas para evitar que o usuario nao termine sua equaçao e etc, a gnt vai cercar o codigo com 'try', so pra colocar o nome la de error 
function calculate(){
    try{
      display.value = eval(display.value)
   }
   catch(error){
      display.value = "Error"
   }
}