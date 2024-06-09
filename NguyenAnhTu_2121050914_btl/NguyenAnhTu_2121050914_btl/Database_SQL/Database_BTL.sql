-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 15, 2023 lúc 04:12 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlhtsv`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_diemhocphan`
--

CREATE TABLE `tbl_diemhocphan` (
  `msv` varchar(10) NOT NULL,
  `mhp` varchar(10) NOT NULL,
  `A` int(2) DEFAULT NULL,
  `B` int(2) DEFAULT NULL,
  `C` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_diemhocphan`
--

INSERT INTO `tbl_diemhocphan` (`msv`, `mhp`, `A`, `B`, `C`) VALUES
('1721050251', '7080112', 3, 8, 10),
('1721050251', '7080116', 7, 8, 8),
('1721050251', '7080206', 3, 7, 4),
('1721050251', '7080512', 5, 4, 1),
('1721050409', '7080112', 8, 0, 2),
('1721050409', '7080116', 0, 0, 6),
('1721050409', '7080206', 0, 6, 10),
('1721050409', '7080512', 1, 4, 5),
('1821050160', '7080112', 5, 4, 9),
('1821050160', '7080116', 8, 9, 10),
('1821050160', '7080206', 7, 9, 10),
('1821050160', '7080512', 2, 6, 0),
('1821050161', '7080112', 10, 10, 10),
('1821050161', '7080116', 0, 0, 8),
('1821050161', '7080206', 2, 7, 0),
('1821050161', '7080512', 7, 2, 4),
('1821050709', '7080112', 2, 0, 1),
('1821050709', '7080116', 8, 7, 10),
('1821050709', '7080206', 2, 4, 8),
('1821050709', '7080512', 9, 0, 7),
('1821050942', '7080112', 8, 10, 6),
('1821050942', '7080116', 7, 8, 8),
('1821050942', '7080206', 1, 2, 6),
('1821050942', '7080512', 9, 10, 2),
('1821051099', '7080112', 8, 2, 10),
('1821051099', '7080116', 6, 9, 10),
('1821051099', '7080206', 5, 8, 0),
('1821051099', '7080512', 2, 9, 2),
('1921050080', '7080112', 1, 9, 9),
('1921050080', '7080116', 8, 8, 8),
('1921050114', '7080112', 0, 5, 7),
('1921050114', '7080116', 5, 7, 6),
('1921050195', '7080112', 10, 7, 0),
('1921050195', '7080116', 5, 7, 6),
('1921050206', '7080112', 4, 2, 9),
('1921050206', '7080116', 8, 8, 8),
('1921050245', '7080112', 8, 4, 0),
('1921050245', '7080116', 0, 0, 6),
('1921050245', '7080206', 0, 10, 9),
('1921050245', '7080512', 6, 8, 7),
('1921050346', '7080112', 5, 0, 8),
('1921050346', '7080116', 8, 9, 10),
('1921050346', '7080206', 7, 0, 0),
('1921050346', '7080512', 5, 7, 8),
('1921050563', '7080112', 5, 0, 4),
('1921050563', '7080116', 8, 6, 10),
('1921050563', '7080206', 7, 6, 2),
('1921050563', '7080512', 4, 3, 2),
('1921050700', '7080112', 9, 0, 3),
('1921050700', '7080116', 8, 7, 8),
('1921050700', '7080206', 0, 4, 4),
('1921050700', '7080512', 7, 8, 10),
('1921050769', '7080112', 6, 2, 3),
('1921050769', '7080116', 6, 8, 7),
('1921050769', '7080206', 6, 8, 4),
('1921050769', '7080512', 1, 1, 1),
('2021050106', '7080112', 0, 0, 10),
('2021050106', '7080206', 4, 5, 2),
('2021050106', '7080512', 8, 5, 10),
('2021050113', '7080112', 3, 7, 1),
('2021050113', '7080116', 6, 7, 6),
('2021050113', '7080206', 1, 5, 4),
('2021050113', '7080512', 0, 8, 10),
('2021050151', '7080112', 2, 8, 3),
('2021050151', '7080116', 6, 8, 8),
('2021050151', '7080206', 9, 8, 6),
('2021050151', '7080512', 8, 10, 10),
('2021050153', '7080112', 10, 0, 1),
('2021050153', '7080116', 7, 8, 8),
('2021050153', '7080206', 10, 2, 8),
('2021050153', '7080512', 6, 1, 8),
('2021050160', '7080112', 7, 1, 9),
('2021050160', '7080116', 8, 8, 9),
('2021050160', '7080206', 7, 0, 2),
('2021050160', '7080512', 8, 7, 6),
('2021050173', '7080112', 7, 10, 5),
('2021050173', '7080206', 0, 6, 1),
('2021050173', '7080512', 1, 7, 0),
('2021050181', '7080112', 8, 7, 0),
('2021050181', '7080116', 0, 0, 6),
('2021050194', '7080112', 2, 4, 8),
('2021050203', '7080112', 4, 9, 10),
('2021050206', '7080112', 7, 8, 5),
('2021050206', '7080116', 5, 9, 10),
('2021050221', '7080112', 8, 0, 6),
('2021050222', '7080112', 4, 3, 1),
('2021050222', '7080116', 5, 9, 10),
('2021050233', '7080112', 9, 5, 6),
('2021050233', '7080116', 8, 9, 10),
('2021050246', '7080112', 10, 10, 3),
('2021050246', '7080116', 8, 8, 9),
('2021050266', '7080112', 10, 0, 0),
('2021050266', '7080116', 5, 7, 6),
('2021050270', '7080112', 5, 0, 2),
('2021050270', '7080116', 8, 9, 10),
('2021050312', '7080112', 3, 5, 2),
('2021050312', '7080116', 8, 8, 9),
('2021050319', '7080112', 8, 10, 10),
('2021050319', '7080116', 6, 8, 9),
('2021050319', '7080206', 4, 1, 0),
('2021050319', '7080512', 6, 2, 6),
('2021050326', '7080112', 8, 0, 3),
('2021050326', '7080116', 8, 9, 10),
('2021050326', '7080206', 7, 6, 10),
('2021050326', '7080512', 9, 0, 3),
('2021050343', '7080112', 6, 3, 3),
('2021050343', '7080116', 8, 9, 10),
('2021050343', '7080206', 7, 0, 7),
('2021050343', '7080512', 1, 10, 3),
('2021050344', '7080112', 6, 2, 7),
('2021050344', '7080116', 8, 8, 8),
('2021050344', '7080206', 10, 2, 2),
('2021050344', '7080512', 5, 8, 7),
('2021050352', '7080112', 8, 7, 3),
('2021050352', '7080116', 7, 7, 6),
('2021050352', '7080206', 1, 3, 3),
('2021050352', '7080512', 8, 1, 4),
('2021050362', '7080112', 8, 10, 10),
('2021050362', '7080116', 7, 7, 6),
('2021050362', '7080206', 3, 7, 1),
('2021050362', '7080512', 8, 5, 4),
('2021050363', '7080112', 3, 3, 9),
('2021050363', '7080116', 0, 0, 6),
('2021050363', '7080206', 10, 9, 1),
('2021050363', '7080512', 1, 7, 6),
('2021050367', '7080112', 8, 8, 9),
('2021050367', '7080116', 6, 8, 9),
('2021050367', '7080206', 3, 7, 0),
('2021050367', '7080512', 10, 9, 2),
('2021050372', '7080112', 3, 1, 6),
('2021050372', '7080116', 8, 9, 10),
('2021050373', '7080112', 8, 6, 0),
('2021050373', '7080116', 5, 7, 6),
('2021050377', '7080112', 2, 7, 8),
('2021050377', '7080116', 8, 8, 8),
('2021050406', '7080112', 4, 9, 9),
('2021050406', '7080116', 8, 8, 9),
('2021050418', '7080112', 1, 4, 10),
('2021050437', '7080112', 9, 9, 9),
('2021050437', '7080116', 0, 0, 6),
('2021050482', '7080112', 6, 10, 1),
('2021050482', '7080116', 7, 9, 10),
('2021050483', '7080116', 0, 7, 6),
('2021050483', '7080206', 3, 4, 5),
('2021050483', '7080512', 7, 10, 9),
('2021050524', '7080206', 3, 5, 1),
('2021050524', '7080512', 9, 6, 5),
('2021050545', '7080116', 8, 8, 9),
('2021050545', '7080206', 8, 0, 0),
('2021050545', '7080512', 8, 6, 7),
('2021050548', '7080116', 9, 7, 9),
('2021050548', '7080206', 9, 0, 3),
('2021050548', '7080512', 6, 5, 3),
('2021050558', '7080206', 6, 8, 5),
('2021050558', '7080512', 2, 4, 1),
('2021050573', '7080206', 5, 10, 7),
('2021050573', '7080512', 10, 6, 9),
('2021050608', '7080206', 0, 10, 3),
('2021050608', '7080512', 3, 2, 3),
('2021050633', '7080116', 8, 6, 10),
('2021050633', '7080206', 7, 6, 1),
('2021050633', '7080512', 6, 5, 5),
('2021050691', '7080206', 8, 10, 6),
('2021050691', '7080512', 7, 1, 8),
('2021050708', '7080206', 8, 3, 7),
('2021050708', '7080512', 9, 7, 0),
('2021050852', '7080116', 0, 0, 6),
('2021050852', '7080206', 0, 5, 9),
('2021050852', '7080512', 8, 6, 10),
('2021050855', '7080116', 0, 0, 6),
('2021050855', '7080206', 5, 6, 5),
('2021050855', '7080512', 0, 1, 5),
('2021050874', '7080206', 1, 3, 4),
('2021050874', '7080512', 9, 8, 5),
('2024011226', '7080512', 4, 3, 5),
('2024011376', '7080116', 7, 7, 9),
('2024011376', '7080206', 9, 7, 0),
('2024011376', '7080512', 2, 0, 8),
('2121050140', '7080116', 6, 7, 8),
('2121050140', '7080206', 3, 8, 4),
('2121050140', '7080512', 7, 10, 9),
('2121050151', '7080116', 0, 0, 6),
('2121050151', '7080206', 1, 5, 9),
('2121050151', '7080512', 5, 4, 0),
('2121050152', '7080116', 0, 8, 9),
('2121050152', '7080206', 0, 6, 8),
('2121050152', '7080512', 1, 10, 2),
('2121050169', '7080116', 6, 7, 6),
('2121050169', '7080206', 0, 10, 5),
('2121050169', '7080512', 3, 0, 0),
('2121050190', '7080116', 6, 7, 7),
('2121050190', '7080206', 8, 9, 0),
('2121050190', '7080512', 5, 4, 7),
('2121050405', '7080116', 5, 8, 6),
('2121050405', '7080206', 10, 6, 0),
('2121050405', '7080512', 1, 7, 8),
('2121050765', '7080116', 6, 8, 9),
('2121050765', '7080206', 8, 5, 10),
('2121050765', '7080512', 4, 6, 2),
('2121050769', '7080116', 6, 7, 6),
('2121050769', '7080206', 3, 2, 6),
('2121050769', '7080512', 3, 6, 9),
('2121051087', '7080116', 6, 8, 9),
('2121051087', '7080206', 10, 1, 3),
('2121051087', '7080512', 6, 6, 2),
('2121051137', '7080116', 7, 7, 6),
('2121051137', '7080206', 3, 4, 7),
('2121051137', '7080512', 7, 9, 8),
('2121051194', '7080116', 0, 7, 6),
('2121051194', '7080206', 9, 7, 1),
('2121051194', '7080512', 9, 2, 0),
('2121051196', '7080116', 0, 7, 6),
('2121051196', '7080206', 10, 10, 6),
('2121051196', '7080512', 0, 3, 5),
('2121051293', '7080116', 6, 8, 8),
('2121051293', '7080206', 6, 8, 9),
('2121051293', '7080512', 3, 10, 2),
('2121051410', '7080116', 0, 7, 6),
('2121051410', '7080206', 3, 4, 7),
('2121051410', '7080512', 0, 4, 5),
('2121051416', '7080116', 5, 8, 8),
('2121051416', '7080512', 8, 2, 10),
('2121051437', '7080116', 0, 7, 6),
('2121051437', '7080512', 2, 3, 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_hocphan`
--

CREATE TABLE `tbl_hocphan` (
  `mhp` varchar(10) NOT NULL,
  `tenhocphan` varchar(40) DEFAULT NULL,
  `tinchi` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_hocphan`
--

INSERT INTO `tbl_hocphan` (`mhp`, `tenhocphan`, `tinchi`) VALUES
('7080112', 'Trí tuệ nhân tạo', 3),
('7080116', 'Phát triển ứng dụng web + BTL', 4),
('7080118', 'Thiết kế website', 2),
('7080206', 'Cấu trúc dữ liệu&Giải thuật', 3),
('7080319', 'Trực quan hóa dữ liệu', 3),
('7080323', 'Dịch vụ dựa trên địa điểm', 3),
('7080403', 'Đồ án CNTT Địa học', 2),
('7080410', 'Nhập môn nghành Khoa học Dữ liệu', 3),
('7080512', 'Lập trình hướng đối tượng với Java', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_khoa`
--

CREATE TABLE `tbl_khoa` (
  `mk` varchar(5) NOT NULL,
  `ten_khoa` varchar(50) DEFAULT NULL,
  `dien_thoai` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_khoa`
--

INSERT INTO `tbl_khoa` (`mk`, `ten_khoa`, `dien_thoai`) VALUES
('7060', 'Dầu khí', '(84-26) 7678-5221'),
('7080', 'Công nghệ Thông tin', '(84-24) 3838-7570'),
('7100', 'Xây dựng', '(84-24) 8767-5441'),
('8050', 'Trắc địa - Bản đồ và quản lý đất đai', '(84-43) 8387-5681'),
('8070', 'Kinh tế & QTKD', '(84-43) 8387-5661');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_lopchuyennghanh`
--

CREATE TABLE `tbl_lopchuyennghanh` (
  `mlcn` varchar(10) NOT NULL,
  `tenlop` varchar(50) DEFAULT NULL,
  `nienkhoa` varchar(3) DEFAULT NULL,
  `siso` int(3) DEFAULT NULL,
  `mk` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_lopchuyennghanh`
--

INSERT INTO `tbl_lopchuyennghanh` (`mlcn`, `tenlop`, `nienkhoa`, `siso`, `mk`) VALUES
('DCCTCT63', 'Đại học - Công nghệ thông tin_K63', 'K63', 26, '7080'),
('DCCTCT65B1', 'Đại học_Công nghệ thông tin B1_K65', 'K65', 30, '7080'),
('DCCTCT66A1', 'Đại học_Công nghệ thông tin_K66A1', 'K66', 67, '7080'),
('DCCTCT66B1', 'Đại học_Công nghệ thông tin_K66B1', 'K66', 62, '7080'),
('DCCTCT66C2', 'Đại học_Công nghệ thông tin_K66C2', 'K66', 36, '7080'),
('DCCTCT66D1', 'Đại học_Công nghệ thông tin_K66D1', 'K66', 64, '7080'),
('DCCTCT66H1', 'Đại học_Công nghệ thông tin_K66H1', 'K66', 61, '7080'),
('DCCTCT66I1', 'Đại học_Công nghệ thông tin_K66I1', 'K66', 68, '7080'),
('DCCTCT66K1', 'Đại học_Công nghệ thông tin_K66K1', 'K66', 60, '7080'),
('DCCTCT66L1', 'Đại học_Công nghệ thông tin_K66L1', 'K66', 62, '7080'),
('DCCTCT66M1', 'Đại học_Công nghệ thông tin_K66M1', 'K66', 65, '7080'),
('DCCTDH63A', 'Đại học - Công nghệ thông tin địa học A - K63', 'K63', 25, '7080'),
('DCCTDH64', 'Đại học - Công ngệ thông tin địa học - K64', 'K64', 28, '7080'),
('DCCTDH65A', 'Đại học - Công nghệ thông tin địa học A - K65', 'K65', 27, '7080'),
('DCCTDH65B', 'Đại học - Công nghệ thông tin địa học B - K65', 'K65', 32, '7080'),
('DCCTHT63B', 'Đại học - Hệ thống thông tin B - K63', 'K63', 40, '7080'),
('DCCTHT65A', 'Đại học - Hệ thông thông tin A- K65', 'K65', 35, '7080'),
('DCCTHT65B', 'Đại học - Hệ thông thông tin B- K65', 'K65', 30, '7080'),
('DCCTKH64A', 'Đại học - Khoa học máy tính ứng dụng A- K64', 'K64', 39, '7080'),
('DCCTKH64B', 'Đại học - Khoa học máy tính ứng dụng B- K64', 'K64', 36, '7080'),
('DCCTKH65A', 'Đại học - Khoa học máy tính ứng dụng A- K65', 'K65', 38, '7080'),
('DCCTKH65B', 'Đại học - Khoa học máy tính ứng dụng B- K65', 'K65', 34, '7080'),
('DCCTKT62', 'Đại học - Tin học Kinh tế - K62', 'K62', 40, '7080'),
('DCCTKT63A', 'Đại học - Tin học kinh tế A - K63', 'K63', 42, '7080'),
('DCCTKT64A', 'Đại học - Tin học kinh tế A- K64', 'K64', 46, '7080'),
('DCCTKT65A', 'Đại học - Tin học kinh tế A- K65', 'K65', 41, '7080'),
('DCCTKT65B', 'Đại học - Tin học kinh tế B- K65', 'K65', 40, '7080'),
('DCCTMM63C', 'Đại học - Mạng máy tính C - K63', 'K63', 20, '7080'),
('DCCTMM65A', 'Đại học - Mạng máy tính A- K65', 'K65', 38, '7080'),
('DCCTMM65B', 'Đại học - Mạng máy tính B- K65', 'K65', 37, '7080'),
('DCCTPM62A', 'Đại học - Công nghệ phần mềm A - K62', 'K62', 42, '7080'),
('DCCTPM63A', 'Đại học - Công nghệ phần mềm A - K63', 'K63', 45, '7080'),
('DCCTPM64A', 'Đại học - Công nghệ phần mềm A- K64', 'K64', 48, '7080'),
('DCCTPM65A', 'Đại học - Công nghệ phần mềm A- K65', 'K65', 48, '7080'),
('DCCTPM65B', 'Đại học - Công nghệ phần mềm B- K65', 'K65', 50, '7080'),
('DCCTPM65C', 'Đại học - Công nghệ phần mềm C- K65', 'K65', 52, '7080');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_lophocphan`
--

CREATE TABLE `tbl_lophocphan` (
  `mlcn` varchar(10) NOT NULL,
  `mhp` varchar(10) NOT NULL,
  `nhom` varchar(3) DEFAULT NULL,
  `hocki` varchar(1) DEFAULT NULL,
  `namhoc` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_lophocphan`
--

INSERT INTO `tbl_lophocphan` (`mlcn`, `mhp`, `nhom`, `hocki`, `namhoc`) VALUES
('DCCTCT66A1', '7080116', '1', '3', '2022-'),
('DCCTCT66A1', '7080512', '1', '3', '2022-'),
('DCCTCT66B1', '7080116', '1', '3', '2022-'),
('DCCTCT66B1', '7080512', '1', '3', '2022-'),
('DCCTCT66D1', '7080116', '1', '3', '2022-'),
('DCCTCT66D1', '7080512', '1', '3', '2022-'),
('DCCTCT66H1', '7080116', '1', '3', '2022-'),
('DCCTCT66H1', '7080512', '1', '3', '2022-'),
('DCCTCT66I1', '7080116', '1', '1', '2022-'),
('DCCTCT66I1', '7080512', '2', '3', '2022-'),
('DCCTCT66K1', '7080116', '1', '1', '2022-'),
('DCCTCT66K1', '7080512', '2', '3', '2022-'),
('DCCTCT66L1', '7080116', '1', '1', '2022-'),
('DCCTCT66L1', '7080512', '2', '3', '2022-'),
('DCCTCT66M1', '7080116', '1', '1', '2022-'),
('DCCTCT66M1', '7080512', '2', '3', '2022-'),
('DCCTDH63A', '7080116', '1', '1', '2022-'),
('DCCTDH63A', '7080512', '3', '3', '2022-'),
('DCCTDH64', '7080116', '1', '1', '2022-'),
('DCCTDH64', '7080512', '3', '3', '2022-'),
('DCCTDH65A', '7080116', '1', '1', '2022-'),
('DCCTDH65A', '7080512', '3', '3', '2022-'),
('DCCTHT63B', '7080116', '1', '1', '2022-'),
('DCCTHT63B', '7080512', '4', '3', '2022-'),
('DCCTHT65A', '7080116', '1', '1', '2022-'),
('DCCTHT65A', '7080512', '4', '3', '2022-'),
('DCCTHT65B', '7080116', '1', '1', '2022-'),
('DCCTKH64A', '7080116', '1', '1', '2022-'),
('DCCTKH64B', '7080116', '1', '1', '2022-'),
('DCCTKH65A', '7080116', '1', '2', '2022-'),
('DCCTKH65B', '7080116', '1', '2', '2022-'),
('DCCTKT62', '7080116', '1', '2', '2022-'),
('DCCTKT63A', '7080116', '1', '2', '2022-'),
('DCCTKT64A', '7080116', '1', '2', '2022-'),
('DCCTKT65A', '7080116', '1', '2', '2022-'),
('DCCTKT65B', '7080116', '1', '2', '2022-'),
('DCCTMM63C', '7080116', '1', '2', '2022-'),
('DCCTMM65A', '7080116', '1', '2', '2022-'),
('DCCTMM65B', '7080116', '1', '2', '2022-'),
('DCCTPM62A', '7080116', '1', '2', '2022-'),
('DCCTPM63A', '7080116', '1', '2', '2022-'),
('DCCTPM64A', '7080116', '1', '2', '2022-'),
('DCCTPM65C', '7080116', '1', '2', '2022-');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_sinhvien`
--

CREATE TABLE `tbl_sinhvien` (
  `msv` varchar(10) NOT NULL,
  `holot` varchar(20) DEFAULT NULL,
  `ten` varchar(10) DEFAULT NULL,
  `mlcn` varchar(10) DEFAULT NULL,
  `sodidong` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_sinhvien`
--

INSERT INTO `tbl_sinhvien` (`msv`, `holot`, `ten`, `mlcn`, `sodidong`, `email`) VALUES
('1721050251', 'Hoàng Minh', 'Quang', 'DCCTPM62A', '1636365887', '1721050251@student.humg.edu.vn'),
('1721050409', 'Lại Hồng', 'Phong', 'DCCTKT62', '977015622', '1721050409@student.humg.edu.vn'),
('1821050160', 'Đinh Tiến', 'Long', 'DCCTKT63A', '964654781', '1821050160@student.humg.edu.vn'),
('1821050161', 'Chử Thành', 'Luân', 'DCCTPM63A', '966828454', '1821050161@student.humg.edu.vn'),
('1821050709', 'Hoàng Văn', 'Thịnh', 'DCCTMM63C', '868779612', '1821050709@student.humg.edu.vn'),
('1821050942', 'Cao Văn', 'Đức', 'DCCTDH63A', '1638811658', '1821050942@student.humg.edu.vn'),
('1821051099', 'Lâm Minh', 'Đức', 'DCCTHT63B', '989966325', '1821051099@student.humg.edu.vn'),
('1921050080', 'Trần Phú', 'Anh', 'DCCTKH64A', '383173158', '1921050080@student.humg.edu.vn'),
('1921050114', 'Nguyễn Duyên', 'Cường', 'DCCTKT64A', '367976335', '1921050114@student.humg.edu.vn'),
('1921050195', 'Nguyễn Tài', 'Đức', 'DCCTKT64A', '333427252', '1921050195@student.humg.edu.vn'),
('1921050206', 'Nguyễn Trường', 'Giang', 'DCCTKH64A', '354117902', '1921050206@student.humg.edu.vn'),
('1921050245', 'Nguyễn Văn', 'Hiếu', 'DCCTKH64A', '366387512', '1921050245@student.humg.edu.vn'),
('1921050346', 'Dương Xuân', 'Lâm', 'DCCTKH64B', '973216132', '1921050346@student.humg.edu.vn'),
('1921050563', 'Nguyễn Văn', 'Thắng', 'DCCTPM64A', '344484165', '1921050563@student.humg.edu.vn'),
('1921050700', 'Võ Tuấn', 'Vũ', 'DCCTPM64A', '934428104', '1921050700@student.humg.edu.vn'),
('1921050769', 'Nguyễn Xuân', 'Trường', 'DCCTDH64', '961340778', '1921050769@student.humg.edu.vn'),
('2021050068', 'Hoàng Việt', 'Anh', 'DCCTDH65A', '369873952', '2021050068@student.humg.edu.vn'),
('2021050106', 'Nguyễn Hữu', 'Bằng', 'DCCTDH65A', '335093712', '2021050106@student.humg.edu.vn'),
('2021050113', 'Trần Hải', 'Châu', 'DCCTMM65B', '865510928', '2021050113@student.humg.edu.vn'),
('2021050151', 'Lê Minh', 'Duy', 'DCCTHT65B', '965155701', '2021050151@student.humg.edu.vn'),
('2021050153', 'Nguyễn Hải', 'Duy', 'DCCTHT65A', '354959566', '2021050153@student.humg.edu.vn'),
('2021050160', 'Hà Hoàng Đức', 'Dương', 'DCCTHT65A', '386936806', '2021050160@student.humg.edu.vn'),
('2021050173', 'Lê Văn', 'Đạt', 'DCCTDH65A', '865421493', '2021050173@student.humg.edu.vn'),
('2021050181', 'Nguyễn Tiến', 'Đạt', 'DCCTMM65A', '367936202', '2021050181@student.humg.edu.vn'),
('2021050194', 'Nguyễn Khắc', 'Đoàn', 'DCCTDH65A', '395779703', '2021050194@student.humg.edu.vn'),
('2021050203', 'Đỗ Quốc', 'Đức', 'DCCTDH65A', '339622326', '2021050203@student.humg.edu.vn'),
('2021050206', 'Ngô Văn', 'Đức', 'DCCTKT65A', '355899098', '2021050206@student.humg.edu.vn'),
('2021050221', 'Nguyễn Đức Trường', 'Giang', 'DCCTDH65A', '917649254', '2021050221@student.humg.edu.vn'),
('2021050222', 'Nguyễn Trường', 'Giang', 'DCCTKH65B', '702020831', '2021050222@student.humg.edu.vn'),
('2021050233', 'Bùi Phúc', 'Hải', 'DCCTKH65B', '928478620', 'kichirango2742@gmail.com'),
('2021050246', 'Vũ Trung', 'Hậu', 'DCCTKT65B', '971786693', '2021050246@student.humg.edu.vn'),
('2021050266', 'Phạm Công', 'Hiếu', 'DCCTMM65A', '906243117', '2021050266@student.humg.edu.vn'),
('2021050270', 'Vũ Đức', 'Hiếu', 'DCCTMM65B', '337483956', '2021050270@student.humg.edu.vn'),
('2021050312', 'Nguyễn Quang', 'Huy', 'DCCTKH65A', '399570205', '2021050312@student.humg.edu.vn'),
('2021050319', 'Ninh Quang', 'Huy', 'DCCTKH65B', '972950629', '2021050319@student.humg.edu.vn'),
('2021050326', 'Nguyễn Thị', 'Huyền', 'DCCTHT65B', '342694913', '2021050326@student.humg.edu.vn'),
('2021050343', 'Trần Văn', 'Khá', 'DCCTKH65B', '362871914', '2021050343@student.humg.edu.vn'),
('2021050344', 'Nguyễn Thiện', 'Khải', 'DCCTKH65A', '914097128', '2021050344@student.humg.edu.vn'),
('2021050352', 'Nguyễn Văn', 'Khánh', 'DCCTHT65A', '943568008', '2021050352@student.humg.edu.vn'),
('2021050362', 'Nguyễn Ngọc', 'Kiên', 'DCCTKH65A', '972562320', '2021050362@student.humg.edu.vn'),
('2021050363', 'Nguyễn Trung', 'Kiên', 'DCCTKT65B', '382917017', '2021050363@student.humg.edu.vn'),
('2021050367', 'Vũ Văn', 'Kiên', 'DCCTKH65B', '963527160', '2021050367@student.humg.edu.vn'),
('2021050372', 'Bùi Duy', 'Lâm', 'DCCTMM65A', '356448298', '2021050372@student.humg.edu.vn'),
('2021050373', 'Bùi Đức', 'Lâm', 'DCCTPM65C', '354810133', '2021050373@student.humg.edu.vn'),
('2021050377', 'Nguyễn Trọng', 'Lâm', 'DCCTPM65C', '377382374', '2021050377@student.humg.edu.vn'),
('2021050406', 'Nguyễn Đình', 'Long', 'DCCTMM65B', '971063820', '2021050406@student.humg.edu.vn'),
('2021050418', 'Trần Tiến', 'Lực', 'DCCTDH65A', '364946848', '2021050418@student.humg.edu.vn'),
('2021050437', 'Nguyễn Đức', 'Mạnh', 'DCCTMM65A', '384584911', '2021050437@student.humg.edu.vn'),
('2021050482', 'Lê Huy', 'Nguyên', 'DCCTMM65B', '587392619', '2021050482@student.humg.edu.vn'),
('2021050483', 'Lưu Ngọc', 'Nguyên', 'DCCTHT65A', '839016636', '2021050483@student.humg.edu.vn'),
('2021050524', 'Nguyễn Ngọc', 'Phương', 'DCCTDH65A', '969949564', '2021050524@student.humg.edu.vn'),
('2021050545', 'Nguyễn Minh', 'Quân', 'DCCTDH65A', '963418764', '2021050545@student.humg.edu.vn'),
('2021050548', 'Trần Ngọc', 'Quân', 'DCCTPM65C', '924023211', '2021050548@student.humg.edu.vn'),
('2021050558', 'Phạm Đức', 'Quyền', 'DCCTDH65A', '563786722', '2021050558@student.humg.edu.vn'),
('2021050573', 'Quàng Văn', 'Sơn', 'DCCTDH65A', '795100115', '2021050573@student.humg.edu.vn'),
('2021050608', 'Đặng Việt', 'Thắng', 'DCCTDH65A', '353150766', '2021050608@student.humg.edu.vn'),
('2021050633', 'Nguyễn Đức', 'Tiến', 'DCCTHT65A', '969009287', '2021050633@student.humg.edu.vn'),
('2021050691', 'Lê Anh', 'Tuấn', 'DCCTDH65A', '367480136', '2021050691@student.humg.edu.vn'),
('2021050708', 'Nguyễn Bá', 'Tùng', 'DCCTDH65A', '359798885', '2021050708@student.humg.edu.vn'),
('2021050852', 'Cao Thế', 'Anh', 'DCCTPM65C', '702275926', '2021050852@student.humg.edu.vn'),
('2021050855', 'Đinh Mạnh', 'Phong', 'DCCTKT65A', '904857210', '2021050855@student.humg.edu.vn'),
('2021050874', 'Chu Đăng', 'Trường', 'DCCTDH65A', '368739818', '2021050874@student.humg.edu.vn'),
('2024011226', 'Lê Mậu', 'Toàn', 'DCCTKH65A', '337514312', '2024011226@student.humg.edu.vn'),
('2024011376', 'Trần Tiến', 'Thành', 'DCCTMM65A', '975258802', '2024011376@student.humg.edu.vn'),
('2121050140', 'Đặng Ngọc', 'Tường', 'DCCTCT66B1', '965019276', '2121050140@student.humg.edu.vn'),
('2121050151', 'Nguyễn Trường', 'Giang', 'DCCTCT66B1', '357161432', '2121050151@student.humg.edu.vn'),
('2121050152', 'Đinh Tiến', 'Hải', 'DCCTCT66B1', '862695123', '2121050152@student.humg.edu.vn'),
('2121050169', 'Nguyễn Tuấn', 'Hưng', 'DCCTCT66B1', '585827635', '2121050169@student.humg.edu.vn'),
('2121050190', 'Đỗ Đức', 'Tuệ', 'DCCTCT66B1', '353355472', '2121050190@student.humg.edu.vn'),
('2121050405', 'Vũ Hà Huy', 'Tuấn', 'DCCTCT66D1', '337693183', '2121050405@student.humg.edu.vn'),
('2121050765', 'Vũ Trọng', 'Nghĩa', 'DCCTCT66H1', '977753965', '2121050765@student.humg.edu.vn'),
('2121050769', 'Tô Việt', 'Anh', 'DCCTCT66H1', '835118142', '2121050769@student.humg.edu.vn'),
('2121051087', 'Hoàng Đình', 'Dương', 'DCCTCT66I1', '332290626', '2121051087@student.humg.edu.vn'),
('2121051137', 'Lý Ngọc', 'Bách', 'DCCTCT66K1', '865351633', '2121051137@student.humg.edu.vn'),
('2121051194', 'Nguyễn Đình', 'Đức', 'DCCTCT66K1', '967388003', '2121051194@student.humg.edu.vn'),
('2121051196', 'Hồ Duy', 'Anh', 'DCCTCT66K1', '339762136', '2121051196@student.humg.edu.vn'),
('2121051293', 'Nguyễn Tùng', 'Phương', 'DCCTCT66L1', '934331652', '2121051293@student.humg.edu.vn'),
('2121051410', 'Vũ Ngọc', 'Đạt', 'DCCTCT66M1', '868336018', '2121051410@student.humg.edu.vn'),
('2121051416', 'Nguyễn Mạnh', 'Dũng', 'DCCTCT66M1', '347215326', '2121051416@student.humg.edu.vn'),
('2121051437', 'Lê Đức', 'Ngọc', 'DCCTCT66M1', '374301581', '2121051437@student.humg.edu.vn'),
('2121051472', 'Vũ Tiến', 'Phúc', 'DCCTCT66A1', '902062909', '2121051472@student.humg.edu.vn');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `username`, `name`, `password`, `user_role`) VALUES
(4, 'admin', 'admin', '12345', 'quantrivien');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_diemhocphan`
--
ALTER TABLE `tbl_diemhocphan`
  ADD PRIMARY KEY (`msv`,`mhp`),
  ADD KEY `diemhocphan_hocphan` (`mhp`);

--
-- Chỉ mục cho bảng `tbl_hocphan`
--
ALTER TABLE `tbl_hocphan`
  ADD PRIMARY KEY (`mhp`);

--
-- Chỉ mục cho bảng `tbl_khoa`
--
ALTER TABLE `tbl_khoa`
  ADD PRIMARY KEY (`mk`);

--
-- Chỉ mục cho bảng `tbl_lopchuyennghanh`
--
ALTER TABLE `tbl_lopchuyennghanh`
  ADD PRIMARY KEY (`mlcn`),
  ADD KEY `lopchuyennganh_khoa` (`mk`);

--
-- Chỉ mục cho bảng `tbl_lophocphan`
--
ALTER TABLE `tbl_lophocphan`
  ADD PRIMARY KEY (`mlcn`,`mhp`),
  ADD KEY `hocphan_lophocphan` (`mhp`);

--
-- Chỉ mục cho bảng `tbl_sinhvien`
--
ALTER TABLE `tbl_sinhvien`
  ADD PRIMARY KEY (`msv`),
  ADD KEY `sinhvien_lopchuyennghanh` (`mlcn`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_diemhocphan`
--
ALTER TABLE `tbl_diemhocphan`
  ADD CONSTRAINT `diemhocphan_hocphan` FOREIGN KEY (`mhp`) REFERENCES `tbl_hocphan` (`mhp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `diemhocphan_sinhvien` FOREIGN KEY (`msv`) REFERENCES `tbl_sinhvien` (`msv`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_lopchuyennghanh`
--
ALTER TABLE `tbl_lopchuyennghanh`
  ADD CONSTRAINT `lopchuyennganh_khoa` FOREIGN KEY (`mk`) REFERENCES `tbl_khoa` (`mk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_lophocphan`
--
ALTER TABLE `tbl_lophocphan`
  ADD CONSTRAINT `lophocphan_hocphan` FOREIGN KEY (`mhp`) REFERENCES `tbl_hocphan` (`mhp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lophocphan_lopchuyennganh` FOREIGN KEY (`mlcn`) REFERENCES `tbl_lopchuyennghanh` (`mlcn`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_sinhvien`
--
ALTER TABLE `tbl_sinhvien`
  ADD CONSTRAINT `sinhvien_lopchuyennghanh` FOREIGN KEY (`mlcn`) REFERENCES `tbl_lopchuyennghanh` (`mlcn`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
