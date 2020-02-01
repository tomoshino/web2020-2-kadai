
function ChangeImageAndBack2(){
  
  imgback2();
  
  ThreeSecChange2(); 
  
}

function ThreeSecChange2(){
  setTimeout("imgchange2()",3000);
}
function imgchange2() {
  document.getElementById('img2').src = './image/bukatu1.png';
}

//function ThreeSecBack() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
//  setInterval("imgback()",3000);
//}

function imgback2() {
  document.getElementById('img2').src = './image/bukatu2.png';
}