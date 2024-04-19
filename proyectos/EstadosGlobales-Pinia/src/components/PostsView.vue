<script setup>
    import { usePostsStore } from '../stores/PostsStore';
    import PostCard from './PostCard.vue';
    import NewPosts from './NewPosts.vue';

const postsStore = usePostsStore();
</script>
<template>
        <PostCard v-for="post in postsStore.posts" v-bind:key="post.id" v-bind:titulo="post.title" v-bind:contenido="post.body"/>
        <p>Total posteos: {{ postsStore.calcularCantidad }}</p>
        <NewPosts/>
</template>

<style scoped>

</style>