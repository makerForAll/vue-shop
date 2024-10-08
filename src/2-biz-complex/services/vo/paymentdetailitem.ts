// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type {
  CreatePaymentDetailItemDTO,
  UpdatePaymentDetailItemDTO
} from '@/generated/data-contracts'

import type dayjs from 'dayjs'
import type {
  CPaymentPlanSplitVO,
  RPaymentPlanSplitVO,
  UPaymentPlanSplitVO
} from './paymentplansplit'

export interface CPaymentDetailItemVO
  extends Omit<
    CreatePaymentDetailItemDTO,
    'period_start' | 'period_end' | 'due_date' | 'payment_plan_splits'
  > {
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  due_date: dayjs.Dayjs
  payment_plan_splits?: CPaymentPlanSplitVO[]
  // payment_amount: dayjs.Dayjs
  //   client?: any
}

export interface UPaymentDetailItemVO
  extends Omit<
    UpdatePaymentDetailItemDTO,
    'period_start' | 'period_end' | 'due_date' | 'payment_plan_splits'
  > {
  id?: string
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  due_date: dayjs.Dayjs
  payment_plan_splits: UPaymentPlanSplitVO[]
  //   client?: any
}

export interface RPaymentDetailItemVO
  extends Omit<
    UpdatePaymentDetailItemDTO,
    'period_start' | 'period_end' | 'due_date' | 'payment_plan_splits'
  > {
  id?: string
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  due_date: dayjs.Dayjs
  payment_plan_splits: RPaymentPlanSplitVO[]
  //   client?: any
}
