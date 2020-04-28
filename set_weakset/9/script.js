let set = new Set();

addEventListener("click", function(e) {
    
    if(e.target.id=='b1')
        {
    if(!set.has(i1.value))
            {
            p1.innerHTML += i1.value + ', ';
	        set.add(i1.value);
            }
        }
});