function baitap4() {
    var divNoti = document.getElementById("notibt4");
    for (var i = 1; i <= 11; i++) {
      divNoti.innerHTML += "<div>" + "</div>";
    }
    var divFury = divNoti.getElementsByTagName("div");
    var soChan = " ";
    var soLe = " ";
    for (var j = 1; j < divFury.length; j++) {
      if (j % 2 === 0) {
          soChan = j + " "
        divFury[j].innerText = `div chẵn ${soChan}` ;
        divFury[j].style.background = "red";
      } else {
          soLe = j + " "
        divFury[j].innerHTML = `div lẻ ${soLe} `;
        divFury[j].style.background = "blue";
      }
    }
  }