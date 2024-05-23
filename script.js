function displayvalue(value){
    document.getElementById("display").value=document.getElementById("display").value+value;
}
function cleardisplay(){
    document.getElementById("display").value ="";
}
function calculate(){
     var userinput=document.getElementById("display").value;
     var result=eval(userinput);
     document.getElementById("display").value=result;
}