function tehtava1() {
  var valinta = document.t1.valinta.value;
  if (valinta % 2 == 0) {
    for (lista = ""; valinta > 0; valinta -= 2) {
      lista += valinta + "<br>";
    }
    document.getElementById('t1p').innerHTML = lista;
  } else {
    document.getElementById('t1p').innerHTML = "ei ole parillinen";
  }
}

function tehtava2() {
  var sana = document.t2.valinta.value;
  var salasana = "";
  for (i = 0; i < sana.length; i++) {
    salasana += sana[i] + "Ö";
  }
  document.getElementById('t2p').innerHTML = "salasanasi on: " + salasana;
}

function tehtava3() {
  var sana = document.t3.valinta.value;
  var onkoO = /ö/i;
  if (onkoO.test(sana)) {
    document.getElementById('t3p').innerHTML = "löysin Ö:n!!";
  } else {
    document.getElementById('t3p').innerHTML = "ei ollut öitä";
  }
}

function tehtava4() {
  var luku = document.t4.valinta.value;
  var kerto = 1;
  for (i = luku; i > 1; i--) {
    kerto *= i;
  }
  document.getElementById('t4p').innerHTML = "luvun " + luku + " kertoma on " + kerto;
}

/* työn alla
function tehtava5() {
  for () {

  }
}
*/
