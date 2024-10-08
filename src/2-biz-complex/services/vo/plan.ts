import type {
  CreatePlanDTO,
  ReadPlanDTO,
  TreePlanDTO,
  UpdatePlanDTO
} from '@/generated/data-contracts'

import type dayjs from 'dayjs'
import type {
  CPaymentDetailItemVO,
  RPaymentDetailItemVO,
  UPaymentDetailItemVO
} from './paymentdetailitem'
import type { CClientVO, RClientVO, UClientVO } from './client'

export interface CPlanVO
  extends Omit<CreatePlanDTO, 'client' | 'createdAt' | 'payment_detail_items'> {
  id?: string
  createdAt: dayjs.Dayjs
  payment_detail_items: CPaymentDetailItemVO[]
  client?: CClientVO
}

export interface UPlanVO
  extends Omit<UpdatePlanDTO, 'client' | 'createdAt' | 'payment_detail_items'> {
  id?: string
  createdAt: dayjs.Dayjs
  payment_detail_items: UPaymentDetailItemVO[]
  client?: UClientVO
}

export interface RPlanVO
  extends Omit<ReadPlanDTO, 'client' | 'createdAt' | 'payment_detail_items'> {
  id?: string
  createdAt: dayjs.Dayjs
  payment_detail_items: RPaymentDetailItemVO[]
  client?: RClientVO
}

export interface PlanTreeVO
  extends Omit<TreePlanDTO, 'client' | 'createdAt' | 'payment_detail_items'> {
  id?: string
  createdAt: dayjs.Dayjs
  payment_detail_items: RPaymentDetailItemVO[]
  client?: RClientVO
}
