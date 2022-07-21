<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>

    <p>O nome é {{nome}}</p>
<p>Idade é : {{idade}}</p>
    <button @click="changeName">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info 
      :nome="nome"
      :idade="idade"
      @nomeMudou="nome=$event.novo" 
      :reiniciarFn="reinicializarnome"
      />      
      <app-usuario-editar
      :idade="idade" 
      />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "pedro",
      idade: 22
    };
  },
  methods: {
    changeName() {
      this.nome = "ana";
    },
    reinicializarnome(){
      this.nome = "Antonio";
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
