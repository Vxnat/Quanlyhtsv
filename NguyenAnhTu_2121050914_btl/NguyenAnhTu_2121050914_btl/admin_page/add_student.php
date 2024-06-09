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
    <title>Thêm sinh viên</title>
</head>

<body>
    <div class="wrapper">
        <!-- Sidebar -->
        <?php include('../includes/sidebar_admin.php'); ?>
        <?php require_once '../base_data/ketnoi.php' ?>
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
                            <div class="page-title">Thêm sinh viên
                                <button id="add_student_csv">Thêm sinh viên bằng CSV</button>
                            </div>
                            <div class="page-content">
                                <form method="POST">
                                    <div class="form-add-student">
                                        <div class="box">
                                            <h4>Mã sinh viên</h4>
                                            <input id="msv" type="text">
                                        </div>
                                        <div class="box">
                                            <h4>Họ lót</h4>
                                            <input id="holot" type="text">
                                        </div>
                                        <div class="box">
                                            <h4 for="">Tên</h4>
                                            <input id="ten" type="text"><br>
                                        </div>
                                        <div class="box">
                                            <h4 for="">Mã lớp chuyên ngành</h4>
                                            <select id="mlcn">
                                                <?php
                                                $selectQuery = "SELECT * FROM tbl_lopchuyennghanh";
                                                $result = mysqli_query($conn, $selectQuery);
                                                $output = '';
                                                if ($result->num_rows > 0) {
                                                    while ($row = $result->fetch_assoc()) {
                                                        $output .= '
                                                                <option>' . $row['mlcn'] . '</option>
                                                            ';
                                                    }
                                                }
                                                echo $output;
                                                ?>
                                            </select>
                                        </div>
                                        <div class="box">
                                            <h4 for="">Số di động</h4>
                                            <input id="phone" type="text"><br>
                                        </div>
                                        <div class="box">
                                            <h4 for="">Email</h4>
                                            <input id="email" type="text"><br>
                                        </div>
                                        <div class="box">
                                            <button type="button" id="submit_add_student">Xác nhận</button>
                                        </div>
                                    </div>

                                    <div id="noti"></div>
                                </form>
                            </div>
                            <div class="page-breadcrumb">
                                <ul>
                                    <li><a href="../admin_page/statistics_admin.php"><i class=' bx bx-home'></i> Trang chủ </a></li>
                                    <li>/</li>
                                    <li>Quản lý</li>
                                    <li>/</li>
                                    <li>Quản lý sinh viên</li>
                                    <li>/</li>
                                    <li>Thêm sinh viên</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <?php include('../includes/form_logout.php'); ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="../js/navbar_actions.js"></script>
    <script src="../js/manage_student.js"></script>
</body>

</html>