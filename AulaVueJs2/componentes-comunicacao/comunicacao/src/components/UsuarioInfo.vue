<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <P
      >Nome do Usuario: <strong>{{ inverterNome() }}</strong>
    </P>
    <p>Idade do usuario é:<strong>{{idade}}</strong></p>


    <button @click="reinicializarnome">Reinicializar Nome</button>
    <button @click="reiniciarFn()">Reinicializar Nome (callback)</button>
  </div>
</template>

<script>
import barramento from '@/barramento.js';

export default {
  props: {
    nome: {
      type: String,
      // required:true,
      default: () => Array(10).fill(1).join(","),
    },
    reiniciarFn:{
        type: Function
    },
    idade:{
        type: Number
    }
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reinicializarnome() {
      const antingo = this.nome;
      this.nome = "Pedro";
      //criando um novo evento
      this.$emit("nomeMudou", {
        novo: this.nome,
        antingo: antingo,
      });
    },
  },
  created(){
      barramento.quandoIdadeMudar(idade => {
          this.idade = idade;
      })
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
