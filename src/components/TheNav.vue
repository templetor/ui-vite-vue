<script setup lang="ts">
const { toggleDark } = useTheme()
</script>

<template>
  <nav flex="~ gap2" p2>
    <button i-carbon:sun dark:i-carbon:moon @click="toggleDark()" />
    <a href="https://github.com/templetor/ui-vue-vite" i-carbon:logo-github />
  </nav>
</template>
