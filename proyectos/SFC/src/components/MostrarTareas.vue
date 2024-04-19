<script setup>
    const props = defineProps({
        tareas: Array,
        titulo: String
    })
</script>
<template>
    <h2>{{ props.titulo }}</h2>
    <ul>
        <li v-for="tarea of tareas" v-bind:key="tarea.id">
            {{ tarea.id }}  {{ tarea.tarea }}
        </li>
    </ul>
</template>
<style scoped>

</style>