// import { Type } from 'class-transformer';
// import { IsString, IsNotEmpty } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
import * as dayjs from 'dayjs'
// import { ReadPlanDTO } from '../plan/plan_read.dto';

export class CreateClientDTO {
  id?: string

  //   @ApiProperty({ description: '乙方名称',required: false })
  // @IsString()
  // @IsNotEmpty({ message: '名称不能为空' })
  name?: string

  //   @ApiProperty({ description: '联系人', required: false})
  //   @IsString()
  //   @IsOptional()
  contact?: string = ''

  //   @ApiProperty({ description: '联系号码', required: false })
  //   @IsString()
  //   @IsOptional()
  phonenumber?: string = ''

  //   @ApiProperty({ description: '紧急联系人', required: false })
  //   @IsString()
  //   @IsOptional()
  emergencycontact?: string = ''

  //   @ApiProperty({ description: '紧急联系人号码', required: false })
  //   @IsString()
  //   @IsOptional()
  emergencycontactphone?: string = ''

  //   @ApiProperty({ description: '备注', required: false })
  //   @IsString()
  //   @IsOptional()
  marks?: string = ''

  //   @ApiProperty({ description: '备注', required: false })
  //   @IsOptional()
  tags?: number = 1

  //   @ApiProperty({ description: '创建时间-后端Date格式', required: false })
  //   @IsOptional()
  //   createdAt?: Date|null|string = null;
  createdAt?: string = ''

  //   @ApiProperty({ description: '计划', required: false, type: () => [ReadPlanDTO] })
  //   @IsArray()
  //   @IsOptional()
  // @Type(()=>String)
  plan?: any[]
}
