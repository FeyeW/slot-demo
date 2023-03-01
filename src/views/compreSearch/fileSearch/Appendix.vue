<script setup lang="ts" name="PassLine">
import {
  reactive,
  ref,
  getCurrentInstance,
  ComponentInternalInstance,
  toRaw,
} from "vue";
import { table } from "./type/appendix";
// import emitter from "@/utils/bus";

import HeaderLayout from "@/layout/components/Header/index.vue";
import DialogLayout from "@/layout/components/Dialog/index.vue";
import TableLayout from "@/layout/components/Table/index.vue";
import FormLayout from "@/layout/components/Form/index.vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const obj = reactive(new table());
const state = toRaw(obj).baseData;
const isOpen = ref(false);
const isClickFilter = ref(false);
const isClickMap = ref(false);
const isClickExport = ref(false);

const switchData = ref([
  { name: "按线路" },
  { name: "按通道" },
  { name: "按工井" },
  { name: "按设施" },
]);
const switchIndex = ref(0);

// 切换查询条件
const switchSearchType = (data, index) => {
  switchIndex.value = index;
};
const queryRef = ref();
// 展开或者收起
const openOrClose = () => {
  isOpen.value = !isOpen.value;
  emitter.emit("event", isOpen.value);
};

const clickExtraBtn = (num: number) => {
  switch (num) {
    case 0:
      isClickFilter.value = !isClickFilter.value;
      break;
    case 1:
      isClickMap.value = !isClickMap.value;
      break;
    case 2:
      isClickExport.value = !isClickExport.value;
      break;
    default:
      return;
  }
};
</script>
<template>
  <HeaderLayout title="综合查询" :titleImg="state.titleImg">
    <template v-slot:content>
      <FormLayout>
        <template v-slot:form>
          <el-form
            ref="queryRef"
            :model="state.queryParams"
            :inline="true"
            label-width="auto"
          >
            <el-form-item label="搜索对象" prop="manufactureDate">
              <el-select placeholder="请选择">
                <el-option
                  v-for="(name, index) in ['中间头', '终端头']"
                  :key="index"
                  :label="name"
                  :value="name"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="输入设备名称" prop="productionOrg">
              <el-input
                v-model="state.queryParams.productionOrg"
                placeholder="请输入内容"
                clearable
              />
            </el-form-item>
            <el-form-item label="选择运维单位" prop="productionOrg">
              <el-select placeholder="请选择">
                <el-option
                  v-for="(name, index) in ['中间头', '终端头']"
                  :key="index"
                  :label="name"
                  :value="name"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </template>
        <template v-slot:searchBtnLeft>
          <el-button @click="openOrClose" v-show="!isOpen">
            <span>展开&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-icon>
              <ArrowDownBold />
            </el-icon>
          </el-button>
          <el-button @click="openOrClose" v-show="isOpen">
            <span>收起&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-icon>
              <ArrowUpBold />
            </el-icon>
          </el-button>
        </template>
        <template v-slot:searchBtnRight>
          <div class="btns-style">
            <el-button type="primary" @click="obj.handleQuery">查询</el-button>
            <el-button @click="obj.resetQuery(proxy)">重置</el-button>
          </div>
          <div class="open-btn-style" v-if="false">
            <el-button @click="openOrClose">收起</el-button>
          </div>
          <div class="open-btn-style" v-if="false">
            <el-button @click="openOrClose">展开</el-button>
          </div>
        </template>
      </FormLayout>
      <TableLayout>
        <template v-slot:tableBtnLeft>
          <el-button class="icon-button color" @click="clickExtraBtn(0)">
            <img
              :src="`/src/assets/images/comprehensive/compreFilterLight.png`"
              alt=""
            />
            &nbsp;&nbsp;<span>筛选展示字段</span>&nbsp;&nbsp;
            <el-icon>
              <ArrowDown v-if="isClickFilter" />
              <ArrowUp v-else />
            </el-icon>
          </el-button>
        </template>
        <template v-slot:table>
          <el-table
            :data="state.datasourceList"
            stripe
            style="width: 100%"
            on-change="state.handleSelectionChange"
            border
            @selection-change="obj.handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column
              label="设备名称"
              align="center"
              prop="productionOrg"
            />
            <el-table-column
              label="设备起点位置"
              align="center"
              prop="producer"
            />
            <el-table-column
              label="设备终点位置"
              align="center"
              prop="producerId"
            />
            <el-table-column label="电缆总长" align="center" prop="model" />
            <el-table-column
              label="投运日期"
              align="center"
              prop="manufacturer"
            />
            <el-table-column
              label="运维单位"
              align="center"
              prop="junctionType"
            />
            <el-table-column
              label="运维班组"
              align="center"
              prop="isFireproof"
            />
            <el-table-column
              label="敷设方式"
              align="center"
              prop="isExplosionProofBox"
            />
            <el-table-column
              label="操作"
              align="center"
              class-name="small-padding fixed-width"
              style="display: flex"
            >
              <template #default="scope">
                <el-button
                  class="table-button btn-margin-right"
                  type="primary"
                  @click="obj.handleUpdate(scope.row)"
                >
                  查看详情
                </el-button>
                <el-button
                  class="table-button btn-margin-right"
                  type="primary"
                  @click="obj.handleUpdate(scope.row)"
                >
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <template v-slot:pagination>
          <el-pagination
            v-model:currentPage="state.queryParams.pageNum"
            v-model:page-size="state.queryParams.pageSize"
            :page-sizes="[100, 200, 300, 400]"
            :small="state.small"
            :background="state.background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="obj.handleCurrentChange"
            @current-change="obj.handleCurrentChange"
          />
        </template>
      </TableLayout>
      <el-dialog v-model="state.open" width="500px" append-to-body>
        <DialogLayout></DialogLayout>
      </el-dialog>
    </template>
  </HeaderLayout>
</template>
<style lang="scss" scoped>
.display-none {
  display: none;
}
// 
::v-deep(.table-button) {
  width: 74px;
  height: 24px;
  border-radius: 4px;
}

.btn-margin-right {
  margin-right: 5px;
}

.switch-btn-color {
  background-color: $theme-main-color;
  color: #ffffff;
}

img {
  width: 16px;
}

:deep .el-table .cell {
  display: flex;
  justify-content: center;
}
</style>
