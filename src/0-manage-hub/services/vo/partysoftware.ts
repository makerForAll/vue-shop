// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type {
  // CreatePartyDTO,
  CreatePartySoftWareDTO,
  // UpdatePartyDTO,
  UpdatePartySoftWareDTO
} from '@/generated/data-contracts'
import type { CPartyVO, UPartyVO } from './party'
import type { CSoftwareVO, USoftwareVO } from './software'
import type { CClientVO, UClientVO } from '@/2-biz-complex/services/vo/client'
import type { RUnityVO } from '@/2-biz-complex/services/vo/unity'
// import type { CClientVO } from './client'

export interface CPartySoftwareVO
  extends Omit<CreatePartySoftWareDTO, 'clients' | 'partyId' | 'softwareId'> {
  partyId: string | null
  softwareId: string | null
  party: CPartyVO | null
  software: CSoftwareVO | null
  clients: CClientVO | null
  unitys: RUnityVO[]
}

export interface UPartySoftwareVO
  extends Omit<UpdatePartySoftWareDTO, 'clients' | 'partyId' | 'softwareId'> {
  id: String
  partyId: string | null
  softwareId: string | null
  party: CPartyVO | null
  software: CSoftwareVO | null
  clients: UClientVO | null
  unitys: RUnityVO[]
}

export interface RPartySoftwareVO
  extends Omit<UpdatePartySoftWareDTO, 'clients' | 'partyId' | 'softwareId'> {
  id: String
  partyId: string | null
  softwareId: string | null
  party: CPartyVO | null
  software: CSoftwareVO | null
  clients: UClientVO | null
  unitys: RUnityVO[]
}
