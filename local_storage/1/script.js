
ta1.value = localStorage.getItem("key1");
ta1.oninput=function(){
	localStorage.setItem("key1", ta1.value);
    console.log(ta1.value);
};