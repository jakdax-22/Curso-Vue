<script setup>
import ContactoCliente from './components/ContactoCliente.vue';
import ProductosCatalogo from './components/ProductosCatalogo.vue';
import PadreAsync from './components/PadreAsync.vue';
import { ref } from 'vue';

  const opciones = {
    ContactoCliente,
    ProductosCatalogo
  }
  const seleccion = ref("ProductosCatalogo");
</script>

<template>
  <button v-on:click="seleccion='ProductosCatalogo'">Catálogo Productos</button>
  <button v-on:click="seleccion='ContactoCliente'">Formulario de contacto</button>
  <component :is="opciones[seleccion]"></component>
  <hr>
  <PadreAsync />
</template>

<style scoped>

</style>
