
var k =localStorage.getItem('k1')
var kk=k;
qwe(kk);


function qwe(kk){
    if(localStorage['key'+kk]!=null)
        {
              var str=localStorage['key'+kk].split('~');       
            p1.innerHTML=str[2];
            p2.innerHTML=str[0];
            p3.innerHTML=str[1];  
        }

}





//localStorage.clear();
addEventListener("click", function(e) {
    if(e.target.id=='bdown' && kk>1)
        {
            kk--;
            qwe(kk);
        }
    
     if(e.target.id=='bup' && kk<k)
        {
            kk++;
           qwe(kk);
        }
 
     if(e.target.id=='bsave' )
        {
           
             var date = new Date();
            data=date.getHours()+":"+date.getMinutes()+" "+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
            k++;
            kk++;
        localStorage.setItem('key'+k,text1.value+"~"+text2.value+"~"+data);
        localStorage.setItem('k1', k);
            qwe(kk);
          
        }
    
});
