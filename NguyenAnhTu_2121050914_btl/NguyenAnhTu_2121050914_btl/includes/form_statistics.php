<?php
$homeSite = "../home/index.php";
if ($username != '') {
    $homeSite = '../admin_page/statistics_admin.php';
}
?>
<form method="POST">
    <div class="content-wrapper">
        <div class="page-title">Thống kê</div>
        <div class="page-content">
        </div>
        <div class="page-breadcrumb">
            <ul>
                <li><a href=<?= $homeSite ?>><i class='bx bx-home'></i> Trang chủ </a></li>
                <li>/</li>
                <li>Thông tin</li>
                <li>/</li>
                <li>Thống kê</li>
            </ul>
        </div>
    </div>
    <div class="content-infor">
        <ul>
            <li id="student" class="students">
            </li>
            <li id="module" class="modules">
            </li>
            <li id="major" class="majors">
            </li>
            <li id="goodstudent" class="goodstudents">
            </li>
        </ul>
    </div>
</form>