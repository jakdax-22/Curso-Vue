<script setup>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
    const asyncPage = defineAsyncComponent( ()=>import('./HijoAsync.vue'));
    const activo = ref(false);
</script>
<template>
    <button v-on:click="activo = !activo">Traer componente hijo</button>
    <asyncPage v-if="activo"/>
</template>
<style scoped>

</style>