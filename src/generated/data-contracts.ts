/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreatePartyDTO {
  /** 名称 */
  name: string
  /** 名称 */
  url: string
  /**
   * 备注
   * @default ""
   */
  marks?: string
  /**
   * 排序
   * @default ""
   */
  sorting?: number
  /** 关联客人 */
  partySoftware?: any[]
}

export interface UpdatePartyDTO {
  /** 名称 */
  name: string
  /** 名称 */
  url: string
  /**
   * 备注
   * @default ""
   */
  marks?: string
  /**
   * 排序
   * @default ""
   */
  sorting?: number
  /** 关联客人 */
  partySoftware?: any[]
}

export interface CreateSoftWareDTO {
  /** 软件名称 */
  name: string
  /** 链接 */
  url?: string
  /** 备注 */
  marks?: string
  /** 计划 */
  partySoftware?: any[]
}

export interface UpdateSoftWareDTO {
  /** 软件名称 */
  name: string
  /** 链接 */
  url?: string
  /** 备注 */
  marks?: string
  /** 关系实体-公司软件 */
  partySoftware?: any[]
}

export interface CreatePartySoftWareDTO {
  /** 乙方名称 */
  name: string
  /** 链接 */
  url?: string
  /** 备注 */
  marks?: string
  /** 是否禁止 */
  disabled?: boolean
  /** 公司(手动外键 */
  partyId?: string
  /** 软件(手动外键 */
  softwareId?: string
  /** 计划 */
  clients?: any[]
}

export interface UpdatePartySoftWareDTO {
  /** 乙方名称 */
  name: string
  /** 链接 */
  url?: string
  /** 备注 */
  marks?: string
  /** 是否禁止 */
  disabled?: boolean
  /** 公司(手动外键 */
  partyId?: string
  /** 软件(手动外键 */
  softwareId?: string
  /** 计划 */
  clients?: any[]
}

export interface UpdateClientDTO {
  /** 乙方名称 */
  name: string
  /** ID号码 */
  IDcard?: string
  /** 联系人 */
  contact: string
  /** 联系号码 */
  phonenumber: string
  /** 紧急联系人 */
  emergencycontact?: string
  /** 紧急联系人号码 */
  emergencycontactphone?: string
  /** 备注 */
  marks?: string
  /** 业务 */
  business?: string
  /** 用途 */
  usage?: string
  /** 备注 */
  tags?: number
  /** 是否带看过 */
  isViewScheduled?: boolean
  /**
   * 创建时间-后端Date格式
   * @format date-time
   */
  createdAt?: string
  /** 软件 */
  partySoftware: any
  /** 计划 */
  plans?: any[]
}

export interface CreateClientDTO {
  /** 乙方名称 */
  name: string
  /** ID号码 */
  IDcard?: string
  /** 联系人 */
  contact: string
  /** 联系号码 */
  phonenumber: string
  /** 紧急联系人 */
  emergencycontact?: string
  /** 紧急联系人号码 */
  emergencycontactphone?: string
  /** 备注 */
  marks?: string
  /** 业务 */
  business?: string
  /** 用途 */
  usage?: string
  /** 备注 */
  tags?: number
  /** 是否带看过 */
  isViewScheduled?: boolean
  /**
   * 创建时间-后端Date格式
   * @format date-time
   */
  createdAt?: string
  /** 软件 */
  partySoftware: any
  /** 计划 */
  plans?: any[]
}

export interface CreateUnityDTO {
  /**
   * Unit code
   * @example "U123"
   */
  code: string
  /**
   * Unit area in square meters
   * @example 120.5
   */
  area: number
  /**
   * Shared area in square meters
   * @example 80.5
   */
  shared_area: number
  /**
   * XY coordinates
   * @example "[0, 0]"
   */
  coordinates: string
  /**
   * Angle in degrees
   * @example 45
   */
  angle: number
  /**
   * Remarks
   * @example "This is a remark"
   */
  remarks?: string
  /** partySoftware */
  partySoftware?: any
  /** 关联方案 */
  plan?: any
}

export interface UpdateUnityDTO {
  /**
   * Unit code
   * @example "U123"
   */
  code: string
  /**
   * Unit area in square meters
   * @example 120.5
   */
  area: number
  /**
   * Shared area in square meters
   * @example 80.5
   */
  shared_area: number
  /**
   * XY coordinates
   * @example "[0, 0]"
   */
  coordinates: string
  /**
   * Angle in degrees
   * @example 45
   */
  angle: number
  /**
   * Remarks
   * @example "This is a remark"
   */
  remarks?: string
  /** partySoftware */
  partySoftware?: any
  /** 关联方案 */
  plan?: any
}

