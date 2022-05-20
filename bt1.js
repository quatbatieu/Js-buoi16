function baitap1(){
  var n = 0;
  var sum = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
  var divNoti = document.getElementById("notibt1");
  divNoti.style.display = "block";
  divNoti.innerHTML = n;
}