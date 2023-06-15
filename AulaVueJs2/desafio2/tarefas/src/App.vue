<template>
	<div id="app">
		<h1>Tarefas</h1>

		<div class="taskBar">
			<div class="taskDone"></div>
		</div>
		<div class="taskPerctg">{{ percentageComplete }}%</div>


		<div class="newTask">
			Nova tarefa?
		</div>
		<div>
			<button>
				Adiocionar
			</button>
		</div>




	</div>
</template>

<script>
export default {
	data() {
		return {
			percentageComplete: 0,

		}
	}

}
</script>

<style>
.newTask{
	margin-top: 2em;
}

.taskPerctg {
	font-size: 18px;
	margin-top: -30px;
}

.taskBar {
	border: 2px solid white;
	border-radius: 7px;
	height: 30px;
	width: 80%;
}

.taskDone {
	height: 100%;
	background-color: green;
	width: 0%;
}

body {
	font-family: 'Lato', sans-serif;
	background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
	color: #FFF;
}

#app {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#app h1 {
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 3rem;
}
</style>