export interface ReadClientDTO {
  /** 乙方名称 */
  name: string
  /** ID号码 */
  IDcard?: string
  /** 联系人 */
  contact: string
  /** 联系号码 */
  phonenumber: string
  /** 紧急联系人 */
  emergencycontact?: string
  /** 紧急联系人号码 */
  emergencycontactphone?: string
  /** 备注 */
  marks?: string
  /** 业务 */
  business?: string
  /** 用途 */
  usage?: string
  /** 备注 */
  tags?: number
  /** 是否带看过 */
  isViewScheduled?: boolean
  /** ID */
  id?: string
  /**
   * 创建时间-后端Date格式
   * @format date-time
   */
  createdAt?: string
  /** 软件 */
  partySoftware: any
  /** 计划 */
  plans?: any[]
}

export interface ReadPaymentPlanSplitDTO {
  /** ID */
  id?: string
  /** 期数 */
  index?: string
  /** 段数 */
  childIndex?: string
  /** 支付金额 */
  payment_amount?: number
  /** 状态 */
  state?: number
  /** 状态 */
  set_state_model?: number
  /** 依据链接 */
  referencelink?: string
  /** 备注 */
  remarks?: string
  /** 押金抵扣 */
  deposit_deduction?: number
  /** 押金余额 */
  deposit_balance?: number
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /**
   * 支付截止日期
   * @format date-time
   */
  payment_date: string
  /**
   * 操作日期
   * @format date-time
   */
  operation_date: string
  /** 支付明细项 */
  payment_detail_item?: CreatePaymentDetailItemDTO
}

export interface ReadPaymentDetailItemDTO {
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /** 金额 */
  amount: number
  /**
   * 到期时间
   * @format date-time
   */
  due_date: string
  /** 备注 */
  remarks?: string
  /** 依据链接 */
  referencelink?: string
  /** 所属planID */
  planId?: string
  /** ID */
  id?: string
  /** 方案 */
  plan?: ReadPlanDTO
  /** 分期付款计划 */
  payment_plan_splits?: ReadPaymentPlanSplitDTO[]
}

export interface BaseUnityDTO {
  /**
   * Unit code
   * @example "U123"
   */
  code: string
  /**
   * Unit area in square meters
   * @example 120.5
   */
  area: number
  /**
   * Shared area in square meters
   * @example 80.5
   */
  shared_area: number
  /**
   * XY coordinates
   * @example "[0, 0]"
   */
  coordinates: string
  /**
   * Angle in degrees
   * @example 45
   */
  angle: number
  /**
   * Remarks
   * @example "This is a remark"
   */
  remarks?: string
}

export interface ReadPlanDTO {
  /** 方案名称 */
  name?: string
  /** 位置1 */
  first_name?: string
  /**
   * 面积1
   * @default 0
   */
  first_area?: number
  /** 单价1 */
  first_price?: number
  /** 位置2 */
  second_name?: string
  /** 面积2 */
  second_area?: number
  /** 单价2 */
  second_price?: number
  /** 位置3 */
  third_name?: string
  /** 面积3 */
  third_area?: number
  /** 单价3 */
  third_price?: number
  /** 总面积 */
  total_area?: number
  /** 平均单价 */
  average_price?: number
  /** 初期每月费用 */
  initial_monthly_price?: number
  /** 合同类型 */
  contract_type?: string
  /** 合同状态 */
  contract_status?: string
  /** 记录类型 */
  record_type?: string
  /** 是否为默认值 */
  is_default?: boolean
  /** 合同的天数 */
  contract_duration_days?: number
  /** 支付方式（每多少个月） */
  payment_interval_months?: number
  /** 增长率条件（每多少个月） */
  increase_interval_months?: number
  /** 增长率（百分比） */
  increase_rate?: number
  /** 押金（元） */
  deposit?: number
  /** 减免（月） */
  rent_free_months?: number
  /** 首次支付费用截止日期为合同生效日期后的第几天 */
  initial_payment_duedays?: number
  /** 每期支付费用截止日期为每期应当提前多少月 */
  recurring_payment_duedays?: number
  /** 合同总金额 */
  total_amount?: number
  /** 备注 */
  remarks?: string
  /** 单元储存 */
  save_unity_data?: string[]
  /** 不动产单元储存 */
  rel_store?: string[]
  /** 不动产单元储存2 */
  rel_store2?: string[]
  /** 不动产单元储存3 */
  rel_store3?: string[]
  /** ID */
  id?: string
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: ReadClientDTO
  /** 支付明细 */
  payment_detail_items?: ReadPaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: BaseUnityDTO[]
}

