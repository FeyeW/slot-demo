<script setup lang="ts">
import { ref, onMounted } from "vue";
import emitter from "@/utils/bus";
const queryRef = ref();
onMounted(() => {
  emitter.on("event", (e) => {
    e
      ? (queryRef.value.style = "height:100%")
      : (queryRef.value.style = "height:100px; overflow: hidden; ");
  });
});
</script>
<template>
  <div class="box_content">
    <div class="box_from" ref="queryRef">
      <slot name="form"> </slot>
    </div>
    <div class="search-btn-style">
      <div class="btns-style">
        <div style="float: left">
          <slot name="searchBtnLeft"></slot>
        </div>
        <div style="float: right">
          <slot name="searchBtnRight"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box_content {
  margin: 20px 0 10px 20px;
  ::v-deep(.el-form) {
    display: grid;
    column-gap: 60px;
    row-gap: 10px;
    grid-template-columns: repeat(3, auto);
    .el-form-item {
      width: 420px;

      .el-button {
        width: 104px;
        height: 32px;
        border-radius: 4px;
      }
    }
  }

  .switch-search-type {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;

    & > div {
      width: 68px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
    }

    & > span {
      display: inline-block;
      width: 1px;
      height: 24px;
      border-left: 1px solid #e5e5e5;
      margin: 0 15px 0 15px;
    }
  }

  .search-btn-style {
    width: 100%;
    height: 40px;
    min-width: calc(100% - 240px);
    margin-top: 10px;

    .btns-style {
      /*  display: flex;
            justify-content: space-between; */
    }

    ::v-deep(.el-button) {
      width: 104px;
      height: 32px;
      border-radius: 4px;
    }
  }

  .box_from {
    overflow: hidden;
  }
}
</style>
