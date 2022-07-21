<template>
  <div class="citacoes">
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
    <appCitacao>
      <p>citacao</p>
      <h1 class="autor" slot="autor">{{ citacoes[indice].autor }}</h1>
      <p slot="texto">{{ citacoes[indice].texto }}</p>
      <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
    </appCitacao>

    <!-- {{ numero }} {{ indice }} -->
  </div>
</template>

<script>
import appCitacao from "./Citacao.vue";
export default {
  components: { appCitacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead",
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta",
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo",
        },
      ],
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    },
  },
  created(){
      console.log("created")
  },
  destroyed(){
      console.log("destroyed")
  },
   activated(){
      console.log("activated")
  },
  deactivated(){
      console.log("deactivated")
  }
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.autor {
    float:right;
}
h1 {
  color: firebrick;
}
</style>
