new Vue({
    el: '#desafio',
    data: {
        nome: "Diogo",
        idade: 26,
        image: "https://s3.static.brasilescola.uol.com.br/be/2020/12/girassol.jpg"
    },
    methods: {
        multiplyAge() {
            return this.idade * 3
        },
        callRandom() {
            return Math.random() * (1 - 0);
        }
    }
})
