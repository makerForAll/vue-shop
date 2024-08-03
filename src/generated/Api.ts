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
  ClientControllerCreateData,
  ClientControllerDeleteData,
  ClientControllerFindAllData,
  ClientControllerFindAllParams,
  ClientControllerFindOneData,
  ClientControllerGetInitData,
  ClientControllerUpdateData,
  CreateClientDTO,
  CreatePaymentDetailItemDTO,
  CreatePlanDTO,
  Party,
  PartyControllerCreateData,
  PartyControllerDeleteData,
  PartyControllerFindAllData,
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
  PlanControllerCreateData,
  PlanControllerDeleteData,
  PlanControllerFindAllData,
  PlanControllerFindAllParams,
  PlanControllerFindByClientIdData,
  PlanControllerFindByClientIdParams,
  PlanControllerFindOneData,
  PlanControllerGetInitData,
  PlanControllerUpdateData,
  UpdateClientDTO,
  UpdatePaymentDetailItemDTO,
  UpdatePlanDTO,
  UserControllerAddUserData,
  UserControllerDeleteUserData,
  UserControllerGetUserLogsData,
  UserControllerGetUserProfileData,
  UserControllerGetUsersData,
  UserControllerUpdateUserData
} from './data-contracts'
import { ContentType, HttpClient, type RequestParams } from './http-client'

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name UserControllerGetUsers
   * @request GET:/api/v1/user
   */
  userControllerGetUsers = (params: RequestParams = {}) =>
    this.request<UserControllerGetUsersData, any>({
      path: `/api/v1/user`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags user
   * @name UserControllerAddUser
   * @request POST:/api/v1/user
   */
  userControllerAddUser = (params: RequestParams = {}) =>
    this.request<UserControllerAddUserData, any>({
      path: `/api/v1/user`,
      method: 'POST',
      ...params
    })
  /**
   * No description
   *
   * @tags user
   * @name UserControllerUpdateUser
   * @request PATCH:/api/v1/user
   */
  userControllerUpdateUser = (params: RequestParams = {}) =>
    this.request<UserControllerUpdateUserData, any>({
      path: `/api/v1/user`,
      method: 'PATCH',
      ...params
    })
  /**
   * No description
   *
   * @tags user
   * @name UserControllerDeleteUser
   * @request DELETE:/api/v1/user
   */
  userControllerDeleteUser = (params: RequestParams = {}) =>
    this.request<UserControllerDeleteUserData, any>({
      path: `/api/v1/user`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags user
   * @name UserControllerGetUserProfile
   * @request GET:/api/v1/user/profile
   */
  userControllerGetUserProfile = (params: RequestParams = {}) =>
    this.request<UserControllerGetUserProfileData, any>({
      path: `/api/v1/user/profile`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags user
   * @name UserControllerGetUserLogs
   * @request GET:/api/v1/user/logs
   */
  userControllerGetUserLogs = (params: RequestParams = {}) =>
    this.request<UserControllerGetUserLogsData, any>({
      path: `/api/v1/user/logs`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerGetInit
   * @summary client数据初始化
   * @request GET:/api/v1/client/init
   */
  clientControllerGetInit = (params: RequestParams = {}) =>
    this.request<ClientControllerGetInitData, any>({
      path: `/api/v1/client/init`,
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
   * @name ClientControllerFindOne
   * @summary 根据ID获取客户
   * @request GET:/api/v1/client/{id}
   */
  clientControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<ClientControllerFindOneData, any>({
      path: `/api/v1/client/${id}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags client
   * @name ClientControllerUpdate
   * @summary 更新客户
   * @request PUT:/api/v1/client/{id}
   */
  clientControllerUpdate = (id: string, data: UpdateClientDTO, params: RequestParams = {}) =>
    this.request<ClientControllerUpdateData, any>({
      path: `/api/v1/client/${id}`,
      method: 'PUT',
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
   * @request DELETE:/api/v1/client/{id}
   */
  clientControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<ClientControllerDeleteData, any>({
      path: `/api/v1/client/${id}`,
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
   * @name PlanControllerFindByClientId
   * @summary 获取某个Client关联的所有Plan
   * @request GET:/api/v1/plan/client/{id}
   */
  planControllerFindByClientId = (
    { id, ...query }: PlanControllerFindByClientIdParams,
    params: RequestParams = {}
  ) =>
    this.request<PlanControllerFindByClientIdData, any>({
      path: `/api/v1/plan/client/${id}`,
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
   * @request GET:/api/v1/plan/{id}
   */
  planControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<PlanControllerFindOneData, any>({
      path: `/api/v1/plan/${id}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerUpdate
   * @summary 更新Plan
   * @request PUT:/api/v1/plan/{id}
   */
  planControllerUpdate = (id: string, data: UpdatePlanDTO, params: RequestParams = {}) =>
    this.request<PlanControllerUpdateData, any>({
      path: `/api/v1/plan/${id}`,
      method: 'PUT',
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
   * @request DELETE:/api/v1/plan/{id}
   */
  planControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<PlanControllerDeleteData, any>({
      path: `/api/v1/plan/${id}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags plan
   * @name PlanControllerCreate
   * @summary 创建Plan
   * @request POST:/api/v1/plan/{clientId}
   */
  planControllerCreate = (clientId: string, data: CreatePlanDTO, params: RequestParams = {}) =>
    this.request<PlanControllerCreateData, any>({
      path: `/api/v1/plan/${clientId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
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
   * @name PaymentdetailitemControllerFindByClientId
   * @summary 获取某个plan关联的所有Paymentdetailitem
   * @request GET:/api/v1/paymentdetailitem/plan/{id}
   */
  paymentdetailitemControllerFindByClientId = (
    { id, ...query }: PaymentdetailitemControllerFindByClientIdParams,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerFindByClientIdData, any>({
      path: `/api/v1/paymentdetailitem/plan/${id}`,
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
   * @request GET:/api/v1/paymentdetailitem/{id}
   */
  paymentdetailitemControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<PaymentdetailitemControllerFindOneData, any>({
      path: `/api/v1/paymentdetailitem/${id}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerUpdate
   * @summary 更新Paymentdetailitem
   * @request PUT:/api/v1/paymentdetailitem/{id}
   */
  paymentdetailitemControllerUpdate = (
    id: string,
    data: UpdatePaymentDetailItemDTO,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerUpdateData, any>({
      path: `/api/v1/paymentdetailitem/${id}`,
      method: 'PUT',
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
   * @request DELETE:/api/v1/paymentdetailitem/{id}
   */
  paymentdetailitemControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<PaymentdetailitemControllerDeleteData, any>({
      path: `/api/v1/paymentdetailitem/${id}`,
      method: 'DELETE',
      ...params
    })
  /**
   * No description
   *
   * @tags paymentdetailitem
   * @name PaymentdetailitemControllerCreate
   * @summary 创建Paymentdetailitem
   * @request POST:/api/v1/paymentdetailitem/{planId}
   */
  paymentdetailitemControllerCreate = (
    planId: string,
    data: CreatePaymentDetailItemDTO,
    params: RequestParams = {}
  ) =>
    this.request<PaymentdetailitemControllerCreateData, any>({
      path: `/api/v1/paymentdetailitem/${planId}`,
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
   * @request GET:/api/v1/party
   */
  partyControllerFindAll = (params: RequestParams = {}) =>
    this.request<PartyControllerFindAllData, any>({
      path: `/api/v1/party`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerCreate
   * @request POST:/api/v1/party
   */
  partyControllerCreate = (data: Party, params: RequestParams = {}) =>
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
   * @name PartyControllerFindOne
   * @request GET:/api/v1/party/{id}
   */
  partyControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<PartyControllerFindOneData, any>({
      path: `/api/v1/party/${id}`,
      method: 'GET',
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerUpdate
   * @request PUT:/api/v1/party/{id}
   */
  partyControllerUpdate = (id: string, data: Party, params: RequestParams = {}) =>
    this.request<PartyControllerUpdateData, any>({
      path: `/api/v1/party/${id}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    })
  /**
   * No description
   *
   * @tags party
   * @name PartyControllerDelete
   * @request DELETE:/api/v1/party/{id}
   */
  partyControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<PartyControllerDeleteData, any>({
      path: `/api/v1/party/${id}`,
      method: 'DELETE',
      ...params
    })
}
