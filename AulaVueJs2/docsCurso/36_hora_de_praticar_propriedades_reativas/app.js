new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            console.log("método chamado")
            return this.valor == 37 ? 'Valor Igual' : "Valor Diferente" ;
        }
    },
    watch:{
        valor(former,now){
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    },
    methods:{     
    }
});