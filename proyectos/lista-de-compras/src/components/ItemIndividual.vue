<script setup>
import { ref } from 'vue'
const props = defineProps({
    item: Object,
    index: Number
});

const emit = defineEmits(['deleteItem','editItem'])

const priorities = {
    alta: '🔴',
    media: '🟡',
    baja: '🟢'
}

const handleDeleteClick = () => {
    emit('deleteItem', props.index)
}

const isEditing = ref(false);

const handleEditClick = () => {
    isEditing.value = true;
}

const editedItem = ref({
    producto: props.item.producto,
    prioridad: props.item.prioridad
});

const handleSaveClick = () => {
    emit('editItem', props.index, editedItem.value);
    isEditing.value = false;
}

</script>

<template>
    <article>
        <div class="nombre">
            <p v-if="!isEditing">{{ props.index + 1 }} - {{ props.item.producto }}</p>
            <div v-else>
                <input type="text" v-model="editedItem.producto" :placeholder="props.item.producto">
            </div>
        </div>
        <div class="resto">
            <p v-if="!isEditing">{{ priorities[props.item.prioridad] }}</p>
            <div v-else>
                <select name="priority" v-model="editedItem.prioridad">
                    <option value="" disabled>prioridad</option>
                    <option value="baja">🟢</option>
                    <option value="media">🟡</option>
                    <option value="alta">🔴</option>
                </select>
            </div>
        </div>
        <div class="resto">
            <div v-if="!isEditing">
                <button @click="handleDeleteClick">
                    🗑
                </button>
                <button @click="handleEditClick">
                    ✏
                </button>
            </div>
            <div v-else>
                <button @click="handleSaveClick">Guardar</button>
            </div>
        </div>
    </article>
</template>

<style scoped>
article {
    width: auto;
    display: flex;
    align-items: center;
}

p {
    margin: 0px;
}

.nombre {
    width: 60%;
}

.resto {
    width: 20%;
}

input,
select {
    background-color: black;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    padding: 0.5em;
}
</style>