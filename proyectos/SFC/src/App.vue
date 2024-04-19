<script setup>
  import { ref } from 'vue';
import MostrarTareas from './components/MostrarTareas.vue';
import AgregarTareas from './components/AgregarTareas.vue';
import SlotsComponent from './components/SlotsComponent.vue'
  const listaTareas = ref([
    {
      id:1,
      tarea: "Ir al supermercado"
    },
    {
      id:2,
      tarea: "Bañar al perro"
    }
  ]);

  const agregarTarea = (nuevaTarea) =>{
    listaTareas.value.push({
      id: listaTareas.value.length + 1,
      tarea: nuevaTarea
    })
  }

  const frase = "La organización vence al tiempo !";
</script>

<template>
  <SlotsComponent>
    <!--Slot sin nombre-->
    <h1>Gestor de tareas</h1>
    <img src="" alt="Hoja de tareas">
    <!--Slot con nombre-->
    <template v-slot:mensaje>
      <p>{{ frase }}</p>
    </template>
  </SlotsComponent>
  <MostrarTareas :tareas="listaTareas" titulo="Tareas actuales"/>
  <AgregarTareas v-on:agregar="agregarTarea"/>
</template>

<style scoped>

</style>
