<?php
session_start();
$username = '';
$password = '';
if (isset($_SESSION['user']) && ($_SESSION['user']) != '') {
    $username = $_SESSION['user'];
}

if (isset($_SESSION['pass']) && ($_SESSION['pass']) != '') {
    $password = $_SESSION['pass'];
}
if ($username != '') {
    $logined = "<button id=\"logout\"><i class=\"bx bx-log-out\"></i><strong>Đăng xuất</strong></button>";
} else {
    header('location: ../home/index.php');
}

?>
<aside id="sidebar">
    <div class="h-100">
        <div class="sidebar-logo">
            <img src="../img/admin.png" alt="">
            <span>Đào tạo</span>
        </div>
        <!-- Sidebar Navigation -->
        <ul class="sidebar-nav">
            <li class="sidebar-header">Thống kê</li>
            <li class="sidebar-item">
                <a href="statistics_admin.php" class="sidebar-link">
                    <i class="bx bx-bar-chart-alt-2"></i>
                    Thống kê
                </a>
            </li>
            <li class="sidebar-header">Quản lý</li>
            <li class="sidebar-item">
                <a href="manage_student.php" class="sidebar-link">
                    <i class='bx bxs-user-detail'></i>
                    Quản lý sinh viên
                </a>
            </li>
            <li class="sidebar-item">
                <a href="manage_term.php" class="sidebar-link">
                    <i class='bx bxs-user-detail'></i>
                    Quản lý học phần
                </a>
            </li>
            <li class="sidebar-item">
                <a href="manage_score_term.php" class="sidebar-link">
                    <i class='bx bxs-user-detail'></i>
                    Quản lý điểm học phần
                </a>
            </li>
        </ul>
    </div>
</aside>