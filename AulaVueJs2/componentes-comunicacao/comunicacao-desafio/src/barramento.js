import Vue from 'vue';
export default new Vue({
    methods: {
        alterarUsuario(callback) {
            this.$emit("alterouUsuario", callback);
        },
        quandoUsuarioMudar(usuario) {
            this.$on("alterouUsuario", usuario);
        }
    }    
})