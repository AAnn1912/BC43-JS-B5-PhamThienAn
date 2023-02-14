// Layout
var oPen1 = document.getElementById("close1");
var oPen2 = document.getElementById("close2");

document.getElementById("bai-1").onclick = function () {
  oPen1.src = "./img/iconJSB5/edu-open.png";
};

document.getElementById("bai-2").onclick = function () {
  oPen2.src = "./img/iconJSB5/elec-open.png";
};

// Baì tập

// Bài 1
document.getElementById("tinh-diem").onclick = function () {
  var diemChuan = Number(document.getElementById("diem-chuan").value);
  var diemMon1 = Number(document.getElementById("mon-1").value);
  var diemMon2 = Number(document.getElementById("mon-2").value);
  var diemMon3 = Number(document.getElementById("mon-3").value);
  var doiTuong = Number(document.getElementById("doi-tuong").value);
  var khuVuc = Number(document.getElementById("khu-vuc").value);
  var diemTrungBinh = diemMon1 + diemMon2 + diemMon3;
  var diemUuTien = doiTuong + khuVuc;
  var diemTong = diemTrungBinh + diemUuTien;
  var ketQuaTS = "";
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    ketQuaTS = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diemChuan <= diemTong) {
    ketQuaTS = "Bạn đã Đậu. Tổng điểm: " + diemTong;
  } else {
    ketQuaTS = "Bạn đã Rớt. Tổng điểm: " + diemTong;
  }
  document.getElementById("dap-an-bai-1").innerHTML = ketQuaTS;
};

// Bài 2

document.getElementById("tinh-tien-dien").onclick = function () {
  var hoTenKH = document.getElementById("ho-ten-kh").value;
  var soKw = +document.getElementById("so-kw-su-dung").value;
  var soTienDien = "";
  if (soKw == "") {
    alert("số Kw không hợp lệ, Vui lòng nhập lại");
  } else if (soKw <= 50) {
    soTienDien = soKw * 500;
  } else if (soKw <= 100) {
    soTienDien = (soKw - 50) * 650 + 50 * 500;
  } else if (soKw <= 200) {
    soTienDien = (soKw - 100) * 850 + 50 * 650 + 50 * 500;
  } else if (soKw <= 350) {
    soTienDien = (soKw - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
  } else {
    soTienDien =
      (soKw - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
  }
  var soFormat = new Intl.NumberFormat("VN-vn").format(soTienDien);
  document.getElementById("dap-an-bai-2").innerHTML =
    "Họ tên: " + hoTenKH + "; " + "Tiền điện:" + soFormat;
};

// bài 3

document.getElementById("tinh-tien-thue").onclick = function () {
  var hoTenNCT = document.getElementById("ho-ten-nguoi-dong-thue").value;
  var tongThuNhapNam = +document.getElementById("tong-thu-nhap-nam").value;
  var soNguoiPhuThuoc = +document.getElementById("so-nguoi-phu-thuoc").value;
  var thueTNCN = 0;
  var thuNhapChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
  if (tongThuNhapNam == "") {
    alert("Tổng thu nhập không hợp lệ");
    document.getElementById("dap-an-bai-3").innerHTML = 0;
  } else if (thuNhapChiuThue <= 60e6) {
    thueTNCN = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120e6) {
    thueTNCN = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210e6) {
    thueTNCN = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384e6) {
    thueTNCN = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624e6) {
    thueTNCN = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960e6) {
    thueTNCN = thuNhapChiuThue * 0.3;
  } else if (thuNhapChiuThue > 960e6) {
    thueTNCN = thuNhapChiuThue * 0.35;
  } else {
    alert("Tổng thu nhập không hợp lệ");
  }
  var soFormat = new Intl.NumberFormat("VN-vn").format(thueTNCN);
  document.getElementById("dap-an-bai-3").innerHTML =
    "Họ tên: " +
    hoTenNCT +
    "; " +
    "Tiền thuế thu nhập cá nhân: " +
    soFormat +
    " VND";
};

// bài 4

// onchange Ẩn hiện số kết nối
var loaiKh = document.getElementById("loai-kh");
var soKetNoi = document.getElementById("so-ket-noi");

function anSoketnoi() {
  if (loaiKh.value == 15) {
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.style.display = "none";
  }
}
soKetNoi.style.display = "none";
loaiKh.onchange = anSoketnoi;

// Tính tiền cáp
document.getElementById("tinh-tien-cap").onclick = function () {
  var maKh = document.getElementById("ma-kh").value;
  var soKenhCC = document.getElementById("so-kenh").value;
  var tongTienCap = "";
  switch (loaiKh.value) {
    case "4.5":
      tongTienCap = 4.5 + 20.5 + soKenhCC * 7.5;
      var soFormat = new Intl.NumberFormat("VN-vn", {
        style: "currency",
        currency: "USD",
      }).format(tongTienCap);
      document.getElementById("dap-an-bai-4").innerHTML =
        "Mã Khách Hàng là: " + maKh + ", " + "Tổng tiền cáp là: " + soFormat;
      break;
    case "15":
      if (soKetNoi.value <= 10) {
        tongTienCap = 15 + 75 + 50 * soKenhCC;
        var soFormat = new Intl.NumberFormat("VN-vn", {
          style: "currency",
          currency: "USD",
        }).format(tongTienCap);
        document.getElementById("dap-an-bai-4").innerHTML =
          "Mã Khách Hàng là: " + maKh + ", " + "Tổng tiền cáp là: " + soFormat;
      } else {
        tongTienCap = 15 + 75 + (soKetNoi.value - 10) * 5 + 50 * soKenhCC;
        var soFormat = new Intl.NumberFormat("VN-vn", {
          style: "currency",
          currency: "USD",
        }).format(tongTienCap);
        document.getElementById("dap-an-bai-4").innerHTML =
          "Mã Khách Hàng là: " + maKh + ", " + "Tổng tiền cáp là: " + soFormat;
      }
      break;
    default:
      tongTienCap = "Vui lòng chọn loại Khách Hàng";
      alert(tongTienCap);
  }
};
