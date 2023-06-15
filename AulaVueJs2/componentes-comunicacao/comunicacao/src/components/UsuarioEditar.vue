<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuario é: {{idade}}</p>
    <button @click="alterarIdade">Alterar idade</button>
  </div>
</template>

<script>
import barramento from '@/barramento.js';

export default {
  props: {    
      idade: {
        type: Number,        
      },    
  },
  methods:{
      alterarIdade(){          
          this.idade = 33;
        //não é necessario alterar, pois o pai já irá alterar
          barramento.alterarIdade(this.idade)
      }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
