import { reactive, ref, Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
// import { list${BusinessName}, get${BusinessName}, del${BusinessName}, add${BusinessName}, update${BusinessName} } from "@/api/${moduleName}/${businessName}";
interface IQueryParams {
  pageNum: number
  pageSize: number
  [propName: string]: any
}
export class table {
  public queryParams: Ref<IQueryParams>
  public form: Ref<any>
  public rules: Ref<any>
  public open: Ref<boolean>
  public loading: Ref<boolean>
  public datasourceList: Ref<any[]>
  public showSearch: Ref<boolean>
  public ids: Ref<any[]>
  public single: Ref<boolean>
  public multiple: Ref<boolean>
  public total: Ref<number>
  public title: Ref<string>
  public ruleFormRef
  public currentPage: Ref<number>
  public pageSize: Ref<number>
  public background: Ref<boolean>
  public small: Ref<boolean>

  constructor() {
    this.queryParams = ref({
      pageNum: 1,
      pageSize: 10
    })
    this.ruleFormRef = ref()
    this.form = ref({})
    this.rules = ref({})
    this.open = ref(false)
    this.loading = ref(true)
    this.datasourceList = ref([] as any[])
    this.ids = ref([] as any[])
    this.single = ref(true)
    this.multiple = ref(true)
    this.showSearch = ref(true)
    this.total = ref(0)
    this.title = ref('')
    this.currentPage = ref(1)
    this.pageSize = ref(100)
    this.background = ref(true)
    this.small = ref(true)
    // this.getList()
  }
  handleSizeChange = () => {
    //
  }
  handleCurrentChange = (val: number) => {
    this.currentPage.value = val
    //
  }
  getList = () => {
    this.loading.value = true
    console.log('tableData')
    // debugger
    this.datasourceList.value = [
      {
        id: '122',
        name: 'ncbasdcjk'
      },
      {
        id: '123',
        name: 'ncbasdcjk'
      }
    ]

    /*
     * listDatasource(this.queryParams.value).then((response: any) => {
     *   this.datasourceList.value = response.rows
     *   this.total.value = response.total
     *   this.loading.value = false
     * })
     */
  }
  // 取消按钮
  cancel() {
    this.open.value = false
    this.reset()
  }
  // 表单重置
  reset() {
    this.form.value = {
      id: null,
      updateTime: null,
      name: null,
      host: null,
      port: null,
      username: null,
      password: null,
      isStatus: '0',
      createTime: null,
      isConnect: null
    }
  }

  /** 搜索按钮操作 */
  handleQuery() {
    this.queryParams.value.pageNum = 1
    this.getList()
  }

  /** 重置按钮操作 */
  resetQuery() {
    this.ruleFormRef.resetFields()
    this.handleQuery()
  }
  // 多选框选中数据
  handleSelectionChange(selection: any) {
    this.ids.value = selection.map((item: any) => item.id)
    this.single.value = selection.length !== 1
    this.multiple.value = !selection.length
  }

  /** 新增按钮操作 */
  handleAdd() {
    this.reset()
    this.open.value = true
    this.title.value = '添加数据源 数据源'
  }

  /** 修改按钮操作 */
  handleUpdate(row: any) {
    this.reset()
    const _id = row.id || this.ids.value

    /*
     * getDatasource(_id).then((response: any) => {
     *   this.form.value = response.data
     *   this.open.value = true
     *   this.title.value = '修改数据源 数据源'
     * })
     */
  }

  /** 提交按钮 */
  submitForm() {
    this.ruleFormRef.validate(valid => {
      if (valid) {
        if (this.form.value.id !== null) {
          //
          /*
           * updateDatasource(this.form.value).then(response => {
           *   // eslint-disable-next-line new-cap
           *   ElMessage({
           *     type: 'success',
           *     message: '修改成功'
           *   })
           *   this.open.value = false
           *   this.getList()
           * })
           */
        } else {
          //
          /*
           * addDatasource(this.form.value).then(response => {
           *   // eslint-disable-next-line new-cap
           *   ElMessage({
           *     type: 'success',
           *     message: '新增成功'
           *   })
           *   this.open.value = false
           *   this.getList()
           * })
           */
        }
      }
    })
  }

  /** 删除按钮操作 */
  handleDelete(row: any) {
    const _ids = row.id || this.ids.value

    ElMessageBox.confirm(`是否确认删除数据源 数据源编号为"${_ids}"的数据项？`, 'Warning', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      // .then(() => delDatasource(_ids))
      .then(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      .catch(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'error',
          message: '删除失败'
        })
      })
  }

  /** 导出按钮操作 */
  handleExport() {
    // proxy.download('system/datasource/export', { ...queryParams.value }, `datasource_${new Date().getTime()}.xlsx`)
  }
}
