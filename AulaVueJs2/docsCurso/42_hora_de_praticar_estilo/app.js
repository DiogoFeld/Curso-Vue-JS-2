new Vue({
	el: '#desafio',
	data: {
		destaqueAplicar: true,
		classePersonalizada: "purple",
		classePersonalizada2: "",
		classe4Status: true,
		model5: "",
		width6: 0	
	},
	methods: {
		iniciarEfeito() {
			console.log("destaqueAplicar");
			this.destaqueAplicar = !this.destaqueAplicar
		},
		iniciarProgresso() {
			setInterval(() => {
				this.width6 < 100 ? this.width6 =  this.width6+ 2 :  this.width6 = 0;
			}, 200);
		},
		setColor4(event){
			
			if(event.target.value == "true"){
				this.classe4Status = true;
			}
			else{
				this.classe4Status = false;				
			}
		}
	},	
	computed: {
		changeEfeito() {
			return {
				destaque: this.destaqueAplicar,
				encolher: !this.destaqueAplicar
			}
		},
		setWidth6(){
			return{
				width: `${this.width6}%`
			}
		}
	}	
})
