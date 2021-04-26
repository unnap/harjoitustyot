function tehtava1() {
  var valinta = document.t1.valinta.value;
  var pisteet = 0;
/*  console.log(valinta[2]);
  switch (valinta[3]) {
    case "T":
      console.log("tööt");
      break;
    default:
      console.log("tuut");
  }*/
  for (i = 0; i < valinta.length; i++) {
    switch (valinta.toUpperCase()[i]) {
      case "A":
      case "E":
      case "I":
      case "N":
      case "S":
      case "T":
      pisteet++;
      break;

      case "O":
      case "Ä":
      case "K":
      case "L":
      pisteet += 2;
      break;

      case "U":
      case "M":
      pisteet += 3;
      break;

      case "Y":
      case "H":
      case "J":
      case "P":
      case "R":
      case "V":
      pisteet += 4;
      break;

      case "Ö":
      case "D":
      pisteet += 7;
      break;

      case "B":
      case "F":
      case "G":
      pisteet += 8;
      break;

      case "C":
      pisteet += 10;
      break;

      default:
      pisteet += 12;
    }
  }
  document.getElementById('t1p').innerHTML = "sanan " + valinta + " pisteet ovat: " + pisteet;
}

function tehtava2() {
  var lotto = [];
  for (i = 0; i<7; i++) {
  lotto.push(Math.floor(Math.random() * 40) + 1);
  }
  document.getElementById('t2p').innerHTML = lotto;
}

function tehtava3() {
  var array1 = [];
  var array2 = [];
  var taulu = "<table border='1' style='border-collapse: collapse'>"
  for (i = 0; i < 5; i++) {
    var n1 = Math.floor(Math.random() * 99) + 1;
    var n2 = Math.floor(Math.random() * 99) + 1;
    var n3 = Math.floor(Math.random() * 99) + 1;
    var n4 = Math.floor(Math.random() * 99) + 1;
    array1.push("[" + [n1, n2, n3, n4] + "]");
    array2.push([n1, n2, n3, n4]);
    if (array2.length === 5) {
      for (b = 0; b < 5; b++) {
        taulu += "<tr>";
        for (c = 0; c < array2[b].length; c++) {
          taulu += "<td>" + array2[b][c] + "</td>";
        }
        taulu += "</tr>";
      }
    }
  }
  console.log(array1);
  console.log(array2.length);
  document.getElementById('t3p').innerHTML = array1 + "<p>" + taulu + "</table>" + "</p>";
}

function tehtava4() {
  var maat = ["&#9824;", "&#9828;", "&#9829;", "&#9825;"]
  var arvot = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
  var pakka = [];
  for (m = 0; m < 4; m++) {
    for (a = 0; a < 13; a++) {
      pakka.push(maat[m] + arvot[a]);
    }
  }
  /*var maa = 0;
  var arvo = 0;
  for (a = 0; a < 5; a++) {
    maa = Math.floor(Math.random() * 4);
    arvo = Math.floor(Math.random() * 13);
    kortit.push(maat[maa] + arvot[arvo]);
  }*/
  console.log(pakka);
  //document.getElementById('t4p').innerHTML = pakka;
}
