function getParagraph1(){
  var inputs= [];
  for(var i=1;i<=5;i++){
    inputs.push(document.getElementById("input_"+i).value);
  
    .getElementById("showParagraph1").innerHTML= inputs.join(".");
}
function getparagraph2(){
  var inputs= [];
  for(var i=1;i<=10;i++){
    inputs.push(document.getElementById("input_"+i).value);
  }
  
    document.getElementById("showparagraph2").innerHTML= inputs.join(".");
}