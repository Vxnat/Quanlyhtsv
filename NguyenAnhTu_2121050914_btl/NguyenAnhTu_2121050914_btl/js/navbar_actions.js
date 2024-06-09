const toggler = document.querySelector(".btn");
const toggle_user = document.getElementById("toggle-user");
const full_screen = document.getElementById("full-screen");
const logout_btn = document.getElementById("logout");
const form_logout = document.querySelector(".logout-form");
const back_btn = document.getElementById("back");
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
logout_btn.addEventListener("click", function () {
  form_logout.classList.add("show-logout");
});
back_btn.addEventListener("click", function () {
  form_logout.classList.remove("show-logout");
});

$(document).ready(function () {
  // ĐĂNG XUẤT
  $("#submit_logout").on("click", function () {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { logout: true },
      success: function (data) {
        window.location.href = data;
      },
    });
  });
});