export interface CreatePaymentPlanSplitDTO {
  /** ID */
  id?: string
  /** 期数 */
  index?: string
  /** 段数 */
  childIndex?: string
  /** 支付金额 */
  payment_amount?: number
  /** 状态 */
  state?: number
  /** 状态 */
  set_state_model?: number
  /** 依据链接 */
  referencelink?: string
  /** 备注 */
  remarks?: string
  /** 押金抵扣 */
  deposit_deduction?: number
  /** 押金余额 */
  deposit_balance?: number
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /**
   * 支付截止日期
   * @format date-time
   */
  payment_date: string
  /**
   * 操作日期
   * @format date-time
   */
  operation_date: string
  /** 支付明细项 */
  payment_detail_item?: CreatePaymentDetailItemDTO
}

export interface CreatePaymentDetailItemDTO {
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /** 金额 */
  amount: number
  /**
   * 到期时间
   * @format date-time
   */
  due_date: string
  /** 备注 */
  remarks?: string
  /** 依据链接 */
  referencelink?: string
  /** 所属planID */
  planId?: string
  /** 方案 */
  plan?: ReadPlanDTO
  /** 分期付款计划 */
  payment_plan_splits?: CreatePaymentPlanSplitDTO[]
}

export interface UpdatePlanDTO {
  /** 方案名称 */
  name?: string
  /** 位置1 */
  first_name?: string
  /**
   * 面积1
   * @default 0
   */
  first_area?: number
  /** 单价1 */
  first_price?: number
  /** 位置2 */
  second_name?: string
  /** 面积2 */
  second_area?: number
  /** 单价2 */
  second_price?: number
  /** 位置3 */
  third_name?: string
  /** 面积3 */
  third_area?: number
  /** 单价3 */
  third_price?: number
  /** 总面积 */
  total_area?: number
  /** 平均单价 */
  average_price?: number
  /** 初期每月费用 */
  initial_monthly_price?: number
  /** 合同类型 */
  contract_type?: string
  /** 合同状态 */
  contract_status?: string
  /** 记录类型 */
  record_type?: string
  /** 是否为默认值 */
  is_default?: boolean
  /** 合同的天数 */
  contract_duration_days?: number
  /** 支付方式（每多少个月） */
  payment_interval_months?: number
  /** 增长率条件（每多少个月） */
  increase_interval_months?: number
  /** 增长率（百分比） */
  increase_rate?: number
  /** 押金（元） */
  deposit?: number
  /** 减免（月） */
  rent_free_months?: number
  /** 首次支付费用截止日期为合同生效日期后的第几天 */
  initial_payment_duedays?: number
  /** 每期支付费用截止日期为每期应当提前多少月 */
  recurring_payment_duedays?: number
  /** 合同总金额 */
  total_amount?: number
  /** 备注 */
  remarks?: string
  /** 单元储存 */
  save_unity_data?: string[]
  /** 不动产单元储存 */
  rel_store?: string[]
  /** 不动产单元储存2 */
  rel_store2?: string[]
  /** 不动产单元储存3 */
  rel_store3?: string[]
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: CreateClientDTO
  /** 支付明细 */
  payment_detail_items?: CreatePaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: BaseUnityDTO[]
}

export type Unity = object

export interface CreatePlanDTO {
  /** 方案名称 */
  name?: string
  /** 位置1 */
  first_name?: string
  /**
   * 面积1
   * @default 0
   */
  first_area?: number
  /** 单价1 */
  first_price?: number
  /** 位置2 */
  second_name?: string
  /** 面积2 */
  second_area?: number
  /** 单价2 */
  second_price?: number
  /** 位置3 */
  third_name?: string
  /** 面积3 */
  third_area?: number
  /** 单价3 */
  third_price?: number
  /** 总面积 */
  total_area?: number
  /** 平均单价 */
  average_price?: number
  /** 初期每月费用 */
  initial_monthly_price?: number
  /** 合同类型 */
  contract_type?: string
  /** 合同状态 */
  contract_status?: string
  /** 记录类型 */
  record_type?: string
  /** 是否为默认值 */
  is_default?: boolean
  /** 合同的天数 */
  contract_duration_days?: number
  /** 支付方式（每多少个月） */
  payment_interval_months?: number
  /** 增长率条件（每多少个月） */
  increase_interval_months?: number
  /** 增长率（百分比） */
  increase_rate?: number
  /** 押金（元） */
  deposit?: number
  /** 减免（月） */
  rent_free_months?: number
  /** 首次支付费用截止日期为合同生效日期后的第几天 */
  initial_payment_duedays?: number
  /** 每期支付费用截止日期为每期应当提前多少月 */
  recurring_payment_duedays?: number
  /** 合同总金额 */
  total_amount?: number
  /** 备注 */
  remarks?: string
  /** 单元储存 */
  save_unity_data?: string[]
  /** 不动产单元储存 */
  rel_store?: string[]
  /** 不动产单元储存2 */
  rel_store2?: string[]
  /** 不动产单元储存3 */
  rel_store3?: string[]
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: CreateClientDTO
  /** 支付明细 */
  payment_detail_items?: CreatePaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: Unity[]
}

