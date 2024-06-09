$(document).ready(function () {
  function load_data_statistics_student() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_statistics_student: true },
      success: function (data) {
        $("#student").html(data);
      },
    });
  }

  function load_data_statistics_module() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_statistics_module: true },
      success: function (data) {
        $("#module").html(data);
      },
    });
  }

  function load_data_statistics_major() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_statistics_major: true },
      success: function (data) {
        $("#major").html(data);
      },
    });
  }

  function load_data_statistics_goodstudent() {
    $.ajax({
      url: "../base_data/ajax_action.php",
      method: "POST",
      data: { load_data_statistics_goodstudent: true },
      success: function (data) {
        $("#goodstudent").html(data);
      },
    });
  }

  load_data_statistics_student();
  load_data_statistics_module();
  load_data_statistics_major();
  load_data_statistics_goodstudent();
});
