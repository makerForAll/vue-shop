import customApi from '@/custom/api/core/custom-http-client'
import type { ApiResponse } from '@/custom/api/models/models-common'
// import type { ReadClientDTO } from '@/generated/data-contracts';
import { message } from 'ant-design-vue'
// import { plainToInstance } from 'class-transformer';
import { CreateClientDTO } from './client_create.dto'
// import { plainToInstance } from 'class-transformer';

// export declare class DynamicFieldDTO {
//     name?: string;
//     area?: number;
//     price?: number;
// }
// export declare class CreatePlanDTO {
//     name?: string;
//     first_name?: string;
//     first_area?: number;
//     first_price?: number;
//     second_name?: string;
//     second_area?: number;
//     second_price?: number;
//     third_name?: string;
//     third_area?: number;
//     third_price?: number;
//     dynamic_field?: DynamicFieldDTO[];
//     total_area?: number;
//     average_price?: number;
//     initial_monthly_price?: number;
//     contract_type?: string;
//     contract_status?: string;
//     record_type?: string;
//     is_default?: boolean;
//     startdate_and_enddate?: [Date, Date] | [null, null];
//     contract_duration_days?: number;
//     payment_interval_months?: number;
//     increase_interval_months?: number;
//     increase_rate?: number;
//     deposit?: number;
//     rent_free_months?: number;
//     initial_payment_duedays?: number;
//     recurring_payment_duedays?: number;
//     total_amount?: number;
//     remarks?: string;
//     // client?: CreateClientDTO;
//     // payment_detail_item?: CreatePaymentDetailItemDTO[];
// }

// export declare class CreateClientDTO {
//     name?: string;
//     contact?: string;
//     phonenumber?: string;
//     emergencycontact?: string;
//     emergencycontactphone?: string;
//     marks?: string;
//     tags?: number;
//     createdAt?: Date | null;
//     // plan?: CreatePlanDTO[];
// }

class ClientService {
  // async create(data:any){
  //     try{
  //         const response = await customApi.clientControllerCreate(data)
  //         const getResponseData =response.data as unknown as ApiResponse<ReadClientDTO>;
  //         // const data = plainToInstance(ReadClientDTO, getResponseData.results.data);
  //         const data = getResponseData.results.data;

  //         return data;
  //     }catch(error){
  //         message.error(`创建失败!:${error}`);
  //         console.error("创建失败:", error);
  //     }
  // }

  async read(
    params: any = {
      current: 1,
      pagesize: 10
    }
  ) {
    try {
      const response = await customApi.clientControllerFindAll(params)
      const getResponseData = response.data as unknown as ApiResponse<any>
      if (Array.isArray(getResponseData.results.data)) {
        console.log('getResponseData.results.data,', getResponseData.results.data)

        // const data = plainToInstance(CreateClientDTO, getResponseData.results.data);
        const data = getResponseData.results.data
        const total = getResponseData.results.total
        return { data, total }
      }
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }
}

export default new ClientService()
