<template>
  <Layout>
    <template #layout-top>
      <el-backtop>
        <svg-icon name="huojian" class="text-2xl" />
      </el-backtop>
    </template>
    <template #doc-before>
      <DocBefore />
    </template>
  </Layout>
</template>

<script lang="ts">
export const injectKey = Symbol('Layout')
</script>

<script setup lang="ts">
// 具体使用参见：https://vitepress.vuejs.org/guide/theme-introduction#extending-the-default-theme
import Theme from 'vitepress/theme'
import mediumZoom, { Zoom } from 'medium-zoom'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = Theme
let zoom: Zoom
const route = useRoute()

onMounted(() => {
  zoom = mediumZoom(undefined, {
    background: 'rgba(0, 0, 0, .75)',
  })
})

// FIXME 迫不得已，先使用这种办法，待vitepress提供文档插槽后，可重构此代码
watch(route, () => {
  if (!zoom) return
  zoom.detach('.VPDoc img')
  setTimeout(() => {
    zoom.attach('.VPDoc img')
  }, 300)
}, { immediate: true })

</script>

<style>
.medium-zoom-overlay {
  @apply z-[10000];
}
.medium-zoom-image {
  @apply z-[10001];
}
</style>