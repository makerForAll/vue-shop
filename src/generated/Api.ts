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
import type {
  ClientControllerCreateObjByFieldData,
  ClientControllerDeleteData,
  ClientControllerFindAllData,
  ClientControllerFindAllParams,
  ClientControllerFindObjsByFieldData,
  ClientControllerFindObjsByFieldParams,
  ClientControllerFindOneData,
  ClientControllerUpdateData,
  CreateClientDTO,
  CreatePartyDTO,
  CreatePartySoftWareDTO,
  CreatePaymentDetailItemDTO,
  CreatePaymentPlanSplitDTO,
  CreatePlanDTO,
  CreateSoftWareDTO,
  CreateUnityDTO,
  PartyControllerCreateData,
  PartyControllerDeleteData,
  PartyControllerFindAllData,
  PartyControllerFindAllParams,
  PartyControllerFindOneData,
  PartyControllerUpdateData,
  PartySoftwareControllerCreateData,
  PartySoftwareControllerDeleteData,
  PartySoftwareControllerFindAllData,
  PartySoftwareControllerFindAllParams,
  PartySoftwareControllerFindOneData,
  PartySoftwareControllerFindOneForRelObjData,
  PartySoftwareControllerUpdateData,
  PaymentdetailitemControllerCreateData,
  PaymentdetailitemControllerDeleteData,
  PaymentdetailitemControllerFindAllData,
  PaymentdetailitemControllerFindAllParams,
  PaymentdetailitemControllerFindByClientIdData,
  PaymentdetailitemControllerFindByClientIdParams,
  PaymentdetailitemControllerFindOneData,
  PaymentdetailitemControllerUpdateData,
  PaymentplansplitControllerCreateData,
  PaymentplansplitControllerDeleteData,
  PaymentplansplitControllerFindAllData,
  PaymentplansplitControllerFindAllParams,
  PaymentplansplitControllerFindOneData,
  PaymentplansplitControllerUpdateData,
  PlanControllerCreatePlanByClientIdData,
  PlanControllerDeleteData,
  PlanControllerFindAllData,
  PlanControllerFindAllParams,
  PlanControllerFindOneData,
  PlanControllerFindPlanByClientIdData,
  PlanControllerFindPlanByClientIdParams,
  PlanControllerFindPlanByPartysoftwareIdData,
  PlanControllerFindPlanByPartysoftwareIdParams,
  PlanControllerGetInitData,
  PlanControllerUpdateData,
  SoftwareControllerCreateData,
  SoftwareControllerDeleteData,
  SoftwareControllerFindAllData,
  SoftwareControllerFindAllParams,
  SoftwareControllerFindOneData,
  SoftwareControllerGetInitData,
  SoftwareControllerUpdateData,
  UnityControllerCreateData,
  UnityControllerCreateObjByFieldData,
  UnityControllerDeleteData,
  UnityControllerFindAllData,
  UnityControllerFindAllParams,
  UnityControllerFindObjsByFieldIdData,
  UnityControllerFindObjsByFieldIdParams,
  UnityControllerFindOneData,
  UnityControllerGetInitData,
  UnityControllerUpdateData,
  UpdateClientDTO,
  UpdatePartyDTO,
  UpdatePartySoftWareDTO,
  UpdatePaymentDetailItemDTO,
  UpdatePaymentPlanSplitDTO,
  UpdatePlanDTO,
  UpdateSoftWareDTO,
  UpdateUnityDTO
} from './data-contracts'
import { ContentType, HttpClient, type RequestParams } from './http-client'

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerCreate
   * @summary 创建party
   * @request POST:/api/v1/party
   */
  partyControllerCreate = (data: CreatePartyDTO, params: RequestParams = {}) =>
    this.request<PartyControllerCreateData, any>({
      path: `/api/v1/party`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerFindAll
   * @summary 获取所有Party
   * @request GET:/api/v1/party
   */
  partyControllerFindAll = (query: PartyControllerFindAllParams, params: RequestParams = {}) =>
    this.request<PartyControllerFindAllData, any>({
      path: `/api/v1/party`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerFindOne
   * @summary 根据ID获取party
   * @request GET:/api/v1/party/{partyId}
   */
  partyControllerFindOne = (partyId: string, params: RequestParams = {}) =>
    this.request<PartyControllerFindOneData, any>({
      path: `/api/v1/party/${partyId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerUpdate
   * @summary 更新party
   * @request PATCH:/api/v1/party/{partyId}
   */
  partyControllerUpdate = (partyId: string, data: UpdatePartyDTO, params: RequestParams = {}) =>
    this.request<PartyControllerUpdateData, any>({
      path: `/api/v1/party/${partyId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerDelete
   * @summary 删除party
   * @request DELETE:/api/v1/party/{partyId}
   */
  partyControllerDelete = (partyId: string, params: RequestParams = {}) =>
    this.request<PartyControllerDeleteData, any>({
      path: `/api/v1/party/${partyId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags software
   * @name SoftwareControllerGetInit
   * @summary plan数据初始化
   * @request GET:/api/v1/software/init
   */
  softwareControllerGetInit = (params: RequestParams = {}) =>
    this.request<SoftwareControllerGetInitData, any>({
      path: `/api/v1/software/init`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags software
   * @name SoftwareControllerCreate
   * @summary 创建software
   * @request POST:/api/v1/software
   */
  softwareControllerCreate = (data: CreateSoftWareDTO, params: RequestParams = {}) =>
    this.request<SoftwareControllerCreateData, any>({
      path: `/api/v1/software`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags software
   * @name SoftwareControllerFindAll
   * @summary 获取所有software
   * @request GET:/api/v1/software
   */
  softwareControllerFindAll = (
    query: SoftwareControllerFindAllParams,
    params: RequestParams = {}
  ) =>
    this.request<SoftwareControllerFindAllData, any>({
      path: `/api/v1/software`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags software
   * @name SoftwareControllerFindOne
   * @summary 根据ID获取software
   * @request GET:/api/v1/software/{softwareId}
   */
  softwareControllerFindOne = (softwareId: string, params: RequestParams = {}) =>
    this.request<SoftwareControllerFindOneData, any>({
      path: `/api/v1/software/${softwareId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags software
   * @name SoftwareControllerUpdate
   * @summary 更新software
   * @request PATCH:/api/v1/software/{softwareId}
   */
  softwareControllerUpdate = (
    softwareId: string,
    data: UpdateSoftWareDTO,
    params: RequestParams = {}
  ) =>
    this.request<SoftwareControllerUpdateData, any>({
      path: `/api/v1/software/${softwareId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags software
   * @name SoftwareControllerDelete
   * @summary 删除software
   * @request DELETE:/api/v1/software/{softwareId}
   */
  softwareControllerDelete = (softwareId: string, params: RequestParams = {}) =>
    this.request<SoftwareControllerDeleteData, any>({
      path: `/api/v1/software/${softwareId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags party-software
   * @name PartySoftwareControllerCreate
   * @summary 创建 partysoftware
   * @request POST:/api/v1/partysoftware
   */
  partySoftwareControllerCreate = (data: CreatePartySoftWareDTO, params: RequestParams = {}) =>
    this.request<PartySoftwareControllerCreateData, any>({
      path: `/api/v1/partysoftware`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags party-software
   * @name PartySoftwareControllerFindAll
   * @summary 获取所有 partysoftware
   * @request GET:/api/v1/partysoftware
   */
  partySoftwareControllerFindAll = (
    query: PartySoftwareControllerFindAllParams,
    params: RequestParams = {}
  ) =>
    this.request<PartySoftwareControllerFindAllData, any>({
      path: `/api/v1/partysoftware`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags party-software
   * @name PartySoftwareControllerFindOne
   * @summary 根据ID获取 partysoftware的关联中带字符串ID
   * @request GET:/api/v1/partysoftware/{partysoftwareId}
   */
  partySoftwareControllerFindOne = (partysoftwareId: string, params: RequestParams = {}) =>
    this.request<PartySoftwareControllerFindOneData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags party-software
   * @name PartySoftwareControllerUpdate
   * @summary 更新 partysoftware
   * @request PATCH:/api/v1/partysoftware/{partysoftwareId}
   */
  partySoftwareControllerUpdate = (
    partysoftwareId: string,
    data: UpdatePartySoftWareDTO,
    params: RequestParams = {}
  ) =>
    this.request<PartySoftwareControllerUpdateData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags party-software
   * @name PartySoftwareControllerDelete
   * @summary 删除 partysoftware
   * @request DELETE:/api/v1/partysoftware/{partysoftwareId}
   */
  partySoftwareControllerDelete = (partysoftwareId: string, params: RequestParams = {}) =>
    this.request<PartySoftwareControllerDeleteData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags party-software
   * @name PartySoftwareControllerFindOneForRelObj
   * @summary 根据ID获取 partysoftware正常打印关联对象
   * @request GET:/api/v1/partysoftware/{partysoftwareId}/forrelobj
   */
  partySoftwareControllerFindOneForRelObj = (partysoftwareId: string, params: RequestParams = {}) =>
    this.request<PartySoftwareControllerFindOneForRelObjData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}/forrelobj`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerFindAll
   * @summary 获取所有client数据
   * @request GET:/api/v1/client
   */
  clientControllerFindAll = (query: ClientControllerFindAllParams, params: RequestParams = {}) =>
    this.request<ClientControllerFindAllData, any>({
      path: `/api/v1/client`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerFindOne
   * @summary 根据ID获取客户
   * @request GET:/api/v1/client/{clientId}
   */
  clientControllerFindOne = (clientId: string, params: RequestParams = {}) =>
    this.request<ClientControllerFindOneData, any>({
      path: `/api/v1/client/${clientId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerUpdate
   * @summary 更新客户
   * @request PATCH:/api/v1/client/{clientId}
   */
  clientControllerUpdate = (clientId: string, data: UpdateClientDTO, params: RequestParams = {}) =>
    this.request<ClientControllerUpdateData, any>({
      path: `/api/v1/client/${clientId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerDelete
   * @summary 删除客户
   * @request DELETE:/api/v1/client/{clientId}
   */
  clientControllerDelete = (clientId: string, params: RequestParams = {}) =>
    this.request<ClientControllerDeleteData, any>({
      path: `/api/v1/client/${clientId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerFindObjsByField
   * @summary 通过PartySoftwareId 获取相关的Clients
   * @request GET:/api/v1/partysoftware/{partysoftwareId}/client
   */
  clientControllerFindObjsByField = (
    { partysoftwareId, ...query }: ClientControllerFindObjsByFieldParams,
    params: RequestParams = {}
  ) =>
    this.request<ClientControllerFindObjsByFieldData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}/client`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerCreateObjByField
   * @summary 通过PartyId 创建关联client
   * @request POST:/api/v1/partysoftware/{partysoftwareId}/client
   */
  clientControllerCreateObjByField = (
    partysoftwareId: string,
    data: CreateClientDTO,
    params: RequestParams = {}
  ) =>
    this.request<ClientControllerCreateObjByFieldData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}/client`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerGetInit
   * @summary unity数据初始化
   * @request GET:/api/v1/unity/init
   */
  unityControllerGetInit = (params: RequestParams = {}) =>
    this.request<UnityControllerGetInitData, any>({
      path: `/api/v1/unity/init`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerCreate
   * @summary 创建Unity
   * @request POST:/api/v1/unity
   */
  unityControllerCreate = (data: CreateUnityDTO, params: RequestParams = {}) =>
    this.request<UnityControllerCreateData, any>({
      path: `/api/v1/unity`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerFindAll
   * @summary 获取所有Unity
   * @request GET:/api/v1/unity
   */
  unityControllerFindAll = (query: UnityControllerFindAllParams, params: RequestParams = {}) =>
    this.request<UnityControllerFindAllData, any>({
      path: `/api/v1/unity`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerFindOne
   * @summary 根据ID获取unity
   * @request GET:/api/v1/unity/{unityId}
   */
  unityControllerFindOne = (unityId: string, params: RequestParams = {}) =>
    this.request<UnityControllerFindOneData, any>({
      path: `/api/v1/unity/${unityId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerUpdate
   * @summary 更新unity
   * @request PATCH:/api/v1/unity/{unityId}
   */
  unityControllerUpdate = (unityId: string, data: UpdateUnityDTO, params: RequestParams = {}) =>
    this.request<UnityControllerUpdateData, any>({
      path: `/api/v1/unity/${unityId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerDelete
   * @summary 删除party
   * @request DELETE:/api/v1/unity/{unityId}
   */
  unityControllerDelete = (unityId: string, params: RequestParams = {}) =>
    this.request<UnityControllerDeleteData, any>({
      path: `/api/v1/unity/${unityId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerFindObjsByFieldId
   * @summary 通过PartySoftwareId 获取相关的Clients
   * @request GET:/api/v1/partysoftware/{fieldId}/unity
   */
  unityControllerFindObjsByFieldId = (
    { fieldId, ...query }: UnityControllerFindObjsByFieldIdParams,
    params: RequestParams = {}
  ) =>
    this.request<UnityControllerFindObjsByFieldIdData, any>({
      path: `/api/v1/partysoftware/${fieldId}/unity`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags unity
   * @name UnityControllerCreateObjByField
   * @summary 通过Id 创建关联client
   * @request POST:/api/v1/partysoftware/{fieldId}/unity
   */
  unityControllerCreateObjByField = (
    fieldId: string,
    data: CreateUnityDTO,
    params: RequestParams = {}
  ) =>
    this.request<UnityControllerCreateObjByFieldData, any>({
      path: `/api/v1/partysoftware/${fieldId}/unity`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerGetInit
   * @summary plan数据初始化
   * @request GET:/api/v1/plan/init
   */
  planControllerGetInit = (params: RequestParams = {}) =>
    this.request<PlanControllerGetInitData, any>({
      path: `/api/v1/plan/init`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerFindAll
   * @summary 获取所有Plan
   * @request GET:/api/v1/plan
   */
  planControllerFindAll = (query: PlanControllerFindAllParams, params: RequestParams = {}) =>
    this.request<PlanControllerFindAllData, any>({
      path: `/api/v1/plan`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerFindOne
   * @summary 获取单个Plan
   * @request GET:/api/v1/plan/{planId}
   */
  planControllerFindOne = (planId: string, params: RequestParams = {}) =>
    this.request<PlanControllerFindOneData, any>({
      path: `/api/v1/plan/${planId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerUpdate
   * @summary 更新Plan
   * @request PATCH:/api/v1/plan/{planId}
   */
  planControllerUpdate = (planId: string, data: UpdatePlanDTO, params: RequestParams = {}) =>
    this.request<PlanControllerUpdateData, any>({
      path: `/api/v1/plan/${planId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerDelete
   * @summary 删除Plan
   * @request DELETE:/api/v1/plan/{planId}
   */
  planControllerDelete = (planId: string, params: RequestParams = {}) =>
    this.request<PlanControllerDeleteData, any>({
      path: `/api/v1/plan/${planId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerCreatePlanByClientId
   * @summary 获取指定clienId来创建Plan
   * @request POST:/api/v1/client/{clientId}/plan
   */
  planControllerCreatePlanByClientId = (
    clientId: string,
    data: CreatePlanDTO,
    params: RequestParams = {}
  ) =>
    this.request<PlanControllerCreatePlanByClientIdData, any>({
      path: `/api/v1/client/${clientId}/plan`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerFindPlanByClientId
   * @summary 获取指定clientId中的所有Plan
   * @request GET:/api/v1/client/{clientId}/plan
   */
  planControllerFindPlanByClientId = (
    { clientId, ...query }: PlanControllerFindPlanByClientIdParams,
    params: RequestParams = {}
  ) =>
    this.request<PlanControllerFindPlanByClientIdData, any>({
      path: `/api/v1/client/${clientId}/plan`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerFindPlanByPartysoftwareId
   * @request GET:/api/v1/partysoftware/{partysoftwareId}/plan
   */
  planControllerFindPlanByPartysoftwareId = (
    { partysoftwareId, ...query }: PlanControllerFindPlanByPartysoftwareIdParams,
    params: RequestParams = {}
  ) =>
    this.request<PlanControllerFindPlanByPartysoftwareIdData, any>({
      path: `/api/v1/partysoftware/${partysoftwareId}/plan`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerFindAll
   * @summary 获取所有paymentdetailitem
   * @request GET:/api/v1/paymentdetailitem
   */
  paymentdetailitemControllerFindAll = (
    query: PaymentdetailitemControllerFindAllParams,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerFindAllData, any>({
      path: `/api/v1/paymentdetailitem`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerFindOne
   * @summary 获取单个Paymentdetailitem
   * @request GET:/api/v1/paymentdetailitem/{paymentdetailitemId}
   */
  paymentdetailitemControllerFindOne = (paymentdetailitemId: string, params: RequestParams = {}) =>
    this.request<PaymentdetailitemControllerFindOneData, any>({
      path: `/api/v1/paymentdetailitem/${paymentdetailitemId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerUpdate
   * @summary 更新Paymentdetailitem
   * @request PATCH:/api/v1/paymentdetailitem/{paymentdetailitemId}
   */
  paymentdetailitemControllerUpdate = (
    paymentdetailitemId: string,
    data: UpdatePaymentDetailItemDTO,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerUpdateData, any>({
      path: `/api/v1/paymentdetailitem/${paymentdetailitemId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerDelete
   * @summary 删除Paymentdetailitem
   * @request DELETE:/api/v1/paymentdetailitem/{paymentdetailitemId}
   */
  paymentdetailitemControllerDelete = (paymentdetailitemId: string, params: RequestParams = {}) =>
    this.request<PaymentdetailitemControllerDeleteData, any>({
      path: `/api/v1/paymentdetailitem/${paymentdetailitemId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerCreate
   * @summary 创建Paymentdetailitem
   * @request POST:/api/v1/plan/{planId}/paymentdetailitem
   */
  paymentdetailitemControllerCreate = (
    planId: string,
    data: CreatePaymentDetailItemDTO,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerCreateData, any>({
      path: `/api/v1/plan/${planId}/paymentdetailitem`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerFindByClientId
   * @summary 获取某个plan关联的所有Paymentdetailitem
   * @request GET:/api/v1/plan/{planId}/paymentdetailitem
   */
  paymentdetailitemControllerFindByClientId = (
    { planId, ...query }: PaymentdetailitemControllerFindByClientIdParams,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerFindByClientIdData, any>({
      path: `/api/v1/plan/${planId}/paymentdetailitem`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags paymentplansplit
   * @name PaymentplansplitControllerFindAll
   * @summary 获取所有paymentplansplit
   * @request GET:/api/v1/paymentplansplit
   */
  paymentplansplitControllerFindAll = (
    query: PaymentplansplitControllerFindAllParams,
    params: RequestParams = {}
  ) =>
    this.request<PaymentplansplitControllerFindAllData, any>({
      path: `/api/v1/paymentplansplit`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags paymentplansplit
   * @name PaymentplansplitControllerFindOne
   * @summary 获取单个paymentplansplit
   * @request GET:/api/v1/paymentplansplit/{paymentplansplitId}
   */
  paymentplansplitControllerFindOne = (paymentplansplitId: string, params: RequestParams = {}) =>
    this.request<PaymentplansplitControllerFindOneData, any>({
      path: `/api/v1/paymentplansplit/${paymentplansplitId}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentplansplit
   * @name PaymentplansplitControllerUpdate
   * @summary 更新paymentplansplit
   * @request PATCH:/api/v1/paymentplansplit/{paymentplansplitId}
   */
  paymentplansplitControllerUpdate = (
    paymentplansplitId: string,
    data: UpdatePaymentPlanSplitDTO,
    params: RequestParams = {}
  ) =>
    this.request<PaymentplansplitControllerUpdateData, any>({
      path: `/api/v1/paymentplansplit/${paymentplansplitId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags paymentplansplit
   * @name PaymentplansplitControllerDelete
   * @summary 删除paymentplansplit
   * @request DELETE:/api/v1/paymentplansplit/{paymentplansplitId}
   */
  paymentplansplitControllerDelete = (paymentplansplitId: string, params: RequestParams = {}) =>
    this.request<PaymentplansplitControllerDeleteData, any>({
      path: `/api/v1/paymentplansplit/${paymentplansplitId}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentplansplit
   * @name PaymentplansplitControllerCreate
   * @summary 创建paymentplansplit
   * @request POST:/api/v1/paymentdetailitem/{paymentdetailitemId}/paymentplansplit
   */
  paymentplansplitControllerCreate = (
    planId: string,
    paymentdetailitemId: string,
    data: CreatePaymentPlanSplitDTO,
    params: RequestParams = {}
  ) =>
    this.request<PaymentplansplitControllerCreateData, any>({
      path: `/api/v1/paymentdetailitem/${paymentdetailitemId}/paymentplansplit`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
}
