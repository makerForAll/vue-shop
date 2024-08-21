// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'
import type { CreateUnityDTO, UpdateUnityDTO } from '@/generated/data-contracts'
import type { CPlanVO } from './plan'

export interface CUnityVO extends Omit<CreateUnityDTO, 'plan'> {
  plan: CPlanVO | null
}

export interface UUnityVO extends Omit<UpdateUnityDTO, 'plan'> {
  plan: CPlanVO | null
}

export interface RUnityVO extends Omit<UpdateUnityDTO, 'plan'> {
  plan: CPlanVO | null
}
