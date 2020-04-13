function changeColor() {
  var room1 = document.getElementById('room1')
  var room2 = document.getElementById('room2')
  var flag = true;

  if (flag == true) {
    room1.classList.add("light");
    var colorArray = document.getElementsByClassName ("room1")
    flag = false;
    }
    else {
      room2.classList.add("light")
      room1.classList.remove("light")
        flag = true;
    }
  }
