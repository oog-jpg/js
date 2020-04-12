let obj = {
	a: 1,
	b: 2,
	c: 3
}

let symbol = Symbol("Symbol1");
obj[symbol] = 'Symbol1';

for(let i in obj)  
    console.log(obj[i]);
