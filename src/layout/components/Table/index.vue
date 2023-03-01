<script setup lang="ts"></script>
<template>
  <div class="box_table">
    <div class="box_table_button">
      <div>
        <slot name="tableBtnLeft"> </slot>
      </div>
      <div>
        <slot name="tableBtnRight"> </slot>
      </div>
    </div>
    <slot name="table"></slot>
    <slot name="pagination"></slot>
  </div>
</template>

<style lang="scss" scoped>
.box_table {
  padding-bottom: 20px;
  height: 100%;

  .box_table_button {
    display: flex;
    justify-content: space-between;

    &_button {
      display: flex;
      margin-bottom: 10px;

      &_filter {
        width: 174px;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 5px;

        span {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;

          &:hover {
            font-size: 14px;
            font-family: Source Han Sans CN-Regular, Source Han Sans CN;
            font-weight: 400;
            color: #333333;
          }
        }

        &:hover {
          background-color: #f3f9f8;
        }
      }

      img {
        width: 16px;
      }

      .color {
        background-color: $theme-two-color;
      }

      .color1 {
        background-color: $theme-two-color;

        // color: $font-four-color;
        &:deep(.el-icon) {
          // color: $font-four-color;
        }
      }
    }
  }

  &:deep(.el-pagination__editor) {
    min-width: 49px;
    height: 27px;
  }
}
</style>
