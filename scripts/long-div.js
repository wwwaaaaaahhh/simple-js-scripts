var x = prompt("What is X? (X̲̭̅ ÷ Y)");
var y = prompt("What is Y? (X ÷ Y̲̭̅)"); 
var xNum = Number(x); var yNum = Number(y); 
var z = xNum / yNum; var zFloor = Math.floor(z); 
var zRemainder = xNum % yNum; 
if (zRemainder == 0) { alert(zFloor) } 
else { alert(zFloor + " R " + zRemainder + "\n(" + z + ")") }