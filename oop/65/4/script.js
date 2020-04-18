var rad=document.getElementsByName('r1');

class MyString{
	reverse(str){
		return str.split('').reverse().join('');
	}
	ucFirst(str){
		return str[0].toUpperCase()+str.slice(1);
	}
	ucWords(str){
		let words = str.split(' ');
		for(let i=0; i<words.length; i++)
		words[i] = words[i].slice(0, 1).toUpperCase()+words[i].slice(1);
		
		return words.join(' ');
	}
}




addEventListener("click", function(e) {
    if(e.target.id=='b1' )
        {  
          let MyStr = new MyString;
	
            for (var i=0;i<rad.length; i++) {
               
        if (rad[i].checked) {
             switch(rad[i].value-1){
		case 0: t1.value = MyStr.reverse(t1.value); break;
		case 1: t1.value = MyStr.ucFirst(t1.value); break;
		case 2: t1.value = MyStr.ucWords(t1.value); break;
	       }
        }
    }

   } 
});




