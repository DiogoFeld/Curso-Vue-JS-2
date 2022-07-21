
<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome" 
				placeholder="Informe o nome"> </b-form-input>
			</b-form-group>

			<b-form-group label="Email:">
				<b-form-input type="text" size="lg"
				v-model="usuario.email" 
				placeholder="Informe o email"> </b-form-input>
			</b-form-group>

			<b-form-group label="idade:">
				<b-form-input type="text" size="lg"
				v-model="usuario.idade" 
				placeholder="Informe a idade"> 
				</b-form-input>
			</b-form-group>
			<b-button @click="salvar"
			size="lg" variant="primary">
				Salvar
			</b-button>

			<b-button @click="obterUsuario"
			size="lg" variant="success"
			class="ml-2"
			>
			Obter usuario
			</b-button>
		</b-card>

		<hr/>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }}<br>
				<strong>E-mail: </strong> {{ usuario.email }}<br>
				<strong>ID: </strong> {{ id }}<br>
				<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
					@click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
				
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios:[],
			id:null,			
			usuario: {
				nome: "",
				email: "",
				idade:""			
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ""
			this.usuario.email = ""
			this.usuario.idade = ""
			this.usuario.id = null
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`).then(() =>
			this.limpar());
		},
		carregar(){
			this.id = id;
			this.usuario = {...this.usuarios[id]};
		},
		salvar(){
			this.$http.post('usuarios.json',this.usuario)
			.then(resp => {
				this.limpar()
			})
		},
		obterUsuario(){
				this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
				console.log(res.data)
			})
		}
	},
	// created(){
	// 	this.$http.post("usuarios.json",{
	// 		nome:"maria",
	// 		idade: 54,
	// 		email:"maria_maria@gmail.com"
	// 	}).then(res => console.log(res));
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
