<?php
require_once 'ketnoi.php';
session_start();

// Đăng nhập
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $selectQuery = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // GAN SESSION
        $_SESSION['user'] = $row['username'];
        $_SESSION['pass'] = $row['password'];
        switch ($row['user_role']) {
            case 'quantrivien':
                echo ('../admin_page/statistics_admin.php');
                break;
            default:
                echo 'false';
        }
    } else {
        echo 'false';
    }
}
// END

// Đăng xuất
if (isset($_POST['logout'])) {
    if (isset($_SESSION['user']) && ($_SESSION['user']) != '') {
        $_SESSION['user'] = '';
    }

    if (isset($_SESSION['pass']) && ($_SESSION['pass']) != '') {
        $_SESSION['pass'] = '';
    }

    echo '../home/index.php';
}
// END

if (isset($_SESSION['user']) && ($_SESSION['user']) != '') {
    $username = $_SESSION['user'];
}


// Load data quản lý sinh viên admin.php
if (isset($_POST['load_data_student'])) {
    $selectQuery = "SELECT * FROM tbl_sinhvien";
    $result = mysqli_query($conn, $selectQuery);
    $output = array();

    if ($result->num_rows > 0) {
        $count = 1;
        while ($row = $result->fetch_assoc()) {
            $output[] = array(
                'count' => $count,
                'msv' => $row['msv'],
                'holot' => $row['holot'],
                'ten' => $row['ten'],
                'mlcn' => $row['mlcn'],
                'sodidong' => $row['sodidong'],
                'email' => $row['email']
            );
            $count++;
        }
    } else {
        $output[] = array(
            'count' => '',
            'msv' => '',
            'holot' => '',
            'ten' => '',
            'mlcn' => '',
            'sodidong' => '',
            'email' => ''
        );
    }

    echo json_encode($output);
}

//  END


// Xóa sinh viên student.php
if (isset($_POST['delete_student'])) {
    $msv = $_POST['msv'];

    $deleteQuery = "DELETE FROM tbl_sinhvien WHERE msv = '$msv';";
    $result = mysqli_query($conn, $deleteQuery);
    if ($result) {
        echo 'true';
    } else {
        echo 'false';
    }
}
// END

// Xóa điểm học phần teacher.php
if (isset($_POST['delete_score_term'])) {
    $msv = $_POST['msv'];
    $mhp = $_POST['mhp'];

    $deleteQuery = "DELETE FROM tbl_diemhocphan WHERE msv = '$msv' AND mhp = '$mhp';";
    $result = mysqli_query($conn, $deleteQuery);
    if ($result) {
        echo 'true';
    } else {
        echo 'false';
    }
}
// END


// Tra cứu điểm học phần bằng MSV student.php
if (isset($_POST['search_score_msv'])) {
    $msv = $_POST['msv'];

    $selectQuery = "SELECT sv.msv,sv.holot,sv.ten,sv.mlcn,hp.tenhocphan,dhp.A,dhp.B,dhp.C FROM tbl_sinhvien sv 
    INNER JOIN tbl_diemhocphan dhp ON sv.msv = dhp.msv
    INNER JOIN tbl_hocphan hp ON hp.mhp = dhp.mhp
    WHERE sv.msv = '$msv';
    ";
    $name_student = '';
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $name_student .= $row['holot'] . ' ' . $row['ten'];
    } else {
        $name_student = '--Họ tên sinh viên--';
    }
    $output = '
    <table>
    <thead>
        <tr>
            <th colspan="5"><i>' . $name_student . '</i></th>
        </tr>
        <tr>
            <th>Môn học</th>
            <th>C</th>
            <th>B</th>
            <th>A</th>
            <th width="300px">Điểm học phần</th>
        </tr>
    </thead>
    ';
    if ($result->num_rows > 0) {
        $output .= '<tbody>';
        while ($row = $result->fetch_assoc()) {
            $score_term = $row['C'] * 0.1 + $row['B'] * 0.3 + $row['A'] * 0.6;
            $output .= '
            <tr>
                <th>' . $row['tenhocphan'] . '</th>
                <td>' . $row['C'] . '</td>
                <td>' . $row['B'] . '</td>
                <td>' . $row['A'] . '</td>
                <td>' . $score_term . '</td>
            </tr>';
        }
        $output .= '
        </tbody>
        </table>
        ';
    } else {
        $output .= '
        <tbody>
        <tr><td style="background-color:#e6e6e6;" colspan="5">Dữ liệu rỗng</td></tr>
        </tbody>
        </table>
        ';
    }

    echo $output;
}
// END

