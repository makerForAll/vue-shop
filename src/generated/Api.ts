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
  ClientControllerCreateClientByPartyData,
  ClientControllerCreateData,
  ClientControllerDeleteData,
  ClientControllerFindAllData,
  ClientControllerFindAllParams,
  ClientControllerFindClientsData,
  ClientControllerFindClientsParams,
  ClientControllerFindOneData,
  ClientControllerUpdateData,
  CreateClientDTO,
  CreatePartyDTO,
  CreatePaymentDetailItemDTO,
  CreatePlanDTO,
  CreateUnityDTO,
  PartyControllerCreateData,
  PartyControllerDeleteData,
  PartyControllerFindAllData,
  PartyControllerFindAllParams,
  PartyControllerFindOneData,
  PartyControllerUpdateData,
  PaymentdetailitemControllerCreateData,
  PaymentdetailitemControllerDeleteData,
  PaymentdetailitemControllerFindAllData,
  PaymentdetailitemControllerFindAllParams,
  PaymentdetailitemControllerFindByClientIdData,
  PaymentdetailitemControllerFindByClientIdParams,
  PaymentdetailitemControllerFindOneData,
  PaymentdetailitemControllerUpdateData,
  PlanControllerCreatePlanByClientIdData,
  PlanControllerDeleteData,
  PlanControllerFindAllData,
  PlanControllerFindAllParams,
  PlanControllerFindOneData,
  PlanControllerFindPlanByClientIdData,
  PlanControllerFindPlanByClientIdParams,
  PlanControllerGetInitData,
  PlanControllerUpdateData,
  UnityControllerCreateData,
  UnityControllerDeleteData,
  UnityControllerFindAllData,
  UnityControllerFindAllParams,
  UnityControllerFindOneData,
  UnityControllerUpdateData,
  UpdateClientDTO,
  UpdatePartyDTO,
  UpdatePaymentDetailItemDTO,
  UpdatePlanDTO,
  UpdateUnityDTO
} from './data-contracts'
import { ContentType, HttpClient, type RequestParams } from './http-client'

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
   * @tags client
   * @name ClientControllerCreate
   * @summary 创建客户
   * @request POST:/api/v1/client
   */
  clientControllerCreate = (data: CreateClientDTO, params: RequestParams = {}) =>
    this.request<ClientControllerCreateData, any>({
      path: `/api/v1/client`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
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
   * @name ClientControllerFindClients
   * @summary 通过PartyId 获取相关的Clients
   * @request GET:/api/v1/party/{partyId}/client
   */
  clientControllerFindClients = (
    { partyId, ...query }: ClientControllerFindClientsParams,
    params: RequestParams = {}
  ) =>
    this.request<ClientControllerFindClientsData, any>({
      path: `/api/v1/party/${partyId}/client`,
      method: 'GET',
      query: query,
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerCreateClientByParty
   * @summary 通过PartyId 创建关联client
   * @request POST:/api/v1/party/{partyId}/client
   */
  clientControllerCreateClientByParty = (
    partyId: string,
    data: CreateClientDTO,
    params: RequestParams = {}
  ) =>
    this.request<ClientControllerCreateClientByPartyData, any>({
      path: `/api/v1/party/${partyId}/client`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    })
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
   * @summary 获取所有Plan
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
   * @summary 根据ID获取part
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
}
