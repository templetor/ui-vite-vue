<script setup lang="ts">
export let value: string
</script>

<template>
  <input
    ::="value" type="text"
    p="x4 y2"
    bg="gray op20"
    border="~ rounded gray7 dark:gray2"
    outline-none
  >
</template>
