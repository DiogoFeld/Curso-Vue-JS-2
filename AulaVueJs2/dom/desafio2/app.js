new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertTrigger(){
            alert("Botao foi Apertado")
        },
        updateValue(event){
            this.valor = event.target.value;
        }
    }
})