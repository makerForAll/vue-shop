// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type {
  CreatePartyDTO,
  CreatePartySoftWareDTO,
  CreateSoftWareDTO,
  UpdatePartyDTO,
  UpdatePartySoftWareDTO,
  UpdateSoftWareDTO
} from '@/generated/data-contracts'
// import type { CClientVO } from './client'

export interface CSoftwareVO extends Omit<CreateSoftWareDTO, 'partySoftware'> {
  partySoftware: CreatePartySoftWareDTO | null
}

export interface USoftwareVO extends Omit<UpdateSoftWareDTO, 'partySoftware'> {
  id: string
  partySoftware: UpdatePartySoftWareDTO | null
}

export interface RSoftwareVO extends Omit<UpdateSoftWareDTO, 'partySoftware'> {
  id: string
  partySoftware: UpdatePartySoftWareDTO | null
}
