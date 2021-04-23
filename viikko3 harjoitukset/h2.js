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
