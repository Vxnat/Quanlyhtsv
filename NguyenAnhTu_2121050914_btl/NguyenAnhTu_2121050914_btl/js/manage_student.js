$(document).ready(function () {
  $(document).on("click", "#add_student", function () {
    window.location.href = "add_student.php";
  });

  $(document).on("click", "#add_student_csv", function () {
    window.location.href = "add_student_csv.php";
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

  // HIỆN FORM THÔNG BÁO DELETE
  const back_btn_delete = document.getElementById("back-delete");
  const popup_delete = document.querySelector(".delete-form");
  const popup_success = document.querySelector(".popup-success");
  const wrapper_popup_success = document.querySelector(
    ".wrapper-popup-success"
  );
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

  // ĐƯA ID EDIT STUDENT vào SESSION
  $(document).on("click", "#submit-edit", function () {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { edit_student: true, msv: id_edit },
      success: function (data) {
        window.location.href = data;
      },
    });
  });

  // THÊM SINH VIÊN
  $(document).on("click", "#submit_add_student", function () {
    let msv = $("#msv").val();
    let holot = $("#holot").val();
    let ten = $("#ten").val();
    let mlcn = $("#mlcn").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    if (msv == "" || holot == "" || ten == "" || phone == "" || email == "") {
      $("#noti").html(
        "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Dữ liệu chưa hoàn thiện !"
      );
    } else {
      $.ajax({
        url: "../base_data/ajax_action.php",
        method: "POST",
        data: {
          submit_add_student: true,
          msv: msv,
          holot: holot,
          ten: ten,
          mlcn: mlcn,
          phone: phone,
          email: email,
        },
        success: function (data) {
          if (data.includes("false")) {
            $("#noti").html(
              "<i class='bx bx-error-circle'></i>Thêm thất bại : Mã sinh viên đã tồn tại !"
            );
          } else {
            $("#noti").css("color", "var(--bs-success)");
            $("#noti").html(
              "<i class='bx bx-check-circle' ></i> Thêm sinh viên thành công !"
            );
            setTimeout(function () {
              window.location.href = data;
            }, 1000);
          }
        },
      });
    }
  });

  // SUBMIT DELETE SINH VIÊN
  $(document).on("click", "#submit-delete", function () {
    popup_delete.classList.remove("show-delete");
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { delete_student: true, msv: id_delete },
      success: function (data) {
        if (data.includes("true")) {
          popup_success.classList.add("show-popup-success");
          popup_success.addEventListener("click", function () {
            popup_success.classList.remove("show-popup-success");
            window.location.href = "manage_student.php";
          });
          wrapper_popup_success.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          oke_success.addEventListener("click", () => {
            popup_success.classList.remove("show-popup-success");
            window.location.href = "manage_student.php";
          });
        } else {
          popup_error.classList.add("show-popup-error");
          oke_error.addEventListener("click", () => {
            popup_success.classList.remove("show-popup-error");
          });
        }
      },
    });
  });

  // CẬP NHẬT DỮ LIỆU SINH VIÊN
  $(document).on("click", "#save_data_student", function () {
    let msv = $("#msv").val();
    let holot = $("#holot").val();
    let ten = $("#ten").val();
    let mlcn = $("#mlcn").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    if (holot == "" || ten == "" || phone == "" || email == "") {
      $("#noti").html(
        "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Dữ liệu chưa hoàn thiện !"
      );
    } else {
      $.ajax({
        url: "../base_data/ajax_action.php",
        method: "POST",
        data: {
          change_data_student: true,
          msv: msv,
          holot: holot,
          ten: ten,
          mlcn: mlcn,
          phone: phone,
          email: email,
        },
        success: function (data) {
          if (data.includes("false")) {
            $("#noti").html(
              "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Hãy kiểm tra lại dữ liệu !"
            );
          } else {
            $("#noti").css("color", "var(--bs-success)");
            $("#noti").html(
              "<i class='bx bx-check-circle' ></i> Cập nhật sinh viên thành công !"
            );
            setTimeout(function () {
              window.location.href = data;
            }, 1000);
          }
        },
      });
    }
  });

  // Tìm kiếm sinh viên
  var newData = null;
  var currentSearchData = null;

  $(document).on("keyup", "#search-msv", function () {
    let msv_value = $("#search-msv").val();
    if (msv_value.length > 0) {
      $("#noti").html("");
      currentSearchData = [];
      newData.map((item) => {
        if (item.msv.startsWith(msv_value)) {
          currentSearchData.push(item);
        }
      });
      displayData(currentSearchData, 1, $(".itemsPerPage select").val());
      displayPagination(
        currentSearchData.length,
        $(".itemsPerPage select").val(),
        1,
        currentSearchData
      );
    } else {
      load_data_student(crPage, $(".itemsPerPage select").val(), null);
      currentSearchData = null;
    }
  });

  // LOAD DỮ LIỆU SINH VIÊN VÀO BẢNG
  function load_data_student(page, perPage, data_search) {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_student: true },
      success: function (data) {
        let validData = JSON.parse(data);
        newData = validData;
        displayData(data_search ? data_search : validData, page, perPage);

        displayPagination(
          data_search ? data_search.length : validData.length,
          perPage,
          page,
          validData
        );
        crPage = page;
      },
    });
  }
  load_data_student(1, 10, newData);

  function displayData(data, page, itemsPerPage) {
    if (Array.isArray(data)) {
      let perPage = itemsPerPage;
      let currentPage = page;
      let start = (currentPage - 1) * perPage;
      let end = start + perPage;

      var html = "";
      data.map((item, index) => {
        if (index >= start && index < end) {
          html += "<tr>";
          html += "<td>" + item.count + "</td>";
          html += "<td>" + item.msv + "</td>";
          html += "<td>" + item.holot + "</td>";
          html += "<td>" + item.ten + "</td>";
          html += "<td>" + item.mlcn + "</td>";
          html += "<td>" + item.sodidong + "</td>";
          html += "<td>" + item.email + "</td>";
          html += '<td class="table-actions">';
          html +=
            '<button type="button" class="edit" data-id_edit="' +
            item.msv +
            "\"><i class='bx bx-edit'></i></button>";
          html +=
            '<button type="button" class="delete" data-id_delete="' +
            item.msv +
            "\"><i class='bx bx-trash'></i></button>";
          html += "</td>";
          html += "</tr>";
        }
      });

      $("tbody").html(html);
    }
  }

  function displayPagination(totalItems, itemsPerPage, currentPage, data) {
    data = currentSearchData ? currentSearchData : data;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = $("#pagination");
    pagination.html("");

    // Trang đầu tiên
    if (currentPage > 3) {
      var li = $(
        '<li class="page-item" id="first_page"><a class="page-link">First</a></li>'
      );
      pagination.append(li);
    }
    // Trang phía trước
    if (currentPage > 2) {
      pagination.append(
        '<li class="page-item"><a class="page-link" id="prev_page" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
      );
    }
    // Load các trang gần nhau
    for (let i = 1; i <= totalPages; i++) {
      var li = $(
        '<li class="page-item"><a class="page-link">' + i + "</a></li>"
      );
      if (i == currentPage) {
        li = $(
          '<li class="page-item"><a class="page-link" style="background-color: #000; color: #fff">' +
            i +
            "</a></li>"
        );
      }
      li.click(
        (function (pageNumber) {
          return function () {
            load_data_student(pageNumber, itemsPerPage, data);
          };
        })(i)
      );
      // Hiển thị những trang gần kề
      if (i > currentPage - 3 && i < currentPage + 3) {
        pagination.append(li);
      }
    }

    // Trang tiếp theo
    if (currentPage < totalPages - 1) {
      // Next Arrow
      pagination.append(
        '<li class="page-item"><a class="page-link" id="next_page" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
      );
    }
    // Trang cuối cùng
    if (currentPage < totalPages - 3) {
      var li = $(
        '<li class="page-item" id="end_page"><a class="page-link">Last</a></li>'
      );
      pagination.append(li);
    }

    // Bắt sự kiện nhấn page
    $("#first_page").click(function () {
      load_data_student(1, itemsPerPage, data);
    });
    $("#end_page").click(function () {
      load_data_student(totalPages, itemsPerPage, data);
    });
    $("#prev_page").click(function () {
      if (currentPage > 1) {
        load_data_student(currentPage - 1, itemsPerPage, data);
      }
    });

    $("#next_page").click(function () {
      if (currentPage < totalPages) {
        load_data_student(currentPage + 1, itemsPerPage, data);
      }
    });
  }
  var crPage = 1;
  $(document).on("change", ".itemsPerPage select", function () {
    crPage = 1;
    load_data_student(crPage, $(this).val(), currentSearchData);
  });

  // LOAD DỮ LIỆU SINH VIÊN CẦN SỬA VÀO FORM
  function load_data_edit_student() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: {
        load_data_edit_student: true,
      },
      success: function (data) {
        $("#load-data-edit-student").html(data);
      },
    });
  }

  load_data_edit_student();
});
