<template>
  <div class="citacao">
    <slot name="autor"></slot>    
    <slot></slot>
    <slot name="texto"></slot>        
    <slot name="fonte"></slot>    
    
  </div>
</template>

<script>
export default {
  props: {
    citacoes: {
      type: Array,
    },
    indice: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}



h1 {
  color: darkblue;
}
</style>
