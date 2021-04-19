function tehtava2() {
  var vkpv = document.t2.valinta.value;
  switch (vkpv) {
    case '1':
    document.getElementById('t2p').innerHTML = "maanantai";
    break;
    case '2':
    document.getElementById('t2p').innerHTML = "tiistai";
    break;
    case '3':
    document.getElementById('t2p').innerHTML = "keskiviikko";
    break;
    case '4':
    document.getElementById('t2p').innerHTML = "torstai";
    break;
    case '5':
    document.getElementById('t2p').innerHTML = "perjantai";
    break;
    case '6':
    document.getElementById('t2p').innerHTML = "lauantai";
    break;
    case '7':
    document.getElementById('t2p').innerHTML = "sunnuntai";
    break;
  }
}

function tehtava3() {
  var vuosi = document.t3.valinta.value;
  if (vuosi % 4 == 0 && vuosi % 100 !== 0) {
    document.getElementById('t3p').innerHTML = "vuosi on karkausvuosi";
  } else if (vuosi % 400 == 0) {
    document.getElementById('t3p').innerHTML = "vuosi on karkausvuosi";
  } else {
    document.getElementById('t3p').innerHTML = "vuosi ei ole karkausvuosi";
  }
}

function tehtava4() {
  var n1 = parseInt(document.t4.v1.value);
  var n2 = parseInt(document.t4.v2.value);
  var n3 = parseInt(document.t4.v3.value);
  var n4 = parseInt(document.t4.v4.value);
  var n5 = parseInt(document.t4.v5.value);
  var summa = n1 + n2 + n3 + n4 + n5;
  var keskiarvo = summa / 5;
  console.log(n1);
  console.log(summa);
  console.log(keskiarvo);
  document.getElementById('t4p').innerHTML = "lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo;
}

function tehtava5() {
  var luku = document.t5.valinta.value;
  var lause = "";
  lause += luku + " x 1 = " + luku * 1 + "<br>";
  lause += luku + " x 2 = " + luku * 2 + "<br>";
  lause += luku + " x 3 = " + luku * 3 + "<br>";
  lause += luku + " x 4 = " + luku * 4 + "<br>";
  lause += luku + " x 5 = " + luku * 5 + "<br>";
  lause += luku + " x 6 = " + luku * 6 + "<br>";
  lause += luku + " x 7 = " + luku * 7 + "<br>";
  lause += luku + " x 8 = " + luku * 8 + "<br>";
  lause += luku + " x 9 = " + luku * 9 + "<br>";
  lause += luku + " x 10 = " + luku * 10;
  document.getElementById('t5p').innerHTML = lause;
}
