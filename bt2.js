function baitap2() {
  var x = document.getElementById("txtNum").value;
  var n = document.getElementById("txtNumn").value;
  var ketQua = 0;
  for(i = 1; i <= n; i++){
    ketQua += x**i
  }
  var divNoti = document.getElementById("notibt2");
  divNoti.style.display = "block";
  divNoti.innerHTML = ketQua;
}
