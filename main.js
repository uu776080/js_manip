const btn1 = document.getElementById('-red');
const btn2 = document.getElementById('+red');
const btn3 = document.getElementById('-green');
const btn4 = document.getElementById('+green');
const btn5 = document.getElementById('-blue');
const btn6 = document.getElementById('+blue');
const btn7 = document.getElementById('reset');
const btn8 = document.getElementById('incH');
const btn9 = document.getElementById('incW');

let x = 0;
let y = 0;
let z = 0;
let w = 200;
let h = 200;

const info = document.getElementById('info');
const chcol = document.getElementById('chcol');
chng();
wSize();
hSize();

function chng() {
  //document.body.style.backgroundColor = 'rgb('+x+','+y+','+z+')';
  chcol.style.backgroundColor = 'rgb('+x+','+y+','+z+')';
  info.textContent = 'color is ' + chcol.style.backgroundColor;
  if (x>255) {
    x=255;
  } else if (x<0) {
    x=0;
  }
  if (y>255) {
    y=255;
  } else if (y<0) {
    y=0;
  }
  if (z>255) {
    z=255;
  } else if (z<0) {
    z=0;
  }
}
  let btns = document.getElementsByTagName('button');
function nega(e) {
  e.target.style.backgroundColor = '#000000';
  e.target.style.color = '#ffffff';
}
function wSize() {
  chcol.style.width = w+'px';
}
function hSize() {
  chcol.style.height = h+'px';
}
function reset() {
  chng(x=0,y=0,z=0);
  hSize(h=200);
  wSize(w=200);
}
function chX() {

}

btn1.onclick = () => chng(x-=30);
btn2.onclick = () => chng(x+=30);
btn3.onclick = () => chng(y-=30);
btn4.onclick = () => chng(y+=30);
btn5.onclick = () => chng(z-=30);
btn6.onclick = () => chng(z+=30);
btn7.onclick = () => reset();
btn9.onclick = () => wSize(w+=20);
btn8.onclick = () => hSize(h+=20);
