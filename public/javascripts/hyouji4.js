//サーバーから送られてきた配列データをJSON形式で格納し、中のデータの数分表を作り、結果に合わせて表の色を変えている。
var socket = io();
const rows = JSON.parse('<%- JSON.stringify(han1) %>');
var rowlen = rows.length;
var rowlen2 = parseInt(rowlen/12) + 1;
var a = 0;
var b = 0;
var c = 0;
var myd = document.getElementById("box");
var i = 0;
var j = 0;
var table1 = document.createElement("table");
var tbody1 = document.createElement("tbody");
while(i < rowlen2){
    var tr1 = document.createElement("tr");
    while(j < rowlen && j != 12){
      var td1 = document.createElement("td");  
      a = rows[j].username;
      td1.textContent = a;
      b = rows[j].han;
      tr1.appendChild(td1);
      if(b === "○"){
        td1.setAttribute("bgcolor","#FF0000");
      }else if(b === "✕"){
        td1.setAttribute("bgcolor","#0000FF");
      }
      td1.setAttribute("width","80px");
      td1.setAttribute("height","80px");
      td1.setAttribute("align","center");
      j = j+1;
    }
    tbody1.appendChild(tr1);
    i = i + 1;
}
table1.appendChild(tbody1);
myd.appendChild(table1);
table1.setAttribute("border","2px");
table1.setAttribute("align","center");
//押されたらサーバーにsocket.ioを使ってイベントを起動する・
function osareta(){
  socket.emit('syokika');
}
