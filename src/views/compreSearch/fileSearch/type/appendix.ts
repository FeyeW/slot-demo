import { reactive, ref, Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  listConnector,
  getConnector,
  delConnector,
  addConnector,
  updateConnector
} from '@/api/prehensiveSearch/cableLineSearch'
interface IQueryParams {
  pageNum: number
  pageSize: number
  [propName: string]: any
}
interface IBaseData {
  datasourceList: any[]
  queryParams: IQueryParams
  rules: any
  open: boolean
  loading: boolean
  showSearch: boolean
  ids: any[]
  single: boolean
  multiple: boolean
  total: number
  title: string
  background: boolean
  small: boolean
  form: any
  [propName: string]: any
}
export class table {
  public baseData: IBaseData
  constructor() {
    this.baseData = reactive({
      datasourceList: [
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: '666',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        },
        {
          productionOrg: 'shebeimingc',
          producer: 'weizhi',
          producerId: 'weizhi',
          model: 'weizhi',
          manufacturer: 'weizhi',
          junctionType: 'weizhi',
          isFireproof: 'weizhi',
          isExplosionProofBox: 'weizhi'
        }
      ] as any[],
      connectorList: [] as any[],
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        manufactureDate: null,
        productionOrg: null,
        producer: null,
        producerId: null,
        model: null,
        manufacturer: null,
        junctionType: null,
        isFireproof: null,
        isExplosionProofBox: null,
        name: null,
        sn: null,
        picture: null,
        city: null,
        maintOrg: null,
        maintGroup: null,
        equipmentOwner: null,
        feeder: null,
        makeWay: null,
        voltageLevel: null,
        psrState: null,
        startTime: null,
        astNature: null,
        stopTime: null,
        isRural: null,
        importance: null,
        regionalism: null,
        installationLocation: null,
        branchFeeder: null,
        line: null,
        pubPrivFlag: null,
        geoPositon: null,
        prev: null,
        astOrg: null,
        next: null,
        passage: null,
        parameter: null,
        logicDelete: null,
        deptId: null,
        projectNum: null,
        projectName: null,
        isCommission: null,
        deployState: null,
        manufactureNum: null
      },
      rules: { logicDelete: [{ required: true, message: '逻辑删除不能为空', trigger: 'blur' }] },
      open: ref(false),
      loading: true,
      showSearch: true,
      ids: [] as any[],
      single: true,
      multiple: true,
      total: 0,
      title: '',
      background: true,
      small: true,
      form: {} as any,
      titleImg: '/src/assets/images/comprehensive/compreFile.png'
    })
    this.getList()
  }
  handleSizeChange = (val: number) => {
    this.baseData.queryParams.pageSize = val
    this.getList()
  }
  handleCurrentChange = (val: number) => {
    this.baseData.queryParams.pageNum = val
    this.getList()
  }

  // 查询电缆接头列表
  getList = async () => {
    let res = await listConnector(this.baseData.queryParams)
    console.log(res)
    this.baseData.loading = true
    listConnector(this.baseData.queryParams).then((response: any) => {
      this.baseData.connectorList = response.rows
      this.baseData.total = response.total
      this.baseData.loading = false
    })
  }
  // 取消按钮
  cancel = () => {
    this.baseData.open = false
    this.reset()
  }
  // 表单重置
  reset() {
    this.baseData.form = {
      id: null,
      manufactureDate: null,
      productionOrg: null,
      producer: null,
      producerId: null,
      model: null,
      manufacturer: null,
      junctionType: null,
      isFireproof: null,
      isExplosionProofBox: null,
      name: null,
      sn: null,
      picture: null,
      city: null,
      maintOrg: null,
      maintGroup: null,
      equipmentOwner: null,
      feeder: null,
      makeWay: null,
      voltageLevel: null,
      psrState: null,
      startTime: null,
      astNature: null,
      stopTime: null,
      isRural: null,
      importance: null,
      regionalism: null,
      installationLocation: null,
      branchFeeder: null,
      line: null,
      pubPrivFlag: null,
      geoPositon: null,
      prev: null,
      astOrg: null,
      next: null,
      passage: null,
      parameter: null,
      createTime: null,
      createBy: null,
      updateTime: null,
      updateBy: null,
      logicDelete: null,
      deptId: null,
      projectNum: null,
      projectName: null,
      isCommission: null,
      deployState: null,
      manufactureNum: null
    }
  }

  // 搜索按钮操作
  handleQuery = () => {
    this.baseData.queryParams.pageNum = 1
    this.getList()
  }

  // 重置按钮操作
  resetQuery = (proxy: any) => {
    proxy.$refs['queryRef'].resetFields()
    this.handleQuery()
  }
  // 多选框选中数据
  handleSelectionChange = (selection: any) => {
    this.baseData.ids = selection.map((item: any) => item.id)
    this.baseData.single = selection.length !== 1
    this.baseData.multiple = !selection.length
  }

  // 新增按钮操作
  handleAdd = () => {
    this.reset()
    this.baseData.open = true
    this.baseData.title = '添加电缆接头'
  }

  // 修改按钮操作
  handleUpdate = (row: any) => {
    this.baseData.open = true
    this.reset()
    const _id = row.id || this.baseData.ids
    getConnector(_id).then((response: any) => {
      this.baseData.form = response.data
      this.baseData.title = '修改电缆接头'
    })
  }
  // 提交按钮
  submitForm = (proxy: any) => {
    proxy.$refs['dataFormRef'].validate(valid => {
      if (valid) {
        if (this.baseData.form.id !== null) {
          updateDatasource(this.baseData.form).then((response: any) => {
            // eslint-disable-next-line new-cap
            ElMessage({
              type: 'success',
              message: '修改成功'
            })
            this.baseData.open = false
            this.getList()
          })
        } else {
          addConnector(this.baseData.form).then((response: any) => {
            // eslint-disable-next-line new-cap
            ElMessage({
              type: 'success',
              message: '新增成功'
            })
            this.baseData.open = false
            this.getList()
          })
        }
      }
    })
  }

  // 删除按钮操作
  handleDelete = (row: any) => {
    const _ids = row.id || this.baseData.ids
    ElMessageBox.confirm('是否确认删除电缆接头编号为"' + _ids + '"的数据项？', 'Warning', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => delConnector(_ids))
      .then(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        this.getList()
      })
      .catch(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'error',
          message: '删除失败'
        })
      })
  }

  // 导出按钮操作
  handleExport = (proxy: any) => {
    proxy.download(
      '',
      {
        ...this.baseData.queryParams
      },
      `connector_${new Date().getTime()}.xlsx`
    )
  }
}
