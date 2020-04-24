let app = new Vue({
	el: '#p1',
	data: {
		str:new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate(),
	},
	filters: {
		f1: function(str) {
			return (str.split('-').reverse().join('.'));
		}
	}
});