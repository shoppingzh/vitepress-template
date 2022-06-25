<template>
  <div class="relative p-4 pt-10 border border-gray-200 shadow-md rounded-md overflow-hidden dark:border-gray-500">
    <div class="absolute left-0 top-0 inline-block bg-blue-500 py-1 px-4 text-white text-xs rounded-br">
      <span>Example</span>
    </div>
    <div class="example__inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
