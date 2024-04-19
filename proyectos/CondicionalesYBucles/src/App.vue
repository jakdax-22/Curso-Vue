<script setup>
import { ref } from 'vue';
  const pais = ref("");
  const sedes = ref(["Madrid","Barcelona","Santiago","Santo Domingo"]);
  const inputSede = ref('');

  //Métodos
  const agregarSede = ()=>{
    sedes.value.push(inputSede.value);
    inputSede.value='';
  }
</script>

<template>
  <section>
    <img v-if="pais == 'es'" src="" alt="Bandera Españita">
    <img v-else-if="pais == 'ar'" src="" alt="Bandera Argentina">
    <img v-else-if="pais == 'cl'" src="" alt="Bandera Chile">
    <img v-else src="" alt="genérica">
    
    <h4>Elige tu país</h4>
    <select name="pais" id="pais" v-model="pais">
      <option value="no" disabled selected>País</option>
      <option value="es">Españita</option>
      <option value="ar">Argentina</option>
      <option value="cl">Chile</option>
    </select>
  </section>
  <section>
    <h4>Nuestras sedes en el mundo</h4>
    <article v-for="(sede,index,) of sedes" :key="index">
      <p>{{ sede }}</p>
    </article>
  </section>
  <section>
    <label for="nuevaSede">
      Nueva Sede:
      <input type="text" name="nuevaSede" placeholder="New York"
      v-model="inputSede" v-on:keyup.enter="agregarSede()">
    </label>
    <button v-show="inputSede" v-on:click="agregarSede()">Agregar</button>
  </section>
</template>

<style scoped>

</style>