// LOAD DATA Quan ly diem hoc phan teacher.php
if (isset($_POST['load_data_score_term'])) {
    $selectQuery = 'SELECT dhp.msv,sv.holot,sv.ten,dhp.mhp,hp.tenhocphan,dhp.A,dhp.B,dhp.C FROM tbl_diemhocphan dhp 
    INNER JOIN tbl_hocphan hp ON hp.mhp = dhp.mhp
    INNER JOIN tbl_sinhvien sv on sv.msv = dhp.msv;
    ';

    $result = mysqli_query($conn, $selectQuery);
    $output = array();
    if ($result->num_rows > 0) {
        $count = 1;
        while ($row = $result->fetch_assoc()) {
            $dhp = $row['A'] * 0.6 + $row['B'] * 0.3 + $row['C'] * 0.1;
            $output[] = array(
                'count' => $count,
                'msv' => $row['msv'],
                'tensinhvien' => $row['holot'] . ' ' . $row['ten'],
                'mhp' => $row['mhp'],
                'thp' => $row['tenhocphan'],
                'a' => $row['A'],
                'b' => $row['B'],
                'c' => $row['C'],
                'dhp' => $dhp,
            );
            $count++;
        }
    }

    echo json_encode($output);
}

// END


// LOAD DATA Quan ly hoc phan admin.php
if (isset($_POST['load_data_term'])) {
    $selectQuery = 'SELECT * FROM tbl_hocphan
    ';

    $result = mysqli_query($conn, $selectQuery);
    $output = '
<table id="data-term">
<thead>
<tr>
    <th>Số thứ tự</th>
    <th>Mã học phần</th>
    <th>Tên học phần</th>
    <th>Tín chỉ</th>
    <th>Thao tác</th>
</tr>
</thead>
';
    if ($result->num_rows > 0) {
        $output .= '<tbody>';
        $count = 1;
        while ($row = $result->fetch_assoc()) {
            $output .= '
    <tr>
        <td>' . $count . '</td>
        <td>' . $row['mhp'] . '</td>
        <td>' . $row['tenhocphan'] . '</td>
        <td>' . $row['tinchi'] . '</td>
        <td class="table-actions">
            <button type="button" class="edit" data-id_edit="' . $row['mhp'] . '"><i class=\'bx bx-edit\'></i></button>
            <button type="button" class="delete" data-id_delete="' . $row['mhp'] . '"><i class=\'bx bx-trash\'></i></button>
        </td>
    </tr>';
            $count++;
        }
        $output .= '
</tbody>
</table>
';
    } else {
        $output .= '
<tbody>
<tr><td style="background-color:#e6e6e6;" colspan="5">Dữ liệu rỗng</td></tr>
</tbody>
</table>
';
    }

    echo $output;
}

// END

// LƯU MSV_EDIT VÀO SESSION
if (isset($_POST['edit_student'])) {
    $_SESSION['msv_edit'] = $_POST['msv'];

    echo 'edit_student.php';
}
// END

// LƯU SCORE_EDIT VÀO SESSION
if (isset($_POST['edit_score_mhp'])) {
    $_SESSION['msv_edit'] = $_POST['msv'];
    $_SESSION['mhp_edit'] = $_POST['mhp'];

    echo 'edit_score_term.php';
}
// END

