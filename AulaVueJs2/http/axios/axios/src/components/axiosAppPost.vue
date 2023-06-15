<template>
    <div class="user-add">
  <h2>Add user</h2>
  <input type="text" v-model="nome" /> <br />
  <input type="text" v-model="email" /> <br />

  <button @click="storeUser">Store</button>
</div>
</template>


<script>
import axios from "axios";
export default {     
  data() {
    return {
        email: '',
        nome: '',
    };
  },
  methods: {
   async storeUser() {
    try {
        const user = await axios.post(
        "https://curso-vue-d05c5-default-rtdb.firebaseio.com/usuarios.json", 
        {
            nome: this.nome,
            email : this.email
        }
        );
        console.log(user)
        } catch(e) {
            console.log(e);
        }
        },
    }
}
</script>

<style>
    
</style>