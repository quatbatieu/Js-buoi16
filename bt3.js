function baitap3() {
    var n = document.getElementById('txtNumn3').value;
    var ketQua = 1; 
    for(i = 1;i <= n; i++){
        ketQua = ketQua*i;
    }
    var divNoti = document.getElementById("notibt3");
    divNoti.style.display = "block";
    divNoti.innerHTML = ketQua;
  }