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
      rules: { logicDelete: [{ required: true, message: '????????????????????????', trigger: 'blur' }] },
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

  // ????????????????????????
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
  // ????????????
  cancel = () => {
    this.baseData.open = false
    this.reset()
  }
  // ????????????
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

  // ??????????????????
  handleQuery = () => {
    this.baseData.queryParams.pageNum = 1
    this.getList()
  }

  // ??????????????????
  resetQuery = (proxy: any) => {
    proxy.$refs['queryRef'].resetFields()
    this.handleQuery()
  }
  // ?????????????????????
  handleSelectionChange = (selection: any) => {
    this.baseData.ids = selection.map((item: any) => item.id)
    this.baseData.single = selection.length !== 1
    this.baseData.multiple = !selection.length
  }

  // ??????????????????
  handleAdd = () => {
    this.reset()
    this.baseData.open = true
    this.baseData.title = '??????????????????'
  }

  // ??????????????????
  handleUpdate = (row: any) => {
    this.baseData.open = true
    this.reset()
    const _id = row.id || this.baseData.ids
    getConnector(_id).then((response: any) => {
      this.baseData.form = response.data
      this.baseData.title = '??????????????????'
    })
  }
  // ????????????
  submitForm = (proxy: any) => {
    proxy.$refs['dataFormRef'].validate(valid => {
      if (valid) {
        if (this.baseData.form.id !== null) {
          updateDatasource(this.baseData.form).then((response: any) => {
            // eslint-disable-next-line new-cap
            ElMessage({
              type: 'success',
              message: '????????????'
            })
            this.baseData.open = false
            this.getList()
          })
        } else {
          addConnector(this.baseData.form).then((response: any) => {
            // eslint-disable-next-line new-cap
            ElMessage({
              type: 'success',
              message: '????????????'
            })
            this.baseData.open = false
            this.getList()
          })
        }
      }
    })
  }

  // ??????????????????
  handleDelete = (row: any) => {
    const _ids = row.id || this.baseData.ids
    ElMessageBox.confirm('???????????????????????????????????????"' + _ids + '"???????????????', 'Warning', {
      confirmButtonText: '??????',
      cancelButtonText: '??????',
      type: 'warning'
    })
      .then(() => delConnector(_ids))
      .then(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'success',
          message: '????????????'
        })
        this.getList()
      })
      .catch(() => {
        // eslint-disable-next-line new-cap
        ElMessage({
          type: 'error',
          message: '????????????'
        })
      })
  }

  // ??????????????????
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
