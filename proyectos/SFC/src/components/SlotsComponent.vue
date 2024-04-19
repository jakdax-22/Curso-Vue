<script setup>

</script>
<template>
    <main>
        <slot>
            <!--Aquí se inyecta el HTML que viene del padre-->
        </slot>
    </main>
    <footer>
        <slot name="mensaje">
            <!--Aquí se inyectará el HTML con el mensaje desde el padre-->
        </slot>
    </footer>
</template>
<style scoped>

</style>