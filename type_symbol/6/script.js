function randomint(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var fun1 = Symbol.for('Symbol1');

function masgen(){
	let mas = [];

	for(let i=0; i<5; i++)
     mas[i] = randomint(1, 10);
        
	mas[fun1] = function(){
		let k = 0;
		for(let a of this){
			k+=a;
		}
		return k;
	}
	console.log(mas[fun1]());
	return mas;
}


function fun2(mas1, mas2){
	let mas = [];
	for(let a of mas1)
    {
		for(let b of mas2)
        {
			if(a == b)
            {
                let pr=true;
                
                  for(let c of mas)
                  {
                      if(a == c) pr=false;     
                  }
                if(pr) mas.push(a);   
            }

		}
	}
   
	mas[fun1] = function(){
		let k = 0;
		for(let a of this){
			k+=a;
		}
		return k;
	}
	console.log(mas[fun1]());
	return mas;
}

let mas1 = masgen();
let mas2 = masgen();

console.log(mas1);
console.log(mas2);
console.log(fun2(mas1, mas2));

