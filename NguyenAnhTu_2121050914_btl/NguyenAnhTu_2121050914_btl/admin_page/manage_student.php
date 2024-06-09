<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/ae360af17e.js" crossorigin="anonymous"></script>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/form_popup.css">
    <title>Quản lý sinh viên</title>
</head>

<body>
    <div class="wrapper">
        <!-- Sidebar -->
        <?php include('../includes/sidebar_admin.php') ?>
        <!-- Main Component -->
        <div class="main">
            <nav class="navbar navbar-expand px-3 border-bottom">
                <!-- Actions -->
                <div class="navbar-actions">
                    <h3>HỆ THỐNG QUẢN LÝ HỌC TẬP SINH VIÊN</h3>
                    <button class="btn" type="button" data-bs-theme="dark">
                        <i class="bx bx-menu"></i>
                    </button>
                    <button id="toggle-user" class="btn" type="button" data-bs-theme="dark">
                        <span class="bx bxs-user"></span>
                    </button>
                    <button id="full-screen" class="btn" type="button" data-bs-theme="dark">
                        <i class="bx bx-fullscreen"></i>
                    </button>
                </div>
                <!-- End -->

                <!-- Login -->
                <div class="navbar-login">
                    <?= $logined ?>
                </div>
                <!-- End -->
            </nav>
            <main class="content px-3 py-2">
                <div class="container-fluid">
                    <div class="mb-3">
                        <div class="content-wrapper">
                            <div class="page-title"><span>Quản lý sinh viên</span>
                                <button id="add_student">Thêm sinh viên</button>
                            </div>
                            <div class="page-content">
                                <div class="handle-actions">
                                    <div id="search-box">
                                        <input id="search-msv" type="text" placeholder="Tìm kiếm ...">
                                    </div>
                                    <div class="itemsPerPage">
                                        Hiển thị
                                        <select>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                        kết quả trên một trang
                                    </div>
                                </div>

                                <div id="noti" style="margin-top: 10px;"></div>
                                <form method="POST">
                                    <div id="load-data-student">
                                        <table id="data_student">
                                            <thead>
                                                <tr>
                                                    <th>Số thứ tự</th>
                                                    <th>Mã sinh viên</th>
                                                    <th>Họ lót</th>
                                                    <th>Tên</th>
                                                    <th>Mã lớp chuyên ngành</th>
                                                    <th>Số di động</th>
                                                    <th>Email</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                            <ul class="pagination" id="pagination"></ul>
                            <div class="page-breadcrumb">
                                <ul>
                                    <li><a href="../admin_page/statistics_admin.php"><i class='bx bx-home'></i> Trang chủ </a></li>
                                    <li>/</li>
                                    <li>Quản lý</li>
                                    <li>/</li>
                                    <li>Quản lý sinh viên</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <?php include('../includes/form_logout.php') ?>
    <?php include('../includes/form_edit.php') ?>
    <?php include('../includes/form_delete.php') ?>
    <?php include('../includes/form_success.php') ?>
    <?php include('../includes/form_error.php') ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="../js/navbar_actions.js"></script>
    <script src="../js/manage_student.js"></script>
</body>

</html>