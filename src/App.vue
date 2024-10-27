<script setup lang="ts">
const title = useTitle()
</script>

<template>
  <main
    absolute ma inset-0
    w-fit h-fit
    grid="~ place-items-center"
    text=" gray-700 dark:gray-200">
    <TheInput
      ::="title"
      placeholder="typing in title"
      autocomplete="false" />
    <TheNav />
  </main>
</template>
