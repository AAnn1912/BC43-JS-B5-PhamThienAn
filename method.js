// Layout

var open1 = document.getElementById("close1");
var open2 = document.getElementById("close2");
var open3 = document.getElementById("close3");
var open4 = document.getElementById("close4");
var bookOpen1 = "./img/iconJSB5/edu-open.png";
var bookOpen2 = "./img/iconJSB5/elec-open.png";
var bookOpen3 = "./img/iconJSB5/tax-open.png";
var bookOpen4 = "./img/iconJSB5/knowledge.png";
var bookClose1 = "./img/iconJSB5/educational-book.png";
var bookClose2 = "./img/iconJSB5/electricity-book.png";
var bookClose3 = "./img/iconJSB5/tax.png";
var bookClose4 = "./img/iconJSB5/coding-book.png";
var bai1 = document.getElementById("one");
var bai2 = document.getElementById("two");
var bai3 = document.getElementById("three");
var bai4 = document.getElementById("four");
open1.src = bookOpen1;
// Bài 1
document.getElementById("bai-1").onclick = function () {
  open1.src = bookOpen1; // Bài 1
  open2.src = bookClose2;
  open3.src = bookClose3;
  open4.src = bookClose4;
  bai1.style.display = "block"; // Bài 1
  bai1.className = "one-c fade1";
  bai2.style.display = "none";
  bai3.style.display = "none";
  bai4.style.display = "none";
};

// Bài 2

document.getElementById("bai-2").onclick = function () {
  open1.src = bookClose1;
  open2.src = bookOpen2; // Bài 2
  open3.src = bookClose3;
  open4.src = bookClose4;
  bai1.style.display = "none";
  bai2.style.display = "block"; // Bài 2
  bai2.className = "two-c fade1";
  bai3.style.display = "none";
  bai4.style.display = "none";
};

// Bài 3

document.getElementById("bai-3").onclick = function () {
  open1.src = bookClose1;
  open2.src = bookClose2;
  open3.src = bookOpen3; // Bài 3
  open4.src = bookClose4;
  bai1.style.display = "none";
  bai2.style.display = "none";
  bai3.style.display = "block"; // Bài 3
  bai3.className = "three-c fade1";
  bai4.style.display = "none";
};

// Bài 4

document.getElementById("bai-4").onclick = function () {
  open1.src = bookClose1; // Bài 4
  open2.src = bookClose2;
  open3.src = bookClose3;
  open4.src = bookOpen4;
  bai1.style.display = "none"; // Bài 4
  bai2.style.display = "none";
  bai3.style.display = "none";
  bai4.style.display = "block";
  bai4.className = "four-c fade1";
};
