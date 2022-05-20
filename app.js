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
function visible(){
  
}