// LƯU TERM_EDIT VÀO SESSION
if (isset($_POST['edit_term'])) {
    $_SESSION['mhp_edit_admin'] = $_POST['mhp'];

    echo 'edit_term.php';
}
// END

// LOAD DATA Chỉnh sửa sinh vien admin.php
if (isset($_POST['load_data_edit_student'])) {
    if (isset($_SESSION['msv_edit']) && ($_SESSION['msv_edit']) != '') {
        $msv = $_SESSION['msv_edit'];
    }
    $selectQuery = "SELECT * FROM tbl_sinhvien WHERE msv = '$msv'";
    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    $mlcnQuery = "SELECT * FROM tbl_lopchuyennghanh";
    $result_mlcn = mysqli_query($conn, $mlcnQuery);
    $option_mlcn = '';
    if ($result_mlcn->num_rows > 0) {
        $row_student = $result->fetch_assoc();
        $mlcn_selected = $row_student['mlcn'];
        while ($row = $result_mlcn->fetch_assoc()) {
            if ($row['mlcn'] == $mlcn_selected) {
                $option_mlcn .= '
                    <option selected>' . $row['mlcn'] . '</option>
                ';
            } else {
                $option_mlcn .= '
                    <option>' . $row['mlcn'] . '</option>
                ';
            }
        }
    }
    if ($result->num_rows > 0) {
        $output .= '
        <div class="box">
            <h4>Mã sinh viên</h4>
            <input id="msv" type="text" value=' . $row_student['msv'] . ' disabled>
        </div>
        <div class="box">
            <h4>Họ lót</h4>
            <input id="holot" type="text" value="' . $row_student['holot'] . '">
        </div>
        <div class="box">
            <h4>Tên</h4>
            <input id="ten" type="text" value="' . $row_student['ten'] . '"><br>
        </div>
        <div class="box">
            <h4>Mã lớp chuyên ngành</h4>
            <select id="mlcn">' . $option_mlcn . '</select>
        </div>
        <div class="box">
            <h4>Số di động</h4>
            <input id="phone" type="text" value="' . $row_student['sodidong'] . '"><br>
        </div>
        <div class="box">
            <h4>Email</h4>
            <input id="email" type="text" value="' . $row_student['email'] . '"><br>
        </div>
        <div class="box">
            <button type="button" id="save_data_student">Xác nhận</button>
        </div>
    ';
    } else {
        $output .= 'false';
    }

    echo $output;
}
// END

// LOAD DATA Chinh sua hoc phan admin.php
if (isset($_POST['load_data_edit_term'])) {
    if (isset($_SESSION['mhp_edit_admin']) && ($_SESSION['mhp_edit_admin']) != '') {
        $mhp = $_SESSION['mhp_edit_admin'];
    }
    $selectQuery = "SELECT * FROM tbl_hocphan WHERE mhp = '$mhp'";

    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output .= '
        <div class="box">
            <h4>Mã học phần</h4>
            <input id="mhp" type="text" value=' . $row['mhp'] . ' disabled>
        </div>
        <div class="box">
            <h4>Tên học phần</h4>
            <input id="thp" type="text" value="' . $row['tenhocphan'] . '">
        </div>
        <div class="box">
            <h4>Tín chỉ</h4>
            <input id="tinchi" type="text" value="' . $row['tinchi'] . '"><br>
        </div>
        <div class="box">
            <button type="button" id="save_data_term">Xác nhận</button>
        </div>
    ';
    } else {
        $output .= 'false';
    }

    echo $output;
}
// END

