<script setup lang="ts">
export let modelValue: string
</script>

<template>
  <input
    v-model="modelValue" type="text"
    p="x4 y2"
    bg="gray op20"
    border="~ rounded gray7 dark:gray2"
    outline-none
  >
</template>
