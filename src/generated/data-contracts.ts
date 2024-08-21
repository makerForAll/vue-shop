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
  /** 关联方案 */
  plan?: any[]
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
  /** ID */
  id?: string
  /** 关联方案 */
  plan?: any[]
}

export interface DynamicFieldDTO {
  /** 位置名称 */
  name?: string
  /** 面积 */
  area?: number
  /** 价格 */
  price?: number
}

export interface CreateClientDTO {
  /** 乙方名称 */
  name: string
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
  /** 备注 */
  client_services?: string
  /** 备注 */
  tags?: number
  /**
   * 创建时间-后端Date格式
   * @format date-time
   */
  createdAt?: string
  /** 计划 */
  party: any
  /** 计划 */
  plans?: any[]
}

export type Unity = object

export interface ReadPlanDTO {
  /** 方案名称 */
  name?: string
  /** 位置1 */
  first_name?: string
  /** 面积1 */
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
  /** 动态位置、面积、价格 */
  dynamic_field?: DynamicFieldDTO[]
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
  /** ID */
  id?: string
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: CreateClientDTO
  /** 支付明细 */
  payment_detail_items?: CreatePaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: Unity[]
}

export interface CreatePaymentPlanSplitDTO {
  /** ID */
  id?: string
  /** 支付截止日期 */
  payment_date: object
  /** 支付金额 */
  payment_amount: object
  /** 是否已支付 */
  is_paid: boolean
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
   * 介绍期间
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
  /** 是否已支付 */
  is_paid: boolean
  /** 是否分期付款 */
  is_split_payment: boolean
  /** 备注 */
  remarks?: string
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
  /** 面积1 */
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
  /** 动态位置、面积、价格 */
  dynamic_field?: DynamicFieldDTO[]
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
  /** ID */
  id?: string
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: CreateClientDTO
  /** 支付明细 */
  payment_detail_items?: CreatePaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: Unity[]
}

export interface CreatePlanDTO {
  /** 方案名称 */
  name?: string
  /** 位置1 */
  first_name?: string
  /** 面积1 */
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
  /** 动态位置、面积、价格 */
  dynamic_field?: DynamicFieldDTO[]
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
  /** 合同生效期间，起始时间-截止时间 */
  startdate_and_enddate?: string[]
  /** 乙方客户 */
  client?: CreateClientDTO
  /** 支付明细 */
  payment_detail_items?: CreatePaymentDetailItemDTO[]
  /** 支付明细 */
  unitys?: Unity[]
}

export interface UpdateClientDTO {
  /** 乙方名称 */
  name: string
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
  /** 备注 */
  client_services?: string
  /** 备注 */
  tags?: number
  /** ID */
  id?: string
  /**
   * 创建时间-后端Date格式
   * @format date-time
   */
  createdAt?: string
  /** 计划 */
  party: any
  /** 计划 */
  plans?: any[]
}

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
  /** 关联客人 */
  clients?: any[]
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
  /** ID */
  id?: string
  /** 关联客人 */
  clients?: any[]
}

export interface UpdatePaymentDetailItemDTO {
  /**
   * 开始期间
   * @format date-time
   */
  period_start: string
  /**
   * 介绍期间
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
  /** 是否已支付 */
  is_paid: boolean
  /** 是否分期付款 */
  is_split_payment: boolean
  /** 备注 */
  remarks?: string
  /** 方案 */
  plan?: ReadPlanDTO
  /** 分期付款计划 */
  payment_plan_splits?: CreatePaymentPlanSplitDTO[]
}

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
}

export type UnityControllerFindAllData = any

export type UnityControllerFindOneData = any

export type UnityControllerUpdateData = any

export type UnityControllerDeleteData = any

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

export type ClientControllerCreateData = any

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
}

export type ClientControllerFindAllData = any

export type ClientControllerFindOneData = any

export type ClientControllerUpdateData = any

export type ClientControllerDeleteData = any

export interface ClientControllerFindClientsParams {
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
  partyId: string
}

export type ClientControllerFindClientsData = any

export type ClientControllerCreateClientByPartyData = any

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
