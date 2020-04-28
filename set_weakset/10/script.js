let set = new Set();
let mas = [1, 2, 3, 1, 2, 3, 4];
console.log(f1(mas));
		
function f1(mas){
return Array.from(new Set(mas));
}