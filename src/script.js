window.addEventListener("resize", checkForMissingMenu);
var x = document.getElementById("navBar");
var y = document.getElementsByClassName("navOpt");

function checkForMissingMenu(){
  if(window.innerWidth >= 700 && x.style.display === "none"){
    x.style.display = "block";
      Array.from(y).forEach(element => {
        element.style.display = "block";
      });
  }
  if(window.innerWidth == 700 && x.style.display === "block"){
    console.log("Changing")
    x.style.display = "none";
      Array.from(y).forEach(element => {
        element.style.display = "none";
      });
  }
}

function myFunction() {
    console.log(y)
    if (x.style.display === "block") {
      x.style.display = "none";
      Array.from(y).forEach(element => {
        element.style.display = "none";
      });
    } else {
      x.style.display = "block";
      Array.from(y).forEach(element => {
        element.style.display = "block";
      });
    }
  } 
