// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type { CreateUnityDTO, UpdateUnityDTO } from '@/generated/data-contracts'
import type { CPlanVO } from './plan'
import type {
  CPartySoftwareVO,
  RPartySoftwareVO,
  UPartySoftwareVO
} from '@/0-manage-hub/services/vo/partysoftware'

export interface CUnityVO extends Omit<CreateUnityDTO, 'plan' | 'partySoftware'> {
  plan: CPlanVO | null
  partySoftware: CPartySoftwareVO | null
}

export interface UUnityVO extends Omit<UpdateUnityDTO, 'plan' | 'partySoftware'> {
  id: string
  plan: CPlanVO | null
  partySoftware: UPartySoftwareVO | null
}

export interface RUnityVO extends Omit<UpdateUnityDTO, 'plan' | 'partySoftware'> {
  id: string
  plan: CPlanVO | null
  partySoftware: RPartySoftwareVO | null
}