export interface TreePaymentPlanSplitDTO {
  /** ID */
  id?: string
  /** 期数 */
  index?: string
  /** 段数 */
  childIndex?: string
  /** 支付金额 */
  payment_amount?: number
  /** 状态 */
  state?: number
  /** 状态 */
  set_state_model?: number
  /** 依据链接 */
  referencelink?: string
  /** 备注 */
  remarks?: string
  /** 押金抵扣 */
  deposit_deduction?: number
  /** 押金余额 */
  deposit_balance?: number
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /**
   * 支付截止日期
   * @format date-time
   */
  payment_date: string
  /**
   * 操作日期
   * @format date-time
   */
  operation_date: string
}

export interface TreePaymentDetailItemDTO {
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /** 金额 */
  amount: number
  /**
   * 到期时间
   * @format date-time
   */
  due_date: string
  /** 备注 */
  remarks?: string
  /** 依据链接 */
  referencelink?: string
  /** 所属planID */
  planId?: string
  /** ID */
  id?: string
  /** 分期付款计划 */
  payment_plan_splits?: TreePaymentPlanSplitDTO[]
}

export interface TreePlanDTO {
  /** 方案名称 */
  name?: string
  /** 位置1 */
  first_name?: string
  /**
   * 面积1
   * @default 0
   */
  first_area?: number
  /** 单价1 */
  first_price?: number
  /** 位置2 */
  second_name?: string
  /** 面积2 */
  second_area?: number
  /** 单价2 */
  second_price?: number
  /** 位置3 */
  third_name?: string
  /** 面积3 */
  third_area?: number
  /** 单价3 */
  third_price?: number
  /** 总面积 */
  total_area?: number
  /** 平均单价 */
  average_price?: number
  /** 初期每月费用 */
  initial_monthly_price?: number
  /** 合同类型 */
  contract_type?: string
  /** 合同状态 */
  contract_status?: string
  /** 记录类型 */
  record_type?: string
  /** 是否为默认值 */
  is_default?: boolean
  /** 合同的天数 */
  contract_duration_days?: number
  /** 支付方式（每多少个月） */
  payment_interval_months?: number
  /** 增长率条件（每多少个月） */
  increase_interval_months?: number
  /** 增长率（百分比） */
  increase_rate?: number
  /** 押金（元） */
  deposit?: number
  /** 减免（月） */
  rent_free_months?: number
  /** 首次支付费用截止日期为合同生效日期后的第几天 */
  initial_payment_duedays?: number
  /** 每期支付费用截止日期为每期应当提前多少月 */
  recurring_payment_duedays?: number
  /** 合同总金额 */
  total_amount?: number
  /** 备注 */
  remarks?: string
  /** 单元储存 */
  save_unity_data?: string[]
  /** 不动产单元储存 */
  rel_store?: string[]
  /** 不动产单元储存2 */
  rel_store2?: string[]
  /** 不动产单元储存3 */
  rel_store3?: string[]
  /** ID */
  id?: string
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: ReadClientDTO
  /** 支付明细 */
  payment_detail_items?: TreePaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: BaseUnityDTO[]
}

export interface UpdatePaymentDetailItemDTO {
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /** 金额 */
  amount: number
  /**
   * 到期时间
   * @format date-time
   */
  due_date: string
  /** 备注 */
  remarks?: string
  /** 依据链接 */
  referencelink?: string
  /** 所属planID */
  planId?: string
  /** 方案 */
  plan?: ReadPlanDTO
  /** 分期付款计划 */
  payment_plan_splits?: CreatePaymentPlanSplitDTO[]
}

export interface UpdatePaymentPlanSplitDTO {
  /** ID */
  id?: string
  /** 期数 */
  index?: string
  /** 段数 */
  childIndex?: string
  /** 支付金额 */
  payment_amount?: number
  /** 状态 */
  state?: number
  /** 状态 */
  set_state_model?: number
  /** 依据链接 */
  referencelink?: string
  /** 备注 */
  remarks?: string
  /** 押金抵扣 */
  deposit_deduction?: number
  /** 押金余额 */
  deposit_balance?: number
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 截止期间
   * @format date-time
   */
  period_end: string
  /**
   * 支付截止日期
   * @format date-time
   */
  payment_date: string
  /**
   * 操作日期
   * @format date-time
   */
  operation_date: string
  /** 支付明细项 */
  payment_detail_item?: CreatePaymentDetailItemDTO
}

