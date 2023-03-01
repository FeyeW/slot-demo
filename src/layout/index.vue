<template>
  <div class="layout">
    <div class="layout_middle">
      <div class="layout_middle_content">
        <router-view></router-view>
      </div>
    </div>
    <div class="layout_bottom">
      <Footer></Footer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Footer from './components/Footer.vue'
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  // min-width: 1080px;
  background: $background-color;
  &_middle {
    display: flex;
    &_content {
      min-width: calc(100% - 240px);
      width: 100%;
      margin-left: 20px;
    }
  }
}
</style>
