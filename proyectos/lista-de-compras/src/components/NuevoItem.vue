<script setup>
import {ref} from 'vue';

const emit = defineEmits(['addItem'])

const item=ref('');
const priority=ref('');

const handleClick = () => {
    const newProduct={
        producto: item.value,
        prioridad:priority.value
    }
    emit('addItem', newProduct);
    item.value='';
    priority.value='';
}

const isValid = () => {
    return ((item.value.length > 2) && (isNaN(item.value)))
}

</script>

<template>
    <section>
        <h4>Nuevo item</h4>
        <input type="text" placeholder="Agua" v-model="item" autofocus>
        <select name="priority" v-model="priority">
            <option value="" disabled>prioridad</option>
            <option value="baja">🟢 - baja</option>
            <option value="media">🟡 - media</option>
            <option value="alta">🔴 - alta</option>
        </select>
        <button @click="handleClick" v-show="item && priority && isValid()">
            ➕
        </button>
    </section>
</template>


<style scoped>
    input, select{
        font-family: 'Genos',sans-serif;
        font-family:'Gloria Hallelujah',cursive;
        background-color: black;
        border-radius: 4px;
        font-size: 1.4rem;
        color: white;
        width:40%;
        margin-right: 10px;
    }
</style>