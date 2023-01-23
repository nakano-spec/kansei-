//簡易タイマーを作成
var socket = io();
var hyoujiindex = 0;
var timer = document.getElementById('mytime');
var timer2 = timer.innerText;
var timer3 = parseInt(timer2/60,10);
var timer4 = timer2%60
const rows = JSON.parse('<%- JSON.stringify(web) %>');
const class1 = "example";
console.log(rows[0].picturename);
var doc = document.getElementById('picture');
if(rows[0].picturename){
  doc.innerHTML ="<img src=images/" + rows[0].picturename + " class=" + class1 +">" 
}
var countdownid1 = setInterval(function(){
          timer4 --;
          re.innerText=timer3;
          re3.innerText = timer4;
          if(timer3 >0 && timer4 == 0){
              timer3 --;
              timer4 = 59;
          }
          if(timer3 == 0 && timer4 == 0){
              clearInterval(countdownid1);
          }
      }, 1000);

      socket.on('hyouji',function(de){
        window.location.href ='/hyou3?data=' + encodeURIComponent(de);
      })

      socket.on('kekkahyouji2',function(){
        window.location.href='/hyou4';
      })