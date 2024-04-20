<script setup>
import {onMounted, ref} from 'vue';
import EncabezadoComponente from './components/EncabezadoComponente.vue';
import ListaItems from './components/ListaItems.vue';
import PieComponente from './components/PieComponente.vue'
import NuevoItem from './components/NuevoItem.vue';

let listado = ref([]);

const pushItem = (nuevo) => {
    listado.value.push(nuevo);
    actualizarStorage();
}

const delItem = (index) => {
    listado.value.splice(index,1);
    actualizarStorage();
}

const editItem = (index, edited) => {
    listado.value[index] = edited;
    actualizarStorage();
}

//localStorage
const actualizarStorage = () => {
    localStorage.setItem('listado',JSON.stringify(listado.value));
}

//lifecycle hook mounted
onMounted(()=>{
 listado.value=JSON.parse(localStorage.getItem('listado')) || [];
});
</script>

<template>
 <EncabezadoComponente />
 <ListaItems :mis-compras="listado" @delete-item="delItem" @edit-item="editItem"/>
 <NuevoItem @add-item="pushItem"/>
 <PieComponente />
</template>

<style scoped>

</style>