var rand = Math.floor(Math.random() * 1000) + 1; myWindow = window.open("", "myWindow", "width=200,height=119"); 
myWindow.document.write("<head> <title>Random</title> </head> <p id='txt'>Your number is "+rand+"</p> <button onclick='self.close()'>Close</button>"); 
myWindow.focus()