
var k =localStorage.getItem('k1')
var kk=k;
ta1.value=localStorage['key'+k];


ta1.oninput = function() {
       k++;
     kk=k;
        localStorage.setItem('key'+k, ta1.value);
        localStorage.setItem('k1', k);
};

addEventListener("click", function(e) {
    

    if(e.target.id=='b1' && kk>0)
        {
            kk--;
ta1.value=localStorage['key'+kk];
        }
    
       if(e.target.id=='b2')
        {
            localStorage.clear();
        }
    
     if(e.target.id=='b3' && kk<k)
        {
 kk++;
ta1.value=localStorage['key'+kk];
        }
 
});