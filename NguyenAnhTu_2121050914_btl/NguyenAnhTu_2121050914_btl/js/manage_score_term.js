$(document).ready(function () {
  // TÌM KIẾM SINH VIÊN
  var newData = null;
  var currentSearchData = null;
  $(document).on("input", "#search-msv", function () {
    let msv_value = $(this).val();
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
      load_data_score_term(crPage, $(".itemsPerPage select").val(), null);
      currentSearchData = null;
    }
  });

  // LOAD DATA ĐIỂM HỌC PHẦN
  function load_data_score_term(page, perPage, data_search) {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_score_term: true },
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
      },
    });
  }

  load_data_score_term(1, 10, newData);

  function displayData(data, page, itemsPerPage) {
    if (Array.isArray(data)) {
      let perPage = itemsPerPage;
      let currentPage = page;
      let start = (currentPage - 1) * perPage;
      let end = start + perPage;

      var html = "";
      data.forEach((item, index) => {
        if (index >= start && index < end) {
          html += "<tr>";
          html += "<td>" + item.count + "</td>";
          html += "<td>" + item.msv + "</td>";
          html += "<td>" + item.tensinhvien + "</td>";
          html += "<td>" + item.mhp + "</td>";
          html += "<td>" + item.thp + "</td>";
          html += "<td>" + item.a + "</td>";
          html += "<td>" + item.b + "</td>";
          html += "<td>" + item.c + "</td>";
          html += "<td>" + item.dhp.toFixed(2) + "</td>";
          html += "<td class='table-actions'>";
          html +=
            "<button type='button' class='edit' data-id_edit='" +
            item.msv +
            "' data-id_mhp='" +
            item.mhp +
            "'><i class='bx bx-edit'></i></button>";
          html +=
            "<button type='button' class='delete' data-id_delete='" +
            item.msv +
            "' data-id_mhp='" +
            item.mhp +
            "'><i class='bx bx-trash'></i></button>";
          html += "</td>";
          html += "</tr>";
        }
      });

      $("#data_score_term tbody").html(html);
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
            load_data_score_term(pageNumber, itemsPerPage, data);
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
      load_data_score_term(1, itemsPerPage, data);
    });
    $("#end_page").click(function () {
      load_data_score_term(totalPages, itemsPerPage, data);
    });
    $("#prev_page").click(function () {
      if (currentPage > 1) {
        load_data_score_term(currentPage - 1, itemsPerPage, data);
      }
    });

    $("#next_page").click(function () {
      if (currentPage < totalPages) {
        load_data_score_term(currentPage + 1, itemsPerPage, data);
      }
    });
  }

  var crPage = 1;
  $(document).on("change", ".itemsPerPage select", function () {
    crPage = 1;
    load_data_score_term(
      crPage,
      $(this).val(),
      currentSearchData ? currentSearchData : newData
    );
  });

  // CHUYỂN HƯỚNG ĐẾN TRANG THÊM HỌC PHẦN
  $(document).on("click", "#add_term", function () {
    window.location.href = "add_score_term.php";
  });
  $(document).on("click", "#add_score_term_csv", function () {
    window.location.href = "add_score_term_csv.php";
  });

  // SUBMIT THÊM ĐIỂM HỌC PHẦN
  $(document).on("click", "#add_data_score_term", function () {
    let msv = $("#option_msv").val();
    let mhp = $("#option_mhp").val();
    let diemA = $("#diemA").val();
    let diemB = $("#diemB").val();
    let diemC = $("#diemC").val();
    if (diemA == "" || diemB == "" || diemC == "") {
      $("#noti").html(
        "<i class='bx bx-error-circle'></i>Thêm thất bại : Dữ liệu không hợp lệ !"
      );
    } else {
      $.ajax({
        url: "../base_data/ajax_action.php",
        method: "POST",
        data: {
          add_score_term: true,
          msv: msv,
          mhp: mhp,
          diemA: diemA,
          diemB: diemB,
          diemC: diemC,
        },
        success: function (data) {
          if (data.includes("false")) {
            $("#noti").html(
              "<i class='bx bx-error-circle'></i>Thêm thất bại : Sinh viên đã tồn tại điểm !"
            );
          } else {
            $("#noti").css("color", "var(--bs-success)");
            $("#noti").html(
              "<i class='bx bx-check-circle' ></i> Thêm điểm sinh viên thành công !"
            );
            setTimeout(function () {
              window.location.href = data;
            }, 1000);
          }
        },
      });
      s;
    }
  });

  // HIỆN FORM THÔNG BÁO EDIT
  const back_btn = document.getElementById("back-edit");
  const popup_edit = document.querySelector(".edit-form");
  var id_edit;
  var id_mhp;
  $(document).on("click", ".edit", function () {
    id_edit = $(this).data("id_edit");
    id_mhp = $(this).data("id_mhp");
    popup_edit.classList.add("show-edit");
    back_btn.addEventListener("click", function () {
      popup_edit.classList.remove("show-edit");
    });
  });

  // ĐƯA ID EDIT HOC PHAN VA MHP vào SESSION
  $(document).on("click", "#submit-edit", function () {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { edit_score_mhp: true, msv: id_edit, mhp: id_mhp },
      success: function (data) {
        window.location.href = data;
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
  var id_mhp;
  $(document).on("click", ".delete", function () {
    id_delete = $(this).data("id_delete");
    id_mhp = $(this).data("id_mhp");
    popup_delete.classList.add("show-delete");
    back_btn_delete.addEventListener("click", function () {
      popup_delete.classList.remove("show-delete");
    });
  });

  // SUBMIT DELETE HOC PHAN
  $(document).on("click", "#submit-delete", function () {
    popup_delete.classList.remove("show-delete");
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { delete_score_term: true, msv: id_delete, mhp: id_mhp },
      success: function (data) {
        if (data.includes("true")) {
          popup_success.classList.add("show-popup-success");
          oke_success.addEventListener("click", () => {
            popup_success.classList.remove("show-popup-success");
          });
          load_data_score_term(crPage, $(".itemsPerPage select").val(), null);
        } else {
          popup_error.classList.add("show-popup-error");
          oke_error.addEventListener("click", () => {
            popup_success.classList.remove("show-popup-error");
          });
        }
      },
    });
  });

  // SUBMIT CẬP NHẬT DỮ LIỆU ĐIỂM HỌC PHẦN
  $(document).on("click", "#save_data_score_temp", function () {
    let msv = $("#msv").val();
    let mhp = $("#mhp").val();
    let diemA = $("#diemA").val();
    let diemB = $("#diemB").val();
    let diemC = $("#diemC").val();
    if (diemA == "" || diemB == "" || diemC == "") {
      $("#noti").html(
        "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Dữ liệu chưa hoàn thiện !"
      );
    } else {
      $.ajax({
        url: "../base_data/ajax_action.php",
        method: "POST",
        data: {
          change_data_score_term: true,
          msv: msv,
          mhp: mhp,
          diemA: diemA,
          diemB: diemB,
          diemC: diemC,
        },
        success: function (data) {
          if (data.includes("false")) {
            $("#noti").html(
              "<i class='bx bx-error-circle'></i>Thay đổi thất bại : Hãy kiểm tra lại dữ liệu !"
            );
          } else {
            $("#noti").css("color", "var(--bs-success)");
            $("#noti").html(
              "<i class='bx bx-check-circle' ></i> Cập nhật điểm thành công !"
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
  $(document).on("click", "#search-btn", function () {
    let msv_value = $("#search-msv").val();
    if (msv_value.length == 10) {
      $("#noti").html("");
      let list = document.querySelectorAll("tbody tr");
      list.forEach((tr) => {
        let msv = tr.querySelector("td:nth-child(2)");
        if (msv.innerHTML == msv_value) {
          tr.style.display = "table-row";
        } else {
          tr.style.display = "none";
        }
      });
    } else {
      $("#noti").html("Mã sinh viên phải gồm 10 kí tự");
    }
  });

  $(document).on("input", "#search-msv", function () {
    let msv_value = $(this).val();
    if (msv_value.length == 0) {
      let list = document.querySelectorAll("tbody tr");
      list.forEach((tr) => {
        tr.style.display = "table-row";
      });
    }
  });

  // LOAD DỮ LIỆU SINH VIÊN CẦN SỬA VÀO FORM
  function load_data_edit_score_term() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: {
        load_data_edit_score_term: true,
      },
      success: function (data) {
        $("#load-data-edit-score-term").html(data);
      },
    });
  }

  load_data_edit_score_term();

  // Edit diem sinh vien

  // Handle select option
  $("#option_mhp").on("change", function () {
    let mhp = $(this).val();
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { change_option_term: true, mhp: mhp },
      success: function (data) {
        $("#tenhocphan").val(data);
      },
    });
  });

  $("#option_msv").on("change", function () {
    let msv = $(this).val();
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { change_option_msv: true, msv: msv },
      success: function (data) {
        $("#tensinhvien").val(data);
      },
    });
  });
});
