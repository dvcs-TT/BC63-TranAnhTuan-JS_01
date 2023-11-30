// số tự nhiên có 2 chữ số
var n = 83;
// chữ số hàng đơn vị
var donVi = n % 10;
// chữ số hàng chục
var chuc = Math.floor(n / 10);
// Tổng chữ số hàng đơn vị và chữ số hàng chục
var tongKySo = donVi + chuc;
console.log(`Tổng 2 ký số của số vừa nhập =`, tongKySo)