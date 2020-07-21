var rand = Math.random() * 1001;myWindow = window.open("", "myWindow", "width=200,height=141"); 
myWindow.document.write("<head> <title>Random</title> </head> <p>Your number is "+rand+"</p> <button onclick='self.close()'>Close</button>"); 
myWindow.focus()