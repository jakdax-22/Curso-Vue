<script setup>
import { ref,watch } from 'vue'

  const pregunta = ref('');
  const respuesta = ref ({
    mensaje:'Las preguntas terminan con el signo ?',
    imagen: './'
  });
  //watcher
  watch(pregunta,async(nuevaPregunta)=>{
    if (nuevaPregunta.includes("?")){
      respuesta.value.mensaje="Pensando ...";
    
      try{
        const res = await fetch("https://yesno.wtf/api");
        const data = await res.json();
        respuesta.value.mensaje = data.answer;
        respuesta.value.imagen = data.image;
      }
      catch (error){
        respuesta.value.mensaje = "Error en la API"+error;
      }
    }
  });
</script>

<template>
  <p>Haz una pregunta de si o no:</p>
  <input v-model="pregunta">
  <p>{{ respuesta.mensaje }}</p>
  <img v-bind:src="respuesta.imagen">
</template>

<style scoped>

</style>
