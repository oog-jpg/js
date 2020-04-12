let mas = [1, 2, 3];
let symbol = Symbol.for('Symbol1');

mas[symbol] = function Sum() { 
	let k = 0;
    
	for(let i of mas)
		k+=i;
	
	return k;
};

console.log(mas[symbol]());