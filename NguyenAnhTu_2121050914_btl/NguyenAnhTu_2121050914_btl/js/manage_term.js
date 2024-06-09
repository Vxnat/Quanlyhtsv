$(document).ready(function () {
  $(document).on("click", "#add_term", function () {
    window.location.href = "add_term.php";
  });

  // HIEN FORM THONG BAO EDIT
  const back_btn = document.getElementById("back-edit");
  const popup_edit = document.querySelector(".edit-form");
  var id_edit;
  $(document).on("click", ".edit", function () {
    id_edit = $(this).data("id_edit");
    popup_edit.classList.add("show-edit");
    back_btn.addEventListener("click", function () {
      popup_edit.classList.remove("show-edit");
    });
  });

  // ĐƯA ID EDIT TERM vào SESSION
  $(document).on("click", "#submit-edit", function () {
    popup_edit.classList.remove("show-edit-term");
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { edit_term: true, mhp: id_edit },
      success: function (data) {
        window.location.href = data;
      },
    });
  });

  // Submit thêm học phần
  $(document).on("click", "#submit_add_term", function () {
    let mhp = $("#mhp").val();
    let thp = $("#thp").val();
    let tinchi = $("#tinchi").val();
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { submit_add_term: true, mhp: mhp, thp: thp, tinchi: tinchi },
      success: function (data) {
        if (data.includes("false")) {
          $("#noti").html(
            "<i class='bx bx-error-circle'></i>Thêm thất bại : Hãy kiểm tra lại dữ liệu !"
          );
        } else {
          $("#noti").css("color", "var(--bs-success)");
          $("#noti").html(
            "<i class='bx bx-check-circle' ></i> Thêm học phần thành công !"
          );
          setTimeout(function () {
            window.location.href = data;
          }, 1000);
        }
      },
    });
  });

  // HIỆN FORM THÔNG BÁO DELETE
  const back_btn_delete = document.getElementById("back-delete");
  const popup_delete = document.querySelector(".delete-form");
  const popup_success = document.querySelector(".popup-success");
  const oke_success = document.getElementById("success");
  const popup_error = document.querySelector(".popup-error");
  const oke_error = document.getElementById("error");
  var id_delete;
  $(document).on("click", ".delete", function () {
    id_delete = $(this).data("id_delete");
    popup_delete.classList.add("show-delete");
    back_btn_delete.addEventListener("click", function () {
      popup_delete.classList.remove("show-delete");
    });
  });

  // XÓA HỌC PHẦN
  $(document).on("click", "#submit-delete", function () {
    popup_delete.classList.remove("show-delete");
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { delete_term: true, mhp: id_delete },
      success: function (data) {
        if (data.includes("true")) {
          popup_success.classList.add("show-popup-success");
          oke_success.addEventListener("click", () => {
            popup_success.classList.remove("show-popup-success");
          });
          load_data_term();
        } else {
          popup_error.classList.add("show-popup-error");
          oke_error.addEventListener("click", () => {
            popup_success.classList.remove("show-popup-error");
          });
        }
      },
    });
  });

  // CẬP NHẬT DỮ LIỆU HỌC PHẦN
  $(document).on("click", "#save_data_term", function () {
    let mhp = $("#mhp").val();
    let thp = $("#thp").val();
    let tinchi = $("#tinchi").val();
    if (thp == "" || tinchi == "") {
      $("#noti").html(
        "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Dữ liệu chưa hoàn thiện !"
      );
    } else {
      $.ajax({
        url: "../base_data/ajax_action.php",
        method: "POST",
        data: { change_data_term: true, mhp: mhp, thp: thp, tinchi: tinchi },
        success: function (data) {
          if (data.includes("false")) {
            $("#noti").html(
              "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Hãy kiểm tra lại dữ liệu !"
            );
          } else {
            $("#noti").css("color", "var(--bs-success)");
            $("#noti").html(
              "<i class='bx bx-check-circle' ></i> Cập nhật học phần thành công !"
            );
            setTimeout(function () {
              window.location.href = data;
            }, 1000);
          }
        },
      });
    }
  });

  // LOAD DỮ LIỆU HỌC PHẦN VÀO BẢNG
  function load_data_term() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_term: true },
      success: function (data) {
        $("#load-data-term").html(data);
      },
    });
  }

  load_data_term();

  // LOAD DỮ LIỆU HỌC PHẦN CẦN SỬA VÀO FORM
  function load_data_edit_term() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: {
        load_data_edit_term: true,
      },
      success: function (data) {
        $("#load-data-edit-term").html(data);
      },
    });
  }

  load_data_edit_term();
});
