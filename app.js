function getValue(num){

    var inp = document.getElementById("input");
    inp.value += num;
}
function totalValue(){
    var input = document.getElementById("input");
    input.value = eval(input.value);
}
function allClear() {
    var input = document.getElementById("input");
    input.value = "";
  }
function Clear(){

      var input = document.getElementById("input");
       input.value = input.value.slice(0,-1);
    

}
function sin(){
    input.value = Math.sin(input.value);
  
}
function cos(){
    input.value = Math.cos(input.value);
  
}
function tan(){
    input.value = Math.tan(input.value);
  
}
function log(){
    input.value = Math.log(input.value);
  
}
function power(){
    input.value = Math.pow(input.value,2);
  
}
function Sqrt(){
    input.value = Math.sqrt(input.value,2);
  
}
function pi(){
    input.value =3.145;
  
}
function e(){
    input.value = 2.71828182846;
}
function facto()
{
    var input = document.getElementById("input");
    var num=input.value, f=1;;
    for(var i=1; i<=num; i++){
        f = f*i;
    }
    input.value=f;
}
// function br(){

//     var input = document.getElementById("input");
//     // input.value = input.value;
//     btntext = e.target.innerText;
//     input.value +=btntext;
//     console.log(input.value)

// }