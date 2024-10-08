// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type { CreatePartyDTO, UpdatePartyDTO } from '@/generated/data-contracts'
import type { CPartySoftwareVO, UPartySoftwareVO } from './partysoftware'
// import type { CClientVO } from './client'

export interface CPartyVO extends Omit<CreatePartyDTO, 'partySoftware'> {
  partySoftware: CPartySoftwareVO | null
}

export interface UPartyVO extends Omit<UpdatePartyDTO, 'partySoftware'> {
  id: string
  partySoftware: UPartySoftwareVO | null
}

export interface RPartyVO extends Omit<UpdatePartyDTO, 'partySoftware'> {
  id: string
  partySoftware: UPartySoftwareVO | null
}
