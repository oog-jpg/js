let obj = {
	a: 1,
	b: 2,
	c: 3,
    d: 4,
    f: 'qwe',
};

for(let i of createiterator(obj))
	console.log(i);


function *createiterator(mas){
	for(let i in mas)
        yield mas[i];
}