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
  // ????????????
  cancel() {
    this.open.value = false
    this.reset()
  }
  // ????????????
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

  /** ?????????????????? */
  handleQuery() {
    this.queryParams.value.pageNum = 1
    this.getList()
  }

  /** ?????????????????? */
  resetQuery() {
    this.ruleFormRef.resetFields()
    this.handleQuery()
  }
  // ?????????????????????
  handleSelectionChange(selection: any) {
    this.ids.value = selection.map((item: any) => item.id)
    this.single.value = selection.length !== 1
    this.multiple.value = !selection.length
  }

  /** ?????????????????? */
  handleAdd() {
    this.reset()
    this.open.value = true
    this.title.value = '??????????????? ?????????'
  }

  /** ?????????????????? */
  handleUpdate(row: any) {
    this.reset()
    const _id = row.id || this.ids.value

    /*
     * getDatasource(_id).then((response: any) => {
     *   this.form.value = response.data
     *   this.open.value = true
     *   this.title.value = '??????????????? ?????????'
     * })
     */
  }

  /** ???????????? */
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
           *     message: '????????????'
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
           *     message: '????????????'
           *   })
           *   this.open.value = false
           *   this.getList()
           * })
           */
        }
      }
    })
  }

  /** ?????????????????? */
  handleDelete(row: any) {
    const _ids = row.id || this.ids.value

    ElMessageBox.confirm(`??????????????????????????? ??????????????????"${_ids}"???????????????`, 'Warning', {
      confirmButtonText: '??????',
      cancelButtonText: '??????',
      type: 'warning'
    })
      // .then(() => delDatasource(_ids))
      .then(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'success',
          message: '????????????'
        })
      })
      .catch(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'error',
          message: '????????????'
        })
      })
  }

  /** ?????????????????? */
  handleExport() {
    // proxy.download('system/datasource/export', { ...queryParams.value }, `datasource_${new Date().getTime()}.xlsx`)
  }
}
