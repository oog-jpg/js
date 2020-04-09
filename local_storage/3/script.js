document.addEventListener("DOMContentLoaded", function() {
     document.querySelectorAll('textarea, input, select').forEach(function(e) {    
        switch(e.type)
            {
                case "textarea":
                    e.value=localStorage[e.id]; 
                    break;
                    
                     case "text":
                   e.value=localStorage[e.id]; 
                    break;
                    
                     case "checkbox":
                    if(localStorage[e.id] =="true")  e.checked=true;   
                    else  e.checked=false;
                    break;
                    
                     case "radio":
                   if(localStorage[e.id] =="true")  e.checked=true;   
                    else  e.checked=false;
                    break;
                    
                     case "select-one":
                     e.value=localStorage[e.id]; 
                    break;               
            }
    })    

}); 


function qwe(){
        document.querySelectorAll('textarea, input, select').forEach(function(e) {  
        switch(e.type)
            {
                case "textarea":
                      localStorage.setItem(e.id, e.value);
                    break;
                    
                  case "text":
                      localStorage.setItem(e.id, e.value);
                    break;
                    
                     case "checkbox":             
                    localStorage.setItem(e.id, e.checked);
                    break;
                    
                     case "radio":                 
                     localStorage.setItem(e.id, e.checked);
                    break;
                    
                     case "select-one":            
                     localStorage.setItem(e.id, e.value);
                    break;    
            }
    })    
}

window.addEventListener("beforeunload", function(){ qwe();})
window.onbeforeunload = function() { qwe();};