export type PartyControllerCreateData = any

export interface PartyControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
}

export type PartyControllerFindAllData = any

export type PartyControllerFindOneData = any

export type PartyControllerUpdateData = any

export type PartyControllerDeleteData = any

export type SoftwareControllerGetInitData = any

export type SoftwareControllerCreateData = any

export interface SoftwareControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  /** 标签 */
  tags?: 0 | 1 | 2 | 3 | 4
}

export type SoftwareControllerFindAllData = any

export type SoftwareControllerFindOneData = any

export type SoftwareControllerUpdateData = any

export type SoftwareControllerDeleteData = any

export type PartySoftwareControllerCreateData = any

export interface PartySoftwareControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  /** 标签 */
  tags?: 0 | 1 | 2 | 3 | 4
}

export type PartySoftwareControllerFindAllData = any

export type PartySoftwareControllerFindOneData = any

export type PartySoftwareControllerUpdateData = any

export type PartySoftwareControllerDeleteData = any

export type PartySoftwareControllerFindOneForRelObjData = any

export interface ClientControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  /** 标签 */
  tags?: 0 | 1 | 2 | 3 | 4
}

export type ClientControllerFindAllData = any

export type ClientControllerFindOneData = any

export type ClientControllerUpdateData = any

export type ClientControllerDeleteData = any

export interface ClientControllerFindObjsByFieldParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  /** 标签 */
  tags?: 0 | 1 | 2 | 3 | 4
  partysoftwareId: string
}

export type ClientControllerFindObjsByFieldData = any

export type ClientControllerCreateObjByFieldData = any

export type UnityControllerGetInitData = any

export type UnityControllerCreateData = any

export interface UnityControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "code"
   */
  sortField?: 'code'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  /** 标签 */
  tags?: 0 | 1 | 2 | 3 | 4
}

export type UnityControllerFindAllData = any

export type UnityControllerFindOneData = any

export type UnityControllerUpdateData = any

export type UnityControllerDeleteData = any

export interface UnityControllerFindObjsByFieldIdParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "code"
   */
  sortField?: 'code'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  /** 标签 */
  tags?: 0 | 1 | 2 | 3 | 4
  fieldId: string
}

export type UnityControllerFindObjsByFieldIdData = any

export type UnityControllerCreateObjByFieldData = any

export type PlanControllerGetInitData = any

export interface PlanControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
}

export type PlanControllerFindAllData = any

export type PlanControllerFindOneData = any

export type PlanControllerUpdateData = any

export type PlanControllerDeleteData = any

export type PlanControllerCreatePlanByClientIdData = any

export interface PlanControllerFindPlanByClientIdParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  clientId: string
}

export type PlanControllerFindPlanByClientIdData = any

export interface PlanControllerFindPlanByPartysoftwareIdParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "name"
   */
  sortField?: 'name' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  partysoftwareId: string
}

export type PlanControllerFindPlanByPartysoftwareIdData = TreePlanDTO

export interface PaymentdetailitemControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "period_start"
   */
  sortField?: 'period_start'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
}

export type PaymentdetailitemControllerFindAllData = any

export type PaymentdetailitemControllerFindOneData = any

export type PaymentdetailitemControllerUpdateData = any

export type PaymentdetailitemControllerDeleteData = any

export type PaymentdetailitemControllerCreateData = any

export interface PaymentdetailitemControllerFindByClientIdParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "period_start"
   */
  sortField?: 'period_start'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
  planId: string
}

export type PaymentdetailitemControllerFindByClientIdData = any

export interface PaymentplansplitControllerFindAllParams {
  /**
   * 当前页码
   * @default 1
   */
  current?: number
  /**
   * 每页展示多少条信息
   * @default 10
   */
  pagesize?: number
  /**
   * 排序字段
   * @default "index"
   */
  sortField?: 'index' | 'startdate_and_enddate'
  /**
   * 排序顺序
   * @default "DESC"
   */
  sortOrder?: 'ASC' | 'DESC'
}

export type PaymentplansplitControllerFindAllData = any

export type PaymentplansplitControllerFindOneData = any

export type PaymentplansplitControllerUpdateData = any

export type PaymentplansplitControllerDeleteData = any

export type PaymentplansplitControllerCreateData = any
