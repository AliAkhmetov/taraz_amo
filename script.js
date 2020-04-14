function changeColor() {
                var buttonTipe = this;
                    console.log(buttonTipe);
                var buttonClass = buttonTipe.classList;
                    console.log(buttonClass);
var c1;
if (buttonClass.contains("button1")) {
    c1 = 'circle1';
} else {
    c1 = 'circle2';
}

var circle = document.getElementsByClassName(c1);

for(var i in circle){
  var  circleClass = circle[i].classList;
  if(!circleClass)
    continue;
  if (circleClass.contains("light")) {
    circleClass.remove("light");
  } else {
      circleClass.add("light");
  }
}
}