// SUBMIT CẬP NHẬT DỮ LIỆU HỌC PHẦN admin.php
if (isset($_POST['change_data_term'])) {
    if (isset($_SESSION['mhp_edit_admin']) && ($_SESSION['mhp_edit_admin']) != '') {
        $mhp_old = $_SESSION['mhp_edit_admin'];
    }
    $mhp = $_POST['mhp'];
    $thp = $_POST['thp'];
    $tinchi = $_POST['tinchi'];

    $updateQuery = "UPDATE tbl_hocphan SET mhp='$mhp' , tenhocphan = '$thp' , tinchi = '$tinchi' WHERE mhp = '$mhp_old'";
    $result = mysqli_query($conn, $updateQuery);
    if ($result) {
        echo 'manage_term.php';
    } else {
        echo 'false';
    }
}
// END

// LOAD DATA CHINH SỬA ĐIỂM HỌC PHẦN teacher.php
if (isset($_POST['load_data_edit_score_term'])) {
    if (isset($_SESSION['msv_edit']) && ($_SESSION['msv_edit']) != '') {
        $msv = $_SESSION['msv_edit'];
    }
    if (isset($_SESSION['mhp_edit']) && ($_SESSION['mhp_edit']) != '') {
        $mhp = $_SESSION['mhp_edit'];
    }

    $selectQuery = "SELECT * FROM tbl_diemhocphan WHERE msv = '$msv' AND  mhp = '$mhp'";

    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output .= '
        <div class="box">
            <h4>Mã sinh viên</h4>
            <input id="msv" type="text" value=' . $row['msv'] . ' disabled>
        </div>
        <div class="box">
            <h4>Mã học phần</h4>
            <input id="mhp" type="text" value="' . $row['mhp'] . '" disabled>
        </div>
        <div class="box">
            <h4>Điểm A</h4>
            <input id="diemA" type="text" value="' . $row['A'] . '"><br>
        </div>
        <div class="box">
            <h4>Điểm B</h4>
            <input id="diemB" type="text" value="' . $row['B'] . '"><br>
        </div>
        <div class="box">
            <h4>Điểm C</h4>
            <input id="diemC" type="text" value="' . $row['C'] . '"><br>
        </div>
        <div class="box">
            <button type="button" id="save_data_score_temp">Xác nhận</button>
        </div>
    ';
    } else {
        $output .= 'false';
    }

    echo $output;
}
// END


// SUBMIT CẬP NHẬT DỮ LIỆU SINH VIÊN admin.php
if (isset($_POST['change_data_student'])) {
    $msv = $_POST['msv'];
    $holot = $_POST['holot'];
    $ten = $_POST['ten'];
    $mlcn = $_POST['mlcn'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $updateQuery = "UPDATE tbl_sinhvien SET holot='$holot' , ten = '$ten' , mlcn = '$mlcn' , sodidong = '$phone' , email = '$email' WHERE msv = '$msv'";
    $result = mysqli_query($conn, $updateQuery);
    if ($result) {
        echo 'manage_student.php';
    } else {
        echo 'false';
    }
}
// END

// SUBMIT CẬP NHẬT DỮ LIỆU ĐIỂM SINH VIÊN teacher.php
if (isset($_POST['change_data_score_term'])) {
    $msv = $_POST['msv'];
    $mhp = $_POST['mhp'];
    $diemA = $_POST['diemA'];
    $diemB = $_POST['diemB'];
    $diemC = $_POST['diemC'];

    $updateQuery = "UPDATE tbl_diemhocphan SET A ='$diemA' , B = '$diemB' , C = '$diemC' WHERE msv = '$msv' AND mhp = '$mhp'";
    $result = mysqli_query($conn, $updateQuery);
    if ($result) {
        echo 'manage_score_term.php';
    } else {
        echo 'false';
    }
}
// END



// LOAD DATA CHO CHỨC NĂNG THỐNG KÊ
if (isset($_POST['load_data_statistics_student'])) {
    $selectQuery = 'SELECT COUNT(*) AS quantity FROM tbl_sinhvien';

    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
        <i class=\'bx bxs-user\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">' . $row['quantity'] . '</div>
            <div class="item-infor-name">SINH VIÊN</div>
        </div>
    </a>
        ';
    } else {
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
        <i class=\'bx bxs-user\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">0</div>
            <div class="item-infor-name">SINH VIÊN</div>
        </div>
    </a>
        ';
    }

    echo $output;
}

