var socket = io();
var f = document.forms.my;
var col = table.rows.length;
const div1 = document.getElementById("div1");
const newDiv = document.createElement("div");
var d ="a";
var ds = 0;
var ds2 = 0;
var col = col;
var array = new Array(col-1);
for(let i = 1;i<col;i++)
{
  const newBtn = document.createElement("button");
  newBtn.innerHTML ="表示";
  newBtn.value =i;
  newBtn.style="width: 100px; height: 38px; display:flex; flex-flow: column; position: relative; top:55px;";
  newBtn.onclick = () => {
    var c = table.rows[i].cells[1].innerHTML;
    socket.emit('hyou',c);
  }
  newDiv.appendChild(newBtn);
  div1.appendChild(newDiv);
}

f.kekka.addEventListener('click',function(e){
  e.preventDefault();
  socket.emit('kekkahyouji');
})

f.tuika.addEventListener('click',function(e){
  e.preventDefault();
  for(var i = 0;i<col -1;i++){
    if(table.rows[i+1].cells[4].lastElementChild.checked == true){
        array[ds] = new Array(2);
        array[ds][0] = table.rows[i + 1].cells[0].innerHTML;
        array[ds][1] = table.rows[i + 1].cells[2].innerHTML;
        ds = ds + 1;
    }
  }
  console.log(array);
  socket.emit('kaitoutuika',array);
  //socket.emit('kekkahyouji');
})

f.sakuzyo.addEventListener('click',function(e){
    e.preventDefault();
    for(var i = 0;i<col-1;i++){
      if(table.rows[i + 1].cells[5].lastElementChild.checked == true){
        array[ds2] = new Array(1);
        array[ds2][0] = table.rows[i + 1].cells[2].innerHTML
        ds2 = ds2 + 1;
      }
    }
    socket.emit('kaitousakuzyo',array);
})
        
socket.on('yomikomi',function(){
  window.location.href='/mondai3';
})