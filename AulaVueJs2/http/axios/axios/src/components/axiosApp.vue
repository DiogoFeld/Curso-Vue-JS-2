<template>
  <div>
    <button @click="getUsers">Get users</button> <br />

    <div class="users" v-for="(user,id) in users" :key="user.id">
      <h2>{{ user.nome }}</h2>
      <p>{{ user.email }}</p>
      <p><strong>id: </strong>{{id}}</p>

      <button @click="deletar(id)">Deletar</button>
      <button @click="updateData(id)">Selecionar</button>
    </div>

    <h2>Autalizar</h2> 
    <input placeholder="Nome" v-model="nomeAtualizar" />
    <input placeholder="Email" v-model="emailAtualizar" />
    <p>{{idAtualizar}} </p>
    <button @click="Atualizar()">Atualizar</button>    

  </div>
</template>


<script>
import axios from "axios";
export default {  
  data() {
    return {
      users: [],
      nomeAtualizar:"1",
      emailAtualizar:"2",
      idAtualizar:""
    };
  },
  methods: {
    async getUsers() {
      try {
        const users = axios.get(
          "https://curso-vue-d05c5-default-rtdb.firebaseio.com/usuarios.json"
        );
        this.users = users.data;
      } catch (e) {
        console.log(e);
      }
    }, 
    updateData(id){      
      this.nomeAtualizar = this.users[id].nome ;
      this.emailAtualizar = this.users[id].email;
      this.idAtualizar = id;         
    },
    async deletar(id){        
        const user = await axios.delete(`https://curso-vue-d05c5-default-rtdb.firebaseio.com/usuarios/${id}.json`);
        console.log(user.data)

    },
    async Atualizar(){          
      console.log(this.idAtualizar);
       console.log(this.emailAtualizar);
        console.log(this.nomeAtualizar);        
      try {
        const user = await axios.put(
          `https://curso-vue-d05c5-default-rtdb.firebaseio.com/usuarios/${this.idAtualizar}.json`,
          {
            nome: this.nomeAtualizar,
            email: this.emailAtualizar
          }
        );

        console.log(user.data);
        alert("User updated!");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>