if (isset($_POST['load_data_statistics_module'])) {
    $selectQuery = 'SELECT COUNT(*) AS quantity FROM tbl_hocphan';

    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
            <i class=\'bx bx-book-content\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">' . $row['quantity'] . '</div>
            <div class="item-infor-name">HỌC PHẦN</div>
        </div>
    </a>
        ';
    } else {
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
            <i class=\'bx bx-book-content\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">0</div>
            <div class="item-infor-name">HỌC PHẦN</div>
        </div>
    </a>
        ';
    }

    echo $output;
}

if (isset($_POST['load_data_statistics_major'])) {
    $selectQuery = 'SELECT COUNT(*) AS quantity FROM tbl_lophocphan';

    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
            <i class=\'bx bx-book-alt\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">' . $row['quantity'] . '</div>
            <div class="item-infor-name">LỚP HỌC PHẦN</div>
        </div>
    </a>
        ';
    } else {
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
            <i class=\'bx bx-book-alt\'></i>    
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">0</div>
            <div class="item-infor-name">LỚP HỌC PHẦN</div>
        </div>
    </a>
        ';
    }

    echo $output;
}

if (isset($_POST['load_data_statistics_goodstudent'])) {
    $selectQuery = 'SELECT COUNT(*) as quantity FROM tbl_diemhocphan dhp WHERE (dhp.A * 0.6 + dhp.B * 0.3 + dhp.C * 0.1) > 8;';

    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
            <i class=\'bx bxs-graduation\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">' . $row['quantity'] . '</div>
            <div class="item-infor-name">SINH VIÊN XUẤT SẮC</div>
        </div>
    </a>
        ';
    } else {
        $output .= '
        <a href="#">
        <div class="item-infor-icon">
            <i class=\'bx bxs-graduation\'></i>
        </div>
        <div class="item-infor-text">
            <div class="item-infor-quantity">0</div>
            <div class="item-infor-name">SINH VIÊN XUẤT SẮC</div>
        </div>
    </a>
        ';
    }

    echo $output;
}

// END

// THÊM ĐIỂM HỌC PHẦN teacher.php
if (isset($_POST['add_score_term'])) {
    $msv = $_POST['msv'];
    $mhp = $_POST['mhp'];
    $diemA = $_POST['diemA'];
    $diemB = $_POST['diemB'];
    $diemC = $_POST['diemC'];

    $insertQuery = "INSERT INTO tbl_diemhocphan(msv,mhp,A,B,C) VALUES ('$msv','$mhp','$diemA','$diemB','$diemC')";

    $result = mysqli_query($conn, $insertQuery);
    if ($result) {
        echo 'manage_score_term.php';
    } else {
        echo 'false';
    }
}

