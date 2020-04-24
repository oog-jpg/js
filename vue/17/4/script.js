let app = new Vue({
	el: '#d1',
	data: {
		text: '',
	},
	methods: {
		f1: function() {
				this.text = "<button v-on:click='f1'>кнопка</button>";
			}
		}
});