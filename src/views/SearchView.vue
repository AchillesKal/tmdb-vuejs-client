<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <div class="container mx-auto p-8 flex">
        {{ route.params.searchTerm }}
    </div>
</template>

<style>
</style>
    