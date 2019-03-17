function outputname() {
  var x,y,name;
  x=document.getElementById("form1");
  y=x.elements["name"].value;
  document.getElementById("demo").innerHTML=y;
}