// THÊM SINH VIÊN admin.php
if (isset($_POST['submit_add_student'])) {
    $msv = $_POST['msv'];
    $holot = $_POST['holot'];
    $ten = $_POST['ten'];
    $mlcn = $_POST['mlcn'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $insertQuery = "INSERT INTO tbl_sinhvien(msv,holot,ten,mlcn,sodidong,email) VALUES ('$msv','$holot','$ten','$mlcn','$phone','$email')";

    $result = mysqli_query($conn, $insertQuery);
    if ($result) {
        echo 'manage_student.php';
    } else {
        echo 'false';
    }
}


// THÊM HỌC PHẦN admin.php
if (isset($_POST['submit_add_term'])) {
    $mhp = $_POST['mhp'];
    $thp = $_POST['thp'];
    $tinchi = $_POST['tinchi'];

    if ($mhp == '' || $thp == '' || $tinchi == '') {
        echo 'false';
        exit;
    }

    $insertQuery = "INSERT INTO tbl_hocphan(mhp,tenhocphan,tinchi) VALUES ('$mhp','$thp','$tinchi')";

    $result = mysqli_query($conn, $insertQuery);
    if ($result) {
        echo 'manage_term.php';
    } else {
        echo 'false';
    }
}


// XÓA SINH VIÊN admin.php
if (isset($_POST['delete_term'])) {
    $mhp = $_POST['mhp'];

    $deleteQuery = "DELETE FROM tbl_hocphan WHERE mhp = '$mhp';";
    $result = mysqli_query($conn, $deleteQuery);
    if ($result) {
        echo 'true';
    } else {
        echo 'false';
    }
}
// END


if (isset($_POST['change_option_term'])) {
    $mhp = $_POST['mhp'];
    $selectQuery = "SELECT * FROM tbl_hocphan WHERE mhp = '$mhp'";
    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output = $row['tenhocphan'];
    }

    echo $output;
}


if (isset($_POST['change_option_msv'])) {
    $msv = $_POST['msv'];
    $selectQuery = "SELECT * FROM tbl_sinhvien WHERE msv = '$msv'";
    $result = mysqli_query($conn, $selectQuery);
    $output = '';
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $output = $row['holot'] . ' ' . $row['ten'];
    }

    echo $output;
}


if (isset($_POST['add_data_score_term_csv'])) {

    $msv = $_POST['msv'];
    $mhp = $_POST['mhp'];
    $a = $_POST['a'];
    $b = $_POST['b'];
    $c = $_POST['c'];

    $insertQuery = "INSERT INTO tbl_diemhocphan(msv,mhp,A,B,C) VALUES ('$msv','$mhp','$a','$b','$c');";
    $result = mysqli_query($conn, $insertQuery);

    if ($result) {
        echo 'true';
    } else {
        echo 'false';
    }
}

if (isset($_POST['add_student_csv'])) {

    $msv = $_POST['msv'];
    $holot = $_POST['holot'];
    $ten = $_POST['ten'];
    $mlcn = $_POST['mlcn'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $insertQuery = "INSERT INTO tbl_sinhvien(msv,holot,ten,mlcn,sodidong,email) VALUES ('$msv','$holot','$ten','$mlcn','$phone','$email');";
    $result = mysqli_query($conn, $insertQuery);

    if ($result) {
        echo 'true';
    } else {
        echo 'false';
    }
}

if (isset($_POST['data_student'])) {
    $listMsv = array();
    $selectQuery = "SELECT * FROM tbl_sinhvien";
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $listMsv[] = $row['msv'];
        }
    }
    echo json_encode($listMsv);
}

if (isset($_POST['code_term'])) {
    $listTerm = array();
    $selectQuery = "SELECT * FROM tbl_hocphan";
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $listMsv[] = $row['mhp'];
        }
    }
    echo json_encode($listMsv);
}

if (isset($_POST['score_term'])) {
    $listScoreTerm = array();
    $selectQuery = "SELECT * FROM tbl_diemhocphan";
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $listScoreTerm[] = array(
                'msv' => $row['msv'],
                'mhp' => $row['mhp']
            );
        }
    }
    echo json_encode($listScoreTerm);
}


if (isset($_POST['code_specialization'])) {
    $listCodeSpecialization = array();
    $selectQuery = "SELECT * FROM tbl_lopchuyennghanh";
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            while ($row = $result->fetch_assoc()) {
                $listCodeSpecialization[] = $row['mlcn'];
            }
        }
    }
    echo json_encode($listCodeSpecialization);
}

if (isset($_POST['data_user'])) {
    $data_user = array();
    $selectQuery = "SELECT * FROM user";
    $result = mysqli_query($conn, $selectQuery);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data_user[] = array(
                'username' => $row['username'],
                'password' => $row['password']
            );
        }
    }
    echo json_encode($data_user);
}
