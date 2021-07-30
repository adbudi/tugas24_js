function angkaShort() {
  var angka = [32,33,16,40,9,7,11,2,44,1,66];
  console.log('Sebelumnya :',angka);
  angka=angka.sort()
  return angka;
   }
console.log('Ascending :', angkaShort());
function panggilRevese() {
  var angka = [32,33,16,40,9,7,11,2,44,1,66];
  return angka.reverse()
}
console.log('Decending :',panggilRevese());
