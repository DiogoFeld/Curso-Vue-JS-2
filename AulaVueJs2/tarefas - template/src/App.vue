<template>
  <div id="app">
    <h1>Tarefas</h1>

    <div>
      <label>At: {{ porcentage }}%</label>
    </div>
    <div class="taskBar">
      <div class="taskBarCompletion"></div>
    </div>

	<div class="inputBar">
		<input v-model="newTask">
		<button>ADD</button>
	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcentage: 0,
	  newTask:""
    };
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
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

.taskBar {
  width: 80%;
  border: 3px solid white;
  border-radius: 5px;
  height: 10px;
}

.taskBarCompletion {
  height: 100%;
  width: 0%;
  background-color: green;
}
</style>
