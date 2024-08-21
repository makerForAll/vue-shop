// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type { CreatePartyDTO, UpdatePartyDTO } from '@/generated/data-contracts'
import type { CClientVO } from './client'

export interface CPartyVO extends Omit<CreatePartyDTO, 'clients'> {
  clients: CClientVO | null
}

export interface UPartyVO extends Omit<UpdatePartyDTO, 'clients'> {
  clients: CClientVO | null
}

export interface RPartyVO extends Omit<UpdatePartyDTO, 'clients' | 'createdAt'> {
  clients: CClientVO | null
}
