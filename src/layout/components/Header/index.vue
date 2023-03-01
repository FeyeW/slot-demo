<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance, onMounted, onUpdated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { proxy } = getCurrentInstance() as ComponentInternalInstance
const router = useRouter()
const route = useRoute()
defineProps({
  title: String,
  titleImg: String
})
</script>
<template>
  <!--  -->
  <div class="box shadow" ref="queryRef">
    <div class="unit_header">
      <div>
        <img :src="titleImg" alt="" />&nbsp;<span>{{ title }}</span>
      </div>
      <slot name="editorBtn"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100%;
  padding: 0 20px;
  height: 100%;
  box-sizing: border-box;
  .unit_header {
    height: 50px;
    font-size: 22px;
    color: $font-two-color;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $background-color;

    img {
      width: 24px;
      vertical-align: sub;
    }
  }
}
</style>
