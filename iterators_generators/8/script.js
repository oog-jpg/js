let mas = [1,2,3,4,5,6,7];

function *createiterator(mas){
	for(let i=0; i<mas.length; i++)
		yield [mas[i],mas[++i]];	
}

for(let i of createiterator(mas))
	console.log(i);