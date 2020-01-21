
function ChangeImageAndBack(){
  
  imgback();
  
  ThreeSecChange1(); 
  
}

function ThreeSecChange1(){
  setTimeout("imgchange1()",3000);
}
function imgchange1() {
  document.getElementById('img1').src = './image/syumi1.png';
}

//function ThreeSecBack() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
//  setInterval("imgback()",3000);
//}

function imgback() {
  document.getElementById('img1').src = './image/syumi2.png';
}