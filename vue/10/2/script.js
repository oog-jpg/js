let app = new Vue({
	el: '#d1',
	data: {
		text: '',
		obj: [],
	},
	methods: {
		f1: function() {
			for (let i of this.text.split(' ')){
			this.obj.push(i);
			}
		}
	}
});

