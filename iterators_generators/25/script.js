addEventListener("click", function(e) {
    
    if(e.target.id=='b1' )
        {
        for(let [key, i] of document.querySelectorAll('p').entries())
		i.innerHTML += (++key);
        }
    
});