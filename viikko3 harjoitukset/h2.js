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
  var taulu = "<table border='1' style='border-collapse: collapse'>";
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
  document.getElementById('t3p').innerHTML = "[" + array1 + "]" + "<p>" + taulu + "</table>" + "</p>";
}


//ANTEEKSI MÄ INNOSTUIN TÄMÄN TEHTÄVÄN KANSSA
//HALUSIN TEHDÄ EKSTRAA
//ANTEEKSI JOS TÄMÄ ON ÄRSYTTÄVÄ ARVIOIDA
//MUTTA MULLA OLI HAUSKAA JA OPIN ASIOITA!!!
function tehtava4() {
  var maat = ["&#9824;", "&#9825;", "&#9826;", "&#9827;"];
  var arvot = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var pakka = [];
  var showPakka = "<table border='1' style='border-collapse: collapse'>";
  var pakkaArr = [];
  var kortit = [];

  //Pakan luonti
  for (m = 0; m < 4; m++) {
    for (a = 0; a < 13; a++) {
      pakka.push(maat[m] + arvot[a]);
    }
  }
  console.log("raw pakka");
  console.log(pakka);

  //Pakan sekoitus
  for (s = pakka.length - 1; s > 0; s--) {
    var shuffle = Math.floor(Math.random() * (s + 1));
    var temp = pakka[s];
    pakka[s] = pakka[shuffle];
    pakka[shuffle] = temp;
  }
  console.log("sekoitus");
  console.log(pakka);

  //Korttien valinta
  var pakkaValinta = [...pakka];
  /*opin tässä kohtaa että pakkaValinta = pakka; on tosi huono tapa
  kopioida taulu jos haluan pitää alkuperäisen muuttumattomana*/
  for (v = 0; v < 5; v++) {
    kortit.push(pakkaValinta.splice(Math.floor(Math.random() * 52), 1));
  }
  var k1 = kortit[0];
  var k2 = kortit[1];
  var k3 = kortit[2];
  var k4 = kortit[3];
  var k5 = kortit[4];

  //Myöhempää looppia varten
  for (ar = 0; ar < pakka.length; ar += 4) {
    pakkaArr.push([pakka[ar], pakka[ar+1], pakka[ar+2], pakka[ar+3]]);
  }

  //Tekee pakasta html tablen ja highlightaa valitut kortit
  for (tr = 0; tr < pakkaArr.length; tr++) {
    showPakka += "<tr>";
    for (td = 0; td < pakkaArr[tr].length; td++) {
      if (pakkaArr[tr][td] == k1 || pakkaArr[tr][td] == k2 || pakkaArr[tr][td] == k3 || pakkaArr[tr][td] == k4 || pakkaArr[tr][td] == k5) {
        showPakka += "<td style='background-color: #f44'>" + pakkaArr[tr][td] + "</td>";
      } else {
        showPakka += "<td>" + pakkaArr[tr][td] + "</td>";
      }
    }
    showPakka += "</tr>";
  }
  console.log("pakka");
  console.log(pakka);
  console.log("pakkaArr");
  console.log(pakkaArr);
  console.log("kortit");
  console.log(kortit);
  console.log("showPakka");
  console.log(showPakka);
  //jätän nää console.logit tänne ihailtavaksi.
  //hitsin pakkaValinta = pakka....
  document.getElementById('t4p').innerHTML = "Korttisi ovat: " + kortit + "<br>" + showPakka + "</table>";
}
