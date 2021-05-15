var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    css.textContent = body.style.background + ";" ;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var left=["#000000" , "#805B5B ", "#A6A9BF"];
var right=["#FF9999" , "#53016A" , "#0e0a48"];

// var i = Math.floor(Math.random() * 3);

function myFunction(){
    var i = Math.floor(Math.random() * 3);
     body.style.background = "linear-gradient(to right, " + left[i] + " , " + right[i] + ")";
      css.textContent = body.style.background + ";" ;
  }

//   function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//     console.log(color);
//   }
  
  
  
 