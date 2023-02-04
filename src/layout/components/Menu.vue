<template>
  <div class="menu shadow_top-right-bottom">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-scrollbar height="100%">
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="11">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator nine</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-scrollbar>
    </el-menu>
    <div class="menu_collapse-button">
      <el-icon v-if="isCollapse" @click="isCollapse = !isCollapse"><ArrowRight /></el-icon>
      <el-icon v-if="!isCollapse" @click="isCollapse = !isCollapse"><ArrowLeft /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.menu {
  height: calc(100vh - 165px);
  border-radius: 0 8px 8px 0;
  background-color: $font-four-color;
  position: relative;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
    width: 220px;
    overflow: hidden;
  }
  &_collapse-button {
    width: 16px;
    height: 32px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $font-four-color;
    border-radius: 0 50% 50% 0;
    top: calc(50% - 16px);
    right: -16px;
  }
}
</style>
