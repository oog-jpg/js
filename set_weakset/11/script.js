let set = new Set();
		
addEventListener("click", function(e) {
    
    if(e.target.id=='b1')
        {
        for(let i of set)
            i.innerHTML += '!';
        set.clear();
        }

      if(e.target.tagName=="P")
        {
        set.add(e.target);
        }
});