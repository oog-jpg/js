let app = new Vue({
	el: '#d1',
	data: {
		show: true,
	},
	methods: {
		f1: function() {
			this.show = !this.show;
		}
	}
});

