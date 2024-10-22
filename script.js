


function enter() { 
    let age = document.getElementById("age").value;
    let vip = document.getElementById("vip").checked;

    if (vip) { alert ("Welcome in my best VIP customer :)")
    }
else if (age >= 18) { 
        alert ("Access granted")
      }
      else {
       alert ("Access denied") 
        }
   
}



