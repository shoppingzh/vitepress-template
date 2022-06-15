<template>
  <div class="example">
    <div class="example__title">
      <span>Example</span>
    </div>
    <div class="example__inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
  .example {
    border: 1px solid rgba(100, 100, 100, .2);
    box-sizing: border-box;
    border-radius: 3px;
    overflow: hidden;
    &__title {
      span {
        position: relative;
        top: -2px;
        display: inline-block;
        padding: 0 10px;
        font-size: 12px;
        color: #fff;
        background-color: #1890ff;
        border-radius: 0 0 12px 0;
      }
    }
    &__inner {
      padding: 25px 20px;
    }
  }
</style>