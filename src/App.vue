<script setup lang="ts">
import { ref } from 'vue';
import Plate from './components/Plate.vue';
import ToolBar from './components/ToolBar.vue';

const plate = ref('AB6TA23');
</script>

<template>
    <Plate :plate="plate" />
    <ToolBar v-model="plate" />
</template>

<style scoped></style>
