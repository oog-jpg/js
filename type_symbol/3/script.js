let obj = {
	a: 1,
	b: 2,
	c: 3,
};

let symbol = Symbol("Symbol1");

obj[symbol] = function fun1() { 
	let k = 0;
	for(let i in obj) 
        k+=obj[i];
	
	return k;
};

console.log(obj[symbol]());