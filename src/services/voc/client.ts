// import { Transform } from 'class-transformer'
// import { IsArray, IsOptional, IsString } from 'class-validator'
// import dayjs from 'dayjs'
// import { ReadClientDTO, CreateClientDTO, BaseClientDTO } from 'dto-data'

// export class CClientVOC extends BaseClientDTO {
//   // @Transform(({ value }) => (value ? dayjs(value) : null), { toClassOnly: true })
//   @IsOptional()
//   createdAt: dayjs.Dayjs = new dayjs.Dayjs()

//   @IsArray()
//   @IsOptional()
//   plan?: any[]
// }

// export class RClientVOC extends BaseClientDTO {
//   @IsOptional()
//   @IsString() // 确保 ID 是数字类型
//   id?: String // 或者使用 @IsOptional() 如果 ID 是可选的

//   // @Transform(({ value }) => (value ? dayjs(value) : null), { toClassOnly: true })
//   @IsOptional()
//   createdAt: dayjs.Dayjs = new dayjs.Dayjs()

//   @IsArray()
//   @IsOptional()
//   plan?: any[]
// }

// export class UClientVOC extends BaseClientDTO {
//   @IsOptional()
//   @IsString() // 确保 ID 是数字类型
//   id?: String // 或者使用 @IsOptional() 如果 ID 是可选的

//   // @Transform(({ value }) => (value ? dayjs(value) : null), { toClassOnly: true })
//   @IsOptional()
//   createdAt: dayjs.Dayjs = new dayjs.Dayjs()

//   @IsArray()
//   @IsOptional()
//   plan?: any[]
// }
