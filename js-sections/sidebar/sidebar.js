collapse = true;

// function openNav() {
//     document.getElementById("side-bar").style.width = "250px";
    
// }
  
//   function closeNav() {
//     document.getElementById("side-bar").style.width = "0";
    
// }

function togleNav() {
  collapse = !collapse;
  if (collapse)
  {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("open-button").style.marginLeft = "10px";
  }
  else
  {
    document.getElementById("side-bar").style.width = "270px";
    document.getElementById("open-button").style.marginLeft = "280px";
  }
}