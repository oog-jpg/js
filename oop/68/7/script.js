document.getElementById("div2").style.display = "none";
document.getElementById("div3").style.display = "none";


addEventListener("click", function(e) {
    if(e.target.tagName=='IMG')
        {
            
            switch(e.target.id){
                    
                    case"imgstat1":
                    claspet.funstat1();
                    break;
                    
                    case"imgstat2":
                    claspet.funstat2();
                    break;
                    
                    case"imgstat3":
                    claspet.funstat3();
                    break;
                    
                    case"imgstat4":
                    claspet.funstat4();
                    break;
                    
                    case"petf":
                    break;
                    
                default: 
if(document.getElementById("div3").style.display=="none")
                        {
petf.setAttribute('src',e.target.getAttribute('src'));
document.getElementById("div2").style.display = "";   
                        }
                    break;
                    
            }
        }
    
       if(e.target.id=='b1' )
        {
            if(name1.value =="")
            {alert("у питомца должно быть имя");}
            else
                {
                    p1.innerHTML="Питомец: "+name1.value;
            document.getElementById("name1").style.display = "none";
            document.getElementById("b1").style.display = "none";
            document.getElementById("div3").style.display = "";
            claspet.downstat1();
                    claspet.downstat2();
                    claspet.downstat3();
                    claspet.downstat4();
                 claspet.timer();
                }
        }
      
});


class Claspet {
    
    constructor(stat1,stat2,stat3,stat4)
    {
        this.stat1=stat1;
        this.stat2=stat2;
        this.stat3=stat3;
        this.stat4=stat4;
    }
    
    funstat1(){

        this.stat1+=10
        
        if((this.stat1+=10)>100)
        this.stat1=100;
    }
    
     funstat2(){

     if((this.stat2+=10)>100)
        this.stat2=100;
         this.stat3-=5;
    }
    
     funstat3(){
        if((this.stat3+=50)>100)
        this.stat3=100;
        this.stat2-=10;
    }
    
     funstat4(){

     if((this.stat4+=60)>100)
        this.stat4=100;
        this.stat1-=10;
         this.stat2-=30;
         this.stat3-=40;
    }
    
      
    
    
downstat1(){ 
let timerId9 = setTimeout(function tick9() {
    
    
    if(claspet.stat1--<=0)claspet.stat1=0;
    else timerId9 = setTimeout(tick9, 300);
    
}, 0);} 
    
    downstat2(){ 
let timerId8 = setTimeout(function tick8() {

    if(claspet.stat2--<=0)claspet.stat2=0;
    else timerId8 = setTimeout(tick8, 500);
    
}, 0);} 
    
    downstat3(){ 
let timerId7 = setTimeout(function tick7() {
    
    if(claspet.stat3--<=0)claspet.stat3=0;
    else timerId7 = setTimeout(tick7, 1000);
    
}, 0);} 
    
    downstat4(){ 
let timerId6 = setTimeout(function tick6() {
    
    if(claspet.stat4--<=0)claspet.stat4=0;
    else timerId6 = setTimeout(tick6, 1700);
    
}, 0);} 
    
    timer(){ 
        	window.timerId10 = window.setInterval(timer1, 100);
let year=0; let time=0;
        function timer1() {
            
          if(++time>=60)
              {
                  time=0;
                  p2.innerHTML="Прожил "+ ++year + "дней";
              }
            
let mas1=[progres1,progres2,progres3,progres4,
         claspet.stat1,claspet.stat2,claspet.stat3,claspet.stat4];
            

for (let i=0;i<4;i++)
{
mas1[i].style.width = mas1[i+4] + '%';  
mas1[i].innerHTML = mas1[i+4] * 1  + '%';
    
 if(mas1[i+4]>60) mas1[i].style.backgroundColor = 'greenyellow';
else if(mas1[i+4]>20) mas1[i].style.backgroundColor = 'yellow';
else if(mas1[i+4]>0) mas1[i].style.backgroundColor = 'red';
    else {window.clearInterval(window.timerId10);
    alert("конец");
         }
    
                }
                           }

    }
    

    
} 

var claspet = new Claspet(70,70,70,70);


