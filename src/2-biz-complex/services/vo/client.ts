// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type { CreateClientDTO, UpdateClientDTO } from '@/generated/data-contracts'

import type dayjs from 'dayjs'
import type { CPartyVO } from '../../../0-manage-hub/services/vo/party'
import type { CPlanVO } from './plan'
import type { CPartySoftwareVO } from '@/0-manage-hub/services/vo/partysoftware'

export interface CClientVO extends Omit<CreateClientDTO, 'plans' | 'partySoftware' | 'createdAt'> {
  createdAt: dayjs.Dayjs | null
  plans?: CPlanVO[] | null
  partySoftware?: CPartySoftwareVO | null
}

export interface UClientVO extends Omit<UpdateClientDTO, 'plans' | 'partySoftware' | 'createdAt'> {
  id?: string
  createdAt: dayjs.Dayjs | null
  plans?: CPlanVO[] | null
  partySoftware?: CPartySoftwareVO | null
}

export interface RClientVO extends Omit<UpdateClientDTO, 'plans' | 'partySoftware' | 'createdAt'> {
  id?: string
  createdAt: dayjs.Dayjs | null
  plans?: CPlanVO[] | null
  partySoftware?: CPartySoftwareVO | null
}
