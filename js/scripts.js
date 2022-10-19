function changeSquare() {
  var div = document.getElementById(this.id);
    // If image is currently green square, change to red, and vice versa
    if (div.getAttribute("background") == "green") {
        div.setAttribute("background", "red");
        oldStyle  = div.getAttribute("style");
        currentStyle = oldStyle.replace("green", "red");
        div.setAttribute("style", currentStyle);
    } else {
        div.setAttribute("background", "green");
        oldStyle  = div.getAttribute("style");
        currentStyle = oldStyle.replace("red", "green");
        div.setAttribute("style", currentStyle);
    }
};


function printInfo(inputImage) {
  document.getElementById("info").innerHTML = "Info:" + inputImage + "<br /> <br /> <br />";
};

var times = ["         ", "M (3-3:30)", "M (3:30-4)", "M (4-4:30)", "M (4:30-5)", "M (5-5:30)", "M (5:30-6)", "T (2:30-3)", "T (3-3:30)", "T (3:30-4)", "T (4-4:30)", "T (4:30-5)", "T (5-5:30)"];
var names = ["| You |", "Ale", "Bella", "Tina", "Mella", "Ellis", "Max", "Priya", "Henry", "Sophia", "Anand", "Coda", "Daniel"];

//Creates a grid of dimensions width by height
function makeGrid(height, width) {
  // Loop over height and width to create black square objects with
  // buttons in middle
  var count = 0;
  var t = 0;
  for (i = 0; i < height; i++) {

      for (j = 0; j < width; j++) {

          // Outer div is invisible
          var div = document.createElement("div");
          div.className = "square";
          div.id = ("div").concat(i,",", j);
          var innerDiv0 = document.createElement("div");
          innerDiv0.className = "content";
          div.id = ("innerDiv0").concat(i,",", j);
          div.appendChild(innerDiv0);

          // InnerDiv1 & 2 are table structures (used for alignment)
          var innerDiv1 = document.createElement("div");
          innerDiv1.className = "table";
          div.id = ("innerDiv1").concat(i,",", j);
          innerDiv0.appendChild(innerDiv1);
          var innerDiv2 = document.createElement("div");
          innerDiv2.className = "table-cell";
          div.id = ("innerDiv2").concat(i,",", j);
          innerDiv1.appendChild(innerDiv2);

          
          if(count%14==13){
            //Add times to the grid
            var text = document.createElement("p");
            text.className = "name unselectable";
            text.innerHTML = times[t];
            t++;
            innerDiv2.appendChild(text);
            div.setAttribute("style", "width: 75px");
          }
          else if(13*i  + j < 13){  
            //Add names to the grid
            var text = document.createElement("p");
            text.className = "name unselectable";
            text.innerHTML = names[12-(13*i  + j)];
            innerDiv1.setAttribute("style","float: center");
            innerDiv2.appendChild(text);
          }
          else if(count%14==12){
            //Clear and mark your times
            div.setAttribute("background", "red");
            div.setAttribute("style","background-color: red; border-left: 6px solid orange; border-right: 5px solid orange");
            //Only allow you to modify your own collumn
            div.onpointerenter = changeSquare;
          }
          else{
            // Randomly assign a green or red square for starting configuration
            var randNum = (Math.random());
            if(randNum <= 0.35){
              div.setAttribute("background", "green");
              div.setAttribute("style","background-color: green");
            }else{
              div.setAttribute("background", "red");
              div.setAttribute("style","background-color: red");
            }
          }

          // Append the div to the body
          currentStyle  = div.getAttribute("style");
          div.setAttribute("style", currentStyle += "; height: 15px");
          document.body.appendChild(div);

          
          count++;
      }
  }
};
makeGrid(13, 14);
