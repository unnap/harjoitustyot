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

function tehtava5() {
  var hiphei = "";
  for (i = 1; 100 >= i; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      hiphei += "hipheijaa ";
    } else if(i % 3 == 0) {
      hiphei += "hip ";
    } else if(i % 5 == 0) {
      hiphei += "heijaa ";
    } else {
      hiphei += i + " ";
    }
  }
  document.getElementById('t5p').innerHTML = hiphei;
}

function tehtava6() {
  var kymppi = "";
  for (i = 1; 10 >= i; i++) {
  kymppi += i + " ";
  }
  document.getElementById('t6p').innerHTML = kymppi;
}

function tehtava7() {
  var kymppi = 0;
  for (i = 1; 10 >= i; i++) {
  kymppi += i;
  }
  document.getElementById('t7p').innerHTML = kymppi;
}

function tehtava8() {
  var luku = document.t8.valinta1.value;
  var potenssi = document.t8.valinta2.value;
  document.getElementById('t8p').innerHTML = Math.pow(luku,potenssi);
}

function tehtava9() {
  var luvut = [];
  luvut.push(document.t9.valinta1.value, document.t9.valinta2.value, document.t9.valinta3.value, document.t9.valinta4.value, document.t9.valinta5.value);
  luvut.sort((a,b)=>a-b);
  document.getElementById('t9p').innerHTML = "suurin luku on " + luvut.pop() + "<br>pienin luku on " + luvut.shift();
}

function tehtava10() {
  var sana = document.t10.valinta.value;
  var aakkoset = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZåÅäÄöÖ";
  var salasana = "";
  for (i = 0; i < sana.length; i++) {
    salasana += sana[i] + aakkoset.charAt(Math.floor(Math.random() * aakkoset.length));
  }
  document.getElementById('t10p').innerHTML = "salasanasi on: " + salasana;
}

function tehtava11() {
  var pienempi = document.t11.valinta1.value;
  var isompi = document.t11.valinta2.value;
  if(pienempi > isompi) {
    document.getElementById('t11p').innerHTML = "pistä se pienempi numero sinne ylempään";
  } else {
    alert('koodi kesken');
  }
}
