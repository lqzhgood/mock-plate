<script setup lang="ts">
import { ref, watch } from 'vue';
import Plate from './components/Plate.vue';
import ToolBar from './components/ToolBar.vue';

const LOCAL_PLATE_NAME = 'plate';

const plate = ref(localStorage.getItem(LOCAL_PLATE_NAME) || '');

watch(plate, v => {
    localStorage.setItem(LOCAL_PLATE_NAME, v);
});
</script>

<template>
    <Plate :plate="plate" />
    <ToolBar v-model="plate" />
</template>

<style scoped></style>
