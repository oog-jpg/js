let app = new Vue({
	el: '#d1',
	data: {
		text: 'text1',
	},
	methods: {
		f1: function() {
				this.text = 'text2';
			}
		}
});
