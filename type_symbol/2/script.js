let obj = {
	a: 1,
	b: 2,
	c: 3
}

let symbol = Symbol("Symbol1");
obj[symbol] = function fun1() { alert('!') };

obj[symbol]();