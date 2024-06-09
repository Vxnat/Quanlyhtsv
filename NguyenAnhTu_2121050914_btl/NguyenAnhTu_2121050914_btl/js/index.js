const toggler = document.querySelector(".btn");
const toggle_user = document.getElementById("toggle-user");
const full_screen = document.getElementById("full-screen");
const loginBtn = document.getElementById("login");
const iconBack = document.querySelector(".icon-back");
const login_form = document.querySelector(".login-form");
const wrapper_login = document.querySelector(".wrapper-login");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});
toggle_user.addEventListener("click", () => {
  document.querySelector(".sidebar-logo").classList.toggle("hide-logo");
});
full_screen.addEventListener("click", () => {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
});
loginBtn.addEventListener("click", function () {
  login_form.classList.add("show-login");
  document.getElementById("username").focus();
});
login_form.addEventListener("click", () => {
  document.getElementById("noti").innerHTML = "";
  login_form.classList.remove("show-login");
});
iconBack.addEventListener("click", () => {
  document.getElementById("noti").innerHTML = "";
  login_form.classList.remove("show-login");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("noti").innerHTML = "";
    login_form.classList.remove("show-login");
  }
});

wrapper_login.addEventListener("click", (e) => {
  e.stopPropagation();
});

$(document).ready(function () {
  $("#username, #password").keypress(function (e) {
    if (e.which === 13) {
      $("#btnlogin").click();
    }
  });

  var list_user = [];
  function data_user() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { data_user: true },
      success: function (data) {
        list_user = JSON.parse(data);
      },
    });
  }

  data_user();

  $("#btnlogin").on("click", function () {
    let noti = $(".wrapper-login form #noti");
    let username = $("#username").val();
    let password = $("#password").val();
    if (username === "" || password === "") {
      noti.html("Vui lòng nhập đầy đủ thông tin !");
    } else {
      list_user.map((item) => {
        if (item.username === username && item.password !== password) {
          noti.html("Đăng nhập thất bại : Mật khẩu không chính xác !");
        } else if (item.username !== username) {
          noti.html("Đăng nhập thất bại : Tài khoản không chính xác !");
        } else if (item.username === username && item.password === password) {
          $.ajax({
            url: "../base_data/ajax_action.php",
            method: "POST",
            data: { login: true, username: username, password: password },
            success: function (data) {
              if (data.includes("false")) {
                noti.html("Đăng nhập thất bại : Có lỗi xảy ra !");
              } else {
                window.location.href = data;
              }
            },
          });
        }
      });
    }
  });
});
