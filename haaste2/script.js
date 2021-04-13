function etsiPS() {

var pieninSuurin = [8, 4, 9, 6, 2];
  pieninSuurin.sort();
  var num1 = pieninSuurin.shift() + "";
  var num2 = pieninSuurin.pop();
  alert(num1+num2);
}
