var rad=document.getElementsByName('r1');

class Valiator{
	IsEmail(str){
		return /@\w+\.\w+$/.test(str);
	}
	IsDomain(str){
		return /\w+\.\w+/.test(str);
	}
	IsDate(str){
		return /\d{2}\.\d{2}\.\{4}/.test(str);
	}
	IsPhone(str){
		return /\+\d{11}$/.test(str);
	}
}

addEventListener("click", function(e) {
    if(e.target.id=='b1' )
        {  
         let MyStr = new Valiator();
            for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
             switch(rad[i].value-1){
		case 0: console.log(MyStr.IsEmail(t1.value)); break;
		case 1: console.log(MyStr.IsDomain(t1.value)); break;
		case 2: console.log(MyStr.IsDate(t1.value)); break;
		case 3: console.log(MyStr.IsPhone(t1.value)); break;
	       }
        }
    }

   } 
});
