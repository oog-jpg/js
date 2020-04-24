let app = new Vue({
	el: '#d1',
	data: {
		obj: [-5, -1, 0, 1, 5, 9, 10, 11],
	},
	methods: {
		f1: function() {
			this.obj = this.obj.filter(function(i) {
			if (i <= 10 && i >= 0) return true;
			 else return false;
		});
		}
	}
});