class Rentangle{
	constructor(width, height){
		this.elem = document.createElement('div');
        this.setWidth(width);
		this.setHeight(height);
		this.elem.style.border = '2px solid black';
		document.body.appendChild(this.elem);
	}
	
	setWidth(width){
		this.elem.style.width = width;
	}
	
	setHeight(height){
		this.elem.style.height = height;
	}
	
	getWidth(){
		return this.elem.style.width;
	}
	
	getHeight(){
		return this.elem.style.height;
	}
}


addEventListener("click", function(e) {
    if(e.target.id=='b1' )
        {  
            t1.value=elem1.getWidth();
            t2.value=elem1.getHeight();
   } 
        if(e.target.id=='b2' )
        {  
    elem1.setWidth(t1.value);
	elem1.setHeight(t2.value);
   } 
});


var elem1 = new Rentangle(200, 200);





