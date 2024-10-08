// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type {
  CreatePaymentDetailItemDTO,
  CreatePaymentPlanSplitDTO,
  UpdatePaymentDetailItemDTO,
  UpdatePaymentPlanSplitDTO
} from '@/generated/data-contracts'

import type dayjs from 'dayjs'

export interface CPaymentPlanSplitVO
  extends Omit<
    CreatePaymentPlanSplitDTO,
    'period_start' | 'period_end' | 'payment_date' | 'operation_date'
  > {
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  payment_date: dayjs.Dayjs
  operation_date: dayjs.Dayjs
  // payment_amount: dayjs.Dayjs
  //   client?: any
}

export interface UPaymentPlanSplitVO
  extends Omit<
    UpdatePaymentPlanSplitDTO,
    'id' | 'period_start' | 'period_end' | 'payment_date' | 'operation_date'
  > {
  id?: string

  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  payment_date: dayjs.Dayjs
  operation_date: dayjs.Dayjs
  //   client?: any
}

export interface RPaymentPlanSplitVO
  extends Omit<
    UpdatePaymentPlanSplitDTO,
    'id' | 'period_start' | 'period_end' | 'payment_date' | 'operation_date'
  > {
  id?: string
  /**
   *
   *
   * @type {(dayjs.Dayjs)} 期间开始
   * @memberof RPaymentPlanSplitVO
   */
  period_start: dayjs.Dayjs
  /**
   *
   *
   * @type {(dayjs.Dayjs)} 期间结束
   * @memberof RPaymentPlanSplitVO
   */
  period_end: dayjs.Dayjs
  /**
   *
   *
   * @type {(dayjs.Dayjs)} 支付截止日期
   * @memberof RPaymentPlanSplitVO
   */
  payment_date: dayjs.Dayjs
  /**
   *
   *
   * @type {(dayjs.Dayjs)} 操作日期
   * @memberof RPaymentPlanSplitVO
   */
  operation_date: dayjs.Dayjs
}
