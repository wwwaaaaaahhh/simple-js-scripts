var text = prompt('Enter any text to open it in a window');
myWindow = window.open("", "myWindow", "width=300,height=300"); 
myWindow.document.write("<head> <title>&nbsp;</title> </head> <p style+'font-family=sans-serif'>"+text+"</p> <input type='button' onclick='self.close()' value='Close'>"); 
myWindow.focus();