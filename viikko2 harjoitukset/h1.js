function tehtava1()  {
  var t1numerot = [];
  t1numerot.push(document.t1.t1num1.value);
  t1numerot.push(document.t1.t1num2.value);
  t1numerot.push(document.t1.t1num3.value);
  document.getElementById('t1p').innerHTML = t1numerot.sort((a,b)=>a-b);
}

function tehtava2()  {
  var t2numerot = [];
  t2numerot.push(document.t2.t2num1.value);
  t2numerot.push(document.t2.t2num2.value);
  t2numerot.push(document.t2.t2num3.value);
  t2numerot.push(document.t2.t2num4.value);
  t2numerot.push(document.t2.t2num5.value);
  document.getElementById('t2p').innerHTML = Math.max(...t2numerot);
}

function tehtava3() {
  if(document.t3.t3num1.value % 2 == 0) {
    document.getElementById('t3p').innerHTML = "parillinen";
  } else {
    document.getElementById('t3p').innerHTML = "pariton";
  }
}

function tehtava4() {
  if(document.t4.t4num1.value < 16) {
    document.getElementById('t4p').innerHTML = "polkypyörä";
  } else if(document.t4.t4num1.value < 18) {
    document.getElementById('t4p').innerHTML = "mopo";
  } else {
    document.getElementById('t4p').innerHTML = "auto";
  }
}

function tehtava5() {
  switch(document.t5.t5valinta.value) {
    case 't5v1':
    document.getElementById('t5p').innerHTML = "Hello world!";
    break;
    case 't5v2':
    document.getElementById('t5p').innerHTML = "Hej världen!";
    break;
    case 't5v3':
    document.getElementById('t5p').innerHTML = "¡Hola Mundo!";
    break;
  }
}
