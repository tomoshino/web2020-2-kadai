
function hyoji2(){
//表示する文字
var str ="テニス";
//テキストボックスの文字数
var cnt = document.timer2.moji2.value.length;
//文字が全部表示されているか確認
if ( cnt < 3 ){
//現在より1文字多く切り出して表示
document.timer2.moji2.value = str.substr(0,cnt+1);}
else{
//全て表示されたら、空文字に戻す
document.timer2.moji2.value ="";}
//setTimeout()を含む関数を呼び出す
setTimeout("hyoji2()",1000);}

function hyoji3(){
//表示する文字
var str ="ボランティア";
//テキストボックスの文字数
var cnt = document.timer3.moji3.value.length;
//文字が全部表示されているか確認
if ( cnt < 6 ){
//現在より1文字多く切り出して表示
document.timer3.moji3.value = str.substr(0,cnt+1);}
else{
//全て表示されたら、空文字に戻す
document.timer3.moji3.value ="";}
//setTimeout()を含む関数を呼び出す
setTimeout("hyoji3()",1000);}