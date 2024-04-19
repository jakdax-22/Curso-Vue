<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['agregar']);

    const inputTarea = ref('');

    function buttonClick() {
        emit("agregar", inputTarea.value);
        inputTarea.value='';
    }
</script>
<template>
    <h2>Agregar tareas</h2>
    <label for="inpuTarea">
        Tarea:
        <input type="text" name="inputTarea" v-model="inputTarea">
    </label>
    <button v-show="inputTarea" v-on:click="buttonClick">Agregar</button>
</template>
<style scoped>

</style>