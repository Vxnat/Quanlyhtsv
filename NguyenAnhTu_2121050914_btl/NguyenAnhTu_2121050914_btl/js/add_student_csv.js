$(document).ready(function () {
  // Chuyển sang trang add từng sinh viên
  $(document).on("click", "#add_student", function () {
    window.location.href = "add_student.php";
  });

  // Tìm kiếm bằng mã sinh viên
  var currentSearchData = null;
  $(document).on("input", "#search-msv", function () {
    var text_search = $(this).val().toLowerCase();
    if (text_search.length > 0) {
      currentSearchData = [];
      validData.map((item) => {
        if (item.msv.startsWith(text_search)) {
          currentSearchData.push(item);
        }
      });
      displayData(currentSearchData, 1, 10);
      displayPagination(currentSearchData.length, 10, 1, currentSearchData);
    } else {
      displayData(validData, 1, 10);
      displayPagination(validData.length, 10, 1, validData);
    }
  });

  function kiemTraTrungLap(arr) {
    const hashTable = {};

    for (let i = 0; i < arr.length; i++) {
      const key = `${arr[i].msv}-${arr[i].mhp}`;

      if (hashTable[key]) {
        return (isSameData = false);
      }

      hashTable[key] = i;
    }

    return isSameData;
  }

  var btnChoose = document.getElementById("file_csv");
  var labelChoose = document.querySelector(".choose");
  var btnJoin = document.querySelector(".join");
  var btnRefresh = document.querySelector(".refresh");
  var selectedFile = null;
  var count = 1;
  var validData = [];

  // Chọn file
  btnChoose.addEventListener("input", function (e) {
    selectedFile = e.target.files[0];
    labelChoose.innerHTML = selectedFile.name;
    e.target.value = "";
  });

  // Đưa dữ liệu từ FILE CSV vào bảngs
  btnJoin.addEventListener("click", function (e) {
    e.preventDefault();
    if (!selectedFile || !selectedFile.name.endsWith(".csv")) {
      $("#noti").html(
        `<i class='bx bx-error-circle'></i>Thêm thất bại: Không phải FILE CSV !`
      );
    } else if (validData.length > 0) {
      $("#noti").html(
        `<i class='bx bx-error-circle'></i>Thêm vào bảng thất bại: Vui lòng làm mới !`
      );
    } else if (selectedFile) {
      $("#noti").html("");
      var reader = new FileReader();

      reader.onload = function (e) {
        var csvData = e.target.result;
        var lines = csvData.split("\n");

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var data = line.split(",");

          if (data.length !== 6) {
            continue;
          } else {
            var msvValue = data[0];
            var holotValue = data[1];
            var tenValue = data[2];
            var mlcnValue = data[3];
            var phoneValue = data[4];
            var emailValue = data[5];

            var rowData = {
              stt: count,
              msv: msvValue,
              holot: holotValue,
              ten: tenValue,
              mlcn: mlcnValue,
              phone: phoneValue,
              email: emailValue,
            };

            validData.push(rowData);
            count++;
          }
        }
        labelChoose.innerHTML = "Lựa chọn FILE CSV";
        selectedFile = "";
        count = 1;
        currentSearchData = validData;
        displayData(validData, 1, 10);
        displayPagination(validData.length, 10, 1, validData);
        code_specialization();
        data_student();
        kiemTraTrungLap(validData);
      };
      reader.readAsText(selectedFile);
    }
  });

  // Hiển thị data
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
          html += "<td>" + item.stt + "</td>";
          html += "<td>" + item.msv + "</td>";
          html += "<td>" + item.holot + "</td>";
          html += "<td>" + item.ten + "</td>";
          html += "<td>" + item.mlcn + "</td>";
          html += "<td>" + item.phone + "</td>";
          html += "<td>" + item.email + "</td>";
          html += `<td>
            <button style="background: none; border: none;" type="button" data-stt_delete="${item.stt}" class="delete">
              <i class='bx bxs-trash-alt'></i>
            </button>
          </td>`;
          html += "</tr>";
        }
      });

      $("#data-student-csv tbody").html(html);
      displayPagination(data.length, itemsPerPage, page, validData);
      eventDelete();
    }
  }

  var crPage = 1;
  // Hiển thị page điều hướng
  function displayPagination(totalItems, itemsPerPage, currentPage, data) {
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
            crPage = pageNumber;
            displayData(data, pageNumber, 10);
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
      crPage = 1;
      displayData(data, 1, 10);
    });
    $("#end_page").click(function () {
      crPage = totalPages;
      displayData(data, totalPages, itemsPerPage);
    });
    $("#prev_page").click(function () {
      if (currentPage > 1) {
        crPage = currentPage - 1;
        displayData(data, currentPage - 1, itemsPerPage);
      }
    });

    $("#next_page").click(function () {
      if (currentPage < totalPages) {
        crPage = currentPage + 1;
        displayData(data, currentPage + 1, itemsPerPage);
      }
    });
  }

  // Làm mới
  btnRefresh.addEventListener("click", function () {
    if (validData.length > 0) {
      count = 1;
      crPage = 1;
      validData = [];
      displayData(validData, 1, 10);
      displayPagination(validData.length, 10, 1, validData);
      $(".pagination").html("");
      $("#noti").html("");
    } else {
      $("#noti").html(
        `<i class='bx bx-error-circle'></i>Làm mới thất bại : Dữ liệu rỗng !`
      );
    }
  });

  // Xóa từng dòng
  function eventDelete() {
    var deleteList = document.querySelectorAll(".delete");
    deleteList.forEach((btnDelete) => {
      $(btnDelete).on("click", function () {
        btnDelete.parentElement.parentElement.remove();
        let sttXoa = $(this).data("stt_delete");
        let newData = validData.filter((item) => item.stt !== sttXoa);
        validData = newData;
        displayData(validData, crPage, 10);
        kiemTraTrungLap(validData);
      });
    });
  }

  // Lấy dữ liệu về điểm học phần
  var list_specialization = [];
  function code_specialization() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { code_specialization: true },
      success: function (data) {
        list_specialization = JSON.parse(data);
      },
    });
  }

  // Lấy dữ liệu về mã sinh viên
  var msv_student = [];
  function data_student() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { data_student: true },
      success: function (data) {
        msv_student = JSON.parse(data);
      },
    });
  }

  // Thực hiện submit dữ liệu
  let isValidData = true;
  let isContainStudent = true;
  let isSameData = true;
  $(document).on("click", "#add_data_student_csv", function () {
    var tbody = document.querySelector("tbody");
    let indexMsv = 1;
    if (tbody.children.length == 0) {
      $("#noti").html(
        `<i class='bx bx-error-circle'></i>Thêm thất bại: Dữ liệu rỗng !`
      );
    } else {
      var rowList = tbody.querySelectorAll("tr");
      rowList.forEach((row) => {
        var cells = row.querySelectorAll("td");
        var msvValue = cells[1].textContent;
        var mlcnValue = cells[4].textContent;
        if (!isSameData) {
          isValidData = false;
          $("#noti").html(
            `<i class='bx bx-error-circle'></i>Cảnh báo : Phát hiện trùng dữ liệu trong bảng !`
          );
        } else if (!list_specialization.includes(mlcnValue)) {
          isValidData = false;
          $("#noti").html(
            `<i class='bx bx-error-circle'></i>Thêm thất bại: Mã lớp chuyên ngành ${mlcnValue} dòng thứ ${indexMsv} không tồn tại !`
          );
        } else if (msv_student.includes(msvValue)) {
          isValidData = false;
          $("#noti").html(
            `<i class='bx bx-error-circle'></i>Thêm thất bại: Sinh viên ${msvValue} dòng thứ ${indexMsv} đã tồn tại !`
          );
        } else {
          isContainStudent = true;
          isValidData = true;
          isSameData = true;
        }
        indexMsv++;
      });
      if (isValidData && isContainStudent && isSameData) {
        $("#noti").html("");
        validData.forEach((item) => {
          var msvValue = item.msv;
          var holotValue = item.holot;
          var tenValue = item.ten;
          var mlcnValue = item.mlcn;
          var phoneValue = item.phone;
          var emailValue = item.email;

          $.ajax({
            url: "../base_data/ajax_action.php",
            method: "POST",
            data: {
              add_student_csv: true,
              msv: msvValue,
              holot: holotValue,
              ten: tenValue,
              mlcn: mlcnValue,
              phone: phoneValue,
              email: emailValue,
            },
            success: function (data) {
              if (data.includes("false")) {
                $("#noti").html(
                  "<i class='bx bx-error-circle'></i>Thêm thất bại : Dữ liệu lỗi !"
                );
              } else {
                $("#noti").css("color", "var(--bs-success)");
                $("#noti").html(
                  "<i class='bx bx-check-circle' ></i> Thêm sinh viên thành công !"
                );
                count = 1;
                setTimeout(function () {
                  window.location.href = "manage_student.php";
                }, 1000);
              }
            },
          });
        });
      }
    }
  });
});
