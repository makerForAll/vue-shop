// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type {
  CreatePaymentDetailItemDTO,
  UpdatePaymentDetailItemDTO
} from '@/generated/data-contracts'

import type dayjs from 'dayjs'

export interface CPaymentDetailItemVO
  extends Omit<CreatePaymentDetailItemDTO, 'period_start' | 'period_end' | 'due_date'> {
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  due_date: dayjs.Dayjs
  // payment_amount: dayjs.Dayjs
  //   client?: any
}

export interface UPaymentDetailItemVO
  extends Omit<UpdatePaymentDetailItemDTO, 'period_start' | 'period_end' | 'due_date'> {
  id?: string
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  due_date: dayjs.Dayjs

  //   client?: any
}

export interface RPaymentDetailItemVO
  extends Omit<UpdatePaymentDetailItemDTO, 'period_start' | 'period_end' | 'due_date'> {
  id?: string
  period_start: dayjs.Dayjs
  period_end: dayjs.Dayjs
  due_date: dayjs.Dayjs

  //   client?: any
}
