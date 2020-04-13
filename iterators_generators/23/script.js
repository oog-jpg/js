let str = '1a2b3c';
console.log(fun1(str));

function fun1(str){
	return [...str].reverse().join('');
}