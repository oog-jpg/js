let app = new Vue({
	el: '#d1',
	data: {
		text: '',
	},
	methods: {
		f1: function() {
			this.text = 'left';
		},
        f2: function() {
			this.text = 'right';
		},
        f3: function() {
			this.text = 'middle';
		}
	}
});