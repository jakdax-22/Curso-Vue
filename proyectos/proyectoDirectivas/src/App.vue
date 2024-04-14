<script setup>
import { ref } from 'vue';
  const producto = ref({
    nombre:"Monitor Sony G5",
    tamano:24,
    precio:1000,
    vendido:true
  });

  const esRojo = ref(true);

  const estiloRojo ={
    width:"100px",
    height:"100px",
    backgroundColor:"red"
  }
  const estiloVerde ={
    width:"100px",
    height:"100px",
    backgroundColor:"green"
  }
  const titulo = ref("Los mejores monitores");
</script>

<template>
  <section>
    <p v-bind:class="{comprado: producto.vendido}"> {{ producto.nombre }} </p>
  </section>
  <section v-bind:style="esRojo ? estiloRojo : estiloVerde">
    <p>Esta es una sección de estilo dinámico</p>
  </section>
  <section>
    <h3> {{ titulo }} </h3>
    <input type="text" placeholder="editame" v-model="titulo">
  </section>
</template>

<style scoped>
  .comprado{
    text-decoration: line-through;
    color: dimgray;
  }
</style>
