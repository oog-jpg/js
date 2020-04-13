let map = new Map();

map.set(1, 1);
map.set('qwe', 2);
map.set('', 3);

let mas = [];

for(let i of map.keys())
	mas.push(i);

console.log(mas);