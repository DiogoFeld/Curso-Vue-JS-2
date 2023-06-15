import Vue from 'vue'
export default new Vue({
    methods:{
        alterarIdade(callback){
            this.$emit("idadeMudou",callback)
        },
        quandoIdadeMudar(idade){
            this.$on("idadeMudou",idade)
        }
    },
});