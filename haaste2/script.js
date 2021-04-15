function etsiPS() {

var pieninSuurin = [8, 4, 9, 6, 2];
  pieninSuurin.sort();
  var num1 = pieninSuurin.shift() + "";
  var num2 = pieninSuurin.pop();
  alert(num1+num2);
}

function tasaluku(num) {
  if(num % 2 == 0) {
    alert("parillinen");
  } else {
    alert("pariton");
  }
}

function kuukausi(kk) {
  switch(kk) {
    case 1:
    alert("tammi");
    break;

    case 2:
    alert("helmi");
    break;

    case 3:
    alert("maalis");
    break;

    case 4:
    alert("huhti");
    break;

    case 5:
    alert("touko");
    break;

    case 6:
    alert("kesä");
    break;

    case 7:
    alert("heinä");
    break;

    case 8:
    alert("elo");
    break;

    case 9:
    alert("syys");
    break;

    case 10:
    alert("loka");
    break;

    case 11:
    alert("marras");
    break;

    case 12:
    alert("joulu");
    break;
  }
}

var lista = [];

function henkiloTiedot() {
  var en = document.tiedot.etunim.value;
  var sn = document.tiedot.sukunim.value;
  var os = document.tiedot.osoite.value;
  var pn = document.tiedot.postinum.value;
  var pt = document.tiedot.postitoim.value;
  var puh = document.tiedot.puhelin.value;
  var email = document.tiedot.email.value;
  //var olento = {name: en + " " + sn, address: {address: os, postalCode: pn, city: pt}, contact: {phone: puh, email: email}}
  lista.push([en, sn, os, pn, pt, puh, email]);
  console.log(lista);
}
