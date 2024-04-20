<script setup>
import ItemIndividual from './ItemIndividual.vue';
const props = defineProps({
    misCompras:Array
});

const emit = defineEmits(['deleteItem','editItem']);

const delItem = (index) => {
    emit('deleteItem',index);
}

const edit = (index, edited) => {
    emit('editItem',index,edited);
}
</script>

<template>
    <section class="items">
        <ItemIndividual v-for="(item, index) of props.misCompras" :key="index" :item="item" :index="index" @delete-item="delItem" @editItem="edit"/>
    </section>
</template>

<style scoped>
.items{
    max-width:100%;
}
</style>