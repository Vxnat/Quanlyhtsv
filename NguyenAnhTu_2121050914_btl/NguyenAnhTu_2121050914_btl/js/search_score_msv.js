$(document).ready(function () {
  // TRA CỨU KQ HỌC TẬP MSV
  $(document).on("keyup", "#search-msv", function () {
    let msv_value = $(this).val();
    if (msv_value.length == 10) {
      $.ajax({
        url: "../base_data/ajax_action.php",
        method: "POST",
        data: { search_score_msv: true, msv: msv_value },
        success: function (data) {
          $("#load-data-search").html(data);
        },
      });
    } else {
      $("#load-data-search").html("");
    }
  });

  // TRA CỨU KQ HỌC TẬP MÃ LỚP CHUYÊN NGÀNH
  var newData = null;
  $(document).on("change", "#search-box select", function () {
    crPage = 1;
    load_data_search_term(crPage, $(".itemsPerPage select").val(), null);
  });
  function load_data_search_term(page, perPage, data_search) {
    let mlcn_value = $("#search-box select").val();
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: {
        search_score_msv_major: true,
        mlcn: mlcn_value,
      },
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
          html +=
            "<td style='width:150px'>" + item.holot + " " + item.ten + "</td>";
          html += "<td style='width:150px'>" + item.mlcn + "</td>";
          html += "<td style='width:250px'>" + item.thp + "</td>";
          html += "<td>" + item.a + "</td>";
          html += "<td>" + item.b + "</td>";
          html += "<td>" + item.c + "</td>";
          html += "<td>" + item.dhp.toFixed(2) + "</td>";
          html += "</tr>";
        }
      });

      $("tbody").html(html);
    }
  }

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
            load_data_search_term(pageNumber, itemsPerPage, data);
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
    if (currentPage < totalPages - 2) {
      var li = $(
        '<li class="page-item" id="end_page"><a class="page-link">Last</a></li>'
      );
      pagination.append(li);
    }

    // Bắt sự kiện nhấn page
    $("#first_page").click(function () {
      load_data_search_term(1, itemsPerPage, data);
    });
    $("#end_page").click(function () {
      load_data_search_term(totalPages, itemsPerPage, data);
    });
    $("#prev_page").click(function () {
      if (currentPage > 1) {
        load_data_search_term(currentPage - 1, itemsPerPage, data);
      }
    });

    $("#next_page").click(function () {
      if (currentPage < totalPages) {
        load_data_search_term(currentPage + 1, itemsPerPage, data);
      }
    });
  }
  var crPage = 1;
  $(document).on("change", ".itemsPerPage select", function () {
    crPage = 1;
    load_data_search_term(crPage, $(this).val(), newData);
  });
});
