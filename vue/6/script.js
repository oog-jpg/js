let app = new Vue({
	el: '#d1',
	data: {
		obj: [2, 3, 4, 5, 6, 7, 8, 9, 10],
	},
methods: {
		f1: function(k) {
			this.obj.splice(k, 0, Math.pow(this.obj.splice(k, 1), 2));
		}
	}
});