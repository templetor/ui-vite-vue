<script setup lang="ts">
const value = useTitle()
</script>

<template>
  <main
    w-fit h-fit
    absolute ma inset-0
    grid="~ place-items-center"
    text="gray-700 dark:gray-200"
  >
    <TheInput ::value placeholder="typing in title" />
    <TheNav />
  </main>
</template>
