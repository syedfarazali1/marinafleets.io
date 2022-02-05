function hidea() {
    document.getElementById("a").style.display = "none"
    document.getElementById("a1").style.display = "inline-block"
}
function showa() {
    document.getElementById("a1").style.display = "none"
    document.getElementById("a").style.display = "inline-block"
}



function hideb() {
    document.getElementById("b").style.display = "none"
    document.getElementById("b1").style.display = "inline-block"
}
function showb() {
    document.getElementById("b1").style.display = "none"
    document.getElementById("b").style.display = "inline-block"
}



function hidec() {
    document.getElementById("c").style.display = "none"
    document.getElementById("c1").style.display = "inline-block"
}
function showc() {
    document.getElementById("c1").style.display = "none"
    document.getElementById("c").style.display = "inline-block"
}



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function fun1() {
  document.getElementById("btn-1").style.display = "none"
  document.getElementById("pra-2").style.display = "inline-block"
  document.getElementById("btn-2").style.display = "inline-block"
}
function fun2() {
  document.getElementById("btn-2").style.display = "none"
  document.getElementById("pra-2").style.display = "none"
  document.getElementById("btn-1").style.display = "inline-block"
}






