
function changeSquare() {
  var image = document.getElementById(this.id);
  // If image is currently green square, change to red, and vice versa
  if (image.src.match("/images/xMark.png")) {
      image.src = "/images/check.png";
  } else {
      image.src = "/images/xMark.png";
  }
};


function printInfo(inputImage) {
  document.getElementById("info").innerHTML = "Info:" + inputImage + "<br /> <br /> <br />";
};

var names = ["~~ You ~~", "Alejandro", "Bella", "Tina", "Mella", "Ellis", "Max", "Priyanka", "Henry", "Sophia", "Anand", "Barney", "Daniel"];
//Creates a grid of dimensions width by height
function makeGrid(height, width) {
  // Loop over height and width to create black square objects with
  // buttons in middle
  var count = 0;
  var person = 0;
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

          
          var image = document.createElement("img");
          if(count%14==13){
            //Add names to the grid
            var text = document.createElement("p");
            text.className = "name";
            text.innerHTML = names[person];
            person++;
            innerDiv2.appendChild(text);
            document.body.appendChild(div);
          }else if(13*i  + j < 14){  
            //clear the first row
            image.src = "/images/xMark.png";
            image.className = "rs";
            image.id = ("image").concat(i,",", j);
            innerDiv2.appendChild(image);
            document.body.appendChild(div);
          }
          else{
            // Randomly assign a green or red square for starting configuration
            var randNum = Math.round(Math.random());
            if(randNum == 0){
              image.src = "/images/xMark.png";
            }else{
              image.src = "/images/check.png";
            }
            image.className = "rs";
            image.id = ("image").concat(i,",", j);
            innerDiv2.appendChild(image);
            document.body.appendChild(div);
          }

          // Add onclick feature
          image.onclick = changeSquare;
          count++;
      }
  }
};
makeGrid(13, 14);
