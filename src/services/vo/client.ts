// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type { CreateClientDTO, UpdateClientDTO } from '@/generated/data-contracts'

import type dayjs from 'dayjs'
import type { CPartyVO } from './party'
import type { CPlanVO } from './plan'

export interface CClientVO extends Omit<CreateClientDTO, 'plans' | 'party' | 'createdAt'> {
  createdAt: dayjs.Dayjs | null
  plans?: CPlanVO[] | null
  party?: CPartyVO | null
}

export interface UClientVO extends Omit<UpdateClientDTO, 'plans' | 'party' | 'createdAt'> {
  id?: string
  createdAt: dayjs.Dayjs | null
  plans?: CPlanVO[] | null
  party?: CPartyVO | null
}

export interface RClientVO extends Omit<UpdateClientDTO, 'plans' | 'party' | 'createdAt'> {
  id?: string
  createdAt: dayjs.Dayjs | null
  plans?: CPlanVO[] | null
  party?: CPartyVO | null
}
