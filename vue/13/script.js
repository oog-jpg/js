let app = new Vue({
	el: '#d1',
	data: {
		cb1: false,
		col: 'black',
	},
	methods: {
	f1: function() {
        if(this.cb1) 
            this.col = 'black' 
        else 
            this.col = 'red';
	}
	}
});