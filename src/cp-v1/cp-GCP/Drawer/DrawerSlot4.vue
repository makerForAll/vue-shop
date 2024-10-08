<template>
  <!-- 按钮 -->
  <a-button :type="props.buttonType" @click="showDrawer">{{ action }}{{ entityType }} </a-button>
  <!-- 抽屉11111 -->
  <teleport to="body">
    <a-drawer
      v-if="isOpen"
      v-model:open="isOpen"
      @close="closeDrawer"
      :maskClosable="false"
      :title="action + entityType"
      :width="`${props.width ? props.width : 850}`"
      :body-style="{ paddingBottom: '120px' }"
      :footer-style="{ textAlign: 'right' }"
    >
      <!-- 尝试组件 -->
      <!-- <a-spin /> -->
      <!-- {{ form }} -->

      <a-form ref="formRef" :model="internalForm" :rules="rules" layout="vertical">
        <a-skeleton :loading="props.loading">
          <slot name="calPaymentSplit"> </slot>
          <a-row :gutter="4">
            <template v-for="field in fields" :key="`${field.name}`">
              <a-col :span="field.span || 24">
                <a-form-item
                  :label="field.labelNone ? '' : field.label"
                  :name="`${field.name}`"
                  :style="field?.props?.style"
                >
                  <!-- input 组件 -->
                  <template v-if="field.component === 'a-input'">
                    <a-input
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @input="fieldChange"
                      @change="fieldChange"
                      v-model:value="internalForm[field.name]"
                      v-bind="field.props"
                    />
                  </template>
                  <!-- input 组件  数字相关处理-->
                  <template v-else-if="field.component === 'a-input-number'">
                    <a-input-number
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @input="fieldChange"
                      @change="fieldChange"
                      v-model:value="internalForm[field.name]"
                      v-bind="field.props"
                    />
                    <!-- <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" /> -->
                  </template>

                  <!-- input 组件  动态 字段添加-->
                  <!-- <template v-else-if="field.component === 'a-input-dynamic'">
                <a-input @input="fieldChange" @change="fieldChange" v-model:value="internalForm[field.name]" v-bind="field.props"/>
                <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" />
              </template> -->
                  <!-- ------a-input-dynami ------------------------------------------------------ -->
                  <!-- <template v-else-if="field.component === 'a-input-dynamic'">
                
                <template v-for="(domain,key) in internalForm.dynamic_field" :key="`${field.name}_${key}`">
                  {{ domain }}
                  <a-input
                    :id="`${field.name}_${key}`"
                    :name="`${field.name}_${key}`"
                    v-model:value="internalForm[field.name][key].name"
                    placeholder="name"
                    style="width: 30%; margin-right: 8px"
                    @input="fieldChange"
                    @change="fieldChange"
                  />
                  <a-input-number
                    :id="`${field.name}_${key}`"
                    :name="`${field.name}_${key}`"
                    v-model:value="internalForm[field.name][key].area"
                    placeholder="area"
                    style="width: 30%; margin-right: 8px"
                    @input="fieldChange"
                    @change="fieldChange"
                  />
                  <a-input-number
                    :id="`${field.name}_${key}`"
                    :name="`${field.name}_${key}`"
                    v-model:value="internalForm[field.name][key].price"
                    placeholder="price"
                    style="width: 30%; margin-right: 8px"
                    @input="fieldChange"
                    @change="fieldChange"
                  />
                  <MinusCircleOutlined
                    v-if="internalForm.dynamic_field!.length > 1"
                    class="dynamic-delete-button"
                    @click="removeDomain(domain)"
                  />
                </template>
                <a-button type="dashed" style="width: 100%" @click="addDomain(field.name)">
                  <PlusOutlined />
                  添加字段
                </a-button>
              </template> -->
                  <!-- ------a-input-dynami ------------------------------------------------------ -->
                  <!-- ------a-input-dynami ------------------------------------------------------ -->
                  <!-- Select 组件 -->
                  <template v-else-if="field.component === 'a-select'">
                    <!-- {{ internalForm[field.name] }} -->
                    <a-select
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @change="fieldChange"
                      v-model:value="internalForm[field.name]"
                      v-bind="field.props"
                    >
                      <a-select-option
                        v-for="option in field.props?.options_str"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </a-select-option>
                    </a-select>
                  </template>

                  <template v-else-if="field.component === 'a-select-number'">
                    <a-select
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @change="fieldChange"
                      v-model:value="internalForm[field.name]"
                      v-bind="field.props"
                    >
                      <a-select-option
                        v-for="option in field.props?.options_num"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </a-select-option>
                    </a-select>
                  </template>

                  <template v-else-if="field.component === 'a-select-bool'">
                    <a-select
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @change="fieldChange"
                      v-model:value="internalForm[field.name]"
                      v-bind="field.props"
                    >
                      <a-select-option
                        v-for="option in field.props?.options_bool"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </a-select-option>
                    </a-select>
                  </template>
                  <!-- ------- -->
                  <template v-else-if="field.component === 'a-select-query'">
                    <h2>{{ partyOptions.length }} Items</h2>
                    <!-- {{ field.props }} -->
                    {{ internalForm[field.name] }}
                    <!-- {{ internalForm[field.name] }} -->
                    <!-- {{ internalForm[field.name] }}"--" -->
                    <!-- {{ field.props }} -->
                    <a-select
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      v-model:value="internalForm[field.name]"
                      style="width: 100%"
                      placeholder="Please select"
                      :options="field.props?.options_str"
                    />
                  </template>
                  <!-- ------- -->
                  <!-- ------- -->
                  <template v-else-if="field.component === 'a-select-obj'">
                    <!-- <h3>{{ field.props?.options_obj }}</h3> -->
                    <!-- {{ internalForm[field.name] }} -->
                    <!-- <a-form-item label="选择单元"> -->
                    <a-select
                      v-model:value="internalForm[field.name]"
                      mode="multiple"
                      placeholder="请选择单元"
                      @change="fieldChange"
                      :options="field.props?.options_obj"
                    />
                    <!-- </a-form-item> -->
                  </template>
                  <!-- Switch 组件 -->
                  <template v-else-if="field.component === 'a-switch'">
                    <a-switch
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @change="fieldChange"
                      v-model:checked="internalForm[field.name]"
                      v-bind="field.props"
                    />
                  </template>

                  <template v-else-if="field.component === 'a-range-picker'">
                    <a-space direction="vertical" :size="12">
                      <a-range-picker
                        :id="`form_item_${field.name}`"
                        :name="`form_item_${field.name}`"
                        v-model:value="internalForm[field.name]"
                        :presets="rangePresets"
                        @calendarChange="onRangeChange"
                        @change="fieldChange"
                        @open-change="fieldChange"
                      />
                    </a-space>
                  </template>

                  <template v-else-if="field.component === 'a-date-picker'">
                    <a-date-picker
                      :id="`form_item_${field.name}`"
                      :name="`form_item_${field.name}`"
                      @change="fieldChange"
                      @open-change="fieldChange"
                      v-model:value="internalForm[field.name]"
                      v-bind="field.props"
                    />

                    <p>总天数：{{ internalForm[field.name] }}天</p>
                  </template>

                  <template v-else-if="field.component === 'a-input-group'">
                    <!-- 表头 -->
                    <a-row :id="`form_item_${field.name}`" :name="`form_item_${field.name}`">
                      <template
                        v-for="(c, index) in field.columns"
                        :key="`${field?.name}_${c[index]}`"
                      >
                        <a-col :span="4" style="border: 0.5px black dashed; text-align: center">
                          <span>
                            {{ c }}
                          </span>
                        </a-col>
                      </template>
                    </a-row>
                    <!-- 表体 -->
                    <a-row>
                      <template
                        v-for="(item, index) in internalForm[field.name]"
                        :key="`${field?.name}_${item[index]}`"
                      >
                        {{ item }}
                        <a-col
                          justify="center"
                          :span="4"
                          style="border: 0.5px black dashed; text-align: center"
                        >
                          <span>{{ index + 1 }}</span>
                        </a-col>
                        <!-- {{ item }} -->
                        <template v-for="k in field.group" :key="k">
                          <!-- {{ k }} -->
                          <a-col :span="4" style="border: 0.5px black dashed">
                            <a-form-item style="height: auto">
                              <a-input-number
                                v-if="k == 'amount'"
                                v-bind="field.props"
                                style="width: 105px"
                                v-model:value="item[k]"
                                :id="`form_item_${field.name}_${k}_${index}`"
                                @input="fieldChange"
                                @change="fieldChange"
                                :name="`form_item_${field.name}_${k}_${index}`"
                              />

                              <a-input
                                v-else-if="k == 'remarks'"
                                v-bind="field.props"
                                style="width: 105px"
                                v-model:value="item[k]"
                                :id="`form_item_${field.name}_${k}_${index}`"
                                @input="fieldChange"
                                @change="fieldChange"
                                :name="`form_item_${field.name}_${k}_${index}`"
                              />

                              <a-date-picker
                                v-else-if="k == 'period_start' || 'period_end' || 'due_date'"
                                v-bind="field.props"
                                v-model:value="item[k]"
                                @change="fieldChange"
                                @open-change="fieldChange"
                              />

                              <a-input
                                v-else
                                v-bind="field.props"
                                style="width: 105px"
                                v-model:value="item[k]"
                                :id="`form_item_${field.name}_${k}_${index}`"
                                @input="fieldChange"
                                @change="fieldChange"
                                :name="`form_item_${field.name}_${k}_${index}`"
                              />
                            </a-form-item>
                          </a-col>
                        </template>
                      </template>
                    </a-row>
                  </template>
                  <!-- group ----- end -->
                  <template v-else-if="field.component === 'a-input-group-payment'">
                    <!-- 表头 -->
                    <a-row :id="`form_item_${field.name}`" :name="`form_item_${field.name}`">
                      <template
                        v-for="(c, index) in field.columns"
                        :key="`${field?.name}_${c[index]}`"
                      >
                        <a-col :span="4" style="border: 0.5px black dashed; text-align: center">
                          <span>
                            {{ c }}
                          </span>
                        </a-col>
                      </template>
                    </a-row>
                    <!-- 表体 -->
                    <a-row>
                      <template
                        v-for="(item, index) in internalForm[field.name]"
                        :key="`${field?.name}_${item[index]}`"
                      >
                        <a-col
                          justify="center"
                          :span="4"
                          style="border: 0.5px black dashed; text-align: center"
                        >
                          <span>{{ index + 1 }}</span>
                        </a-col>
                        <!-- {{ item }} -->
                        <template v-for="k in field.group" :key="k">
                          <!-- {{ k }} -->
                          <a-col :span="4" style="border: 0.5px black dashed">
                            <a-form-item style="height: auto">
                              <a-input-number
                                v-if="k == 'amount'"
                                style="width: 105px"
                                v-model:value="item[k]"
                                :id="`form_item_${field.name}_${k}_${index}`"
                                @input="fieldChange"
                                @change="fieldChange"
                                :name="`form_item_${field.name}_${k}_${index}`"
                              />

                              <a-input
                                v-else-if="k == 'remarks'"
                                style="width: 105px"
                                v-model:value="item[k]"
                                :id="`form_item_${field.name}_${k}_${index}`"
                                @input="fieldChange"
                                @change="fieldChange"
                                :name="`form_item_${field.name}_${k}_${index}`"
                              />

                              <a-date-picker
                                v-else-if="k == 'period_start' || 'period_end' || 'due_date'"
                                v-model:value="item[k]"
                                @change="fieldChange"
                                @open-change="fieldChange"
                              />

                              <a-input
                                v-else
                                style="width: 105px"
                                v-model:value="item[k]"
                                :id="`form_item_${field.name}_${k}_${index}`"
                                @input="fieldChange"
                                @change="fieldChange"
                                :name="`form_item_${field.name}_${k}_${index}`"
                              />
                            </a-form-item>
                          </a-col>
                        </template>
                      </template>
                    </a-row>
                  </template>

                  <!-- <template v-else-if="field.component === 'table-test'">
                 
                    <hr>
          
                    <a-table :scroll="{ x: 1000, y: 500 }" :dataSource="internalForm[field.name]"
                      :columns="field.columns">
                      <template #bodyCell="{ text, record, column, index }">
                        <span v-if="column.dataIndex === 'index'">{{ index + 1 }}</span>
                        

                        <a-form-item v-else-if="column.key === 'beginDate'" :name="`${record.key}.${column.dataIndex}`"
                          :rules="column.rules">
                          <a-date-picker v-bind="field.props" v-model:value="record.period_start" @change="fieldChange"
                            @open-change="fieldChange" />
                        </a-form-item>

                        <a-date-picker v-bind="field.props" v-else-if="column.key === 'endDate'"
                          v-model:value="record.period_end" @change="fieldChange" @open-change="fieldChange" />
                        <a-input v-bind="field.props" v-else-if="column.key === 'amount'"
                          v-model:value="record.amount" />
                        <a-input v-else-if="column.key === 'remarks'" v-model:value="record.remarks" />
                        <template v-else-if="column.key === 'operation'">
                          <span class="table-operation">
                            <a-button @click="field?.functool['add'](record)">添加Item</a-button>
                            <a>Stop</a>
                          </span>
                        </template>
                      </template>
                      <template #expandedRowRender="{ record: outerRecord, index: outerIndex }">
                        <a-table :scroll="{ x: 1300, y: 1000 }" size="small" bordered :columns="field.innercolumns"
                          :data-source="outerRecord.payment_plan_splits" :pagination="false">
                          <template #bodyCell="{ record, column, text, index }">
                           

                            <template v-if="column.key === 'index'">
                              <span>
                                <a-tag color="blue">
                                  {{ (outerIndex + 1) + '期' }}{{ '-' + (index + 1) + '段' }}</a-tag>
                              </span>
                            </template>

                            <a-date-picker v-else-if="column.key === 'period_start'" v-model:value="record[column.key]"
                              @change="fieldChange" @open-change="fieldChange" />

                            <a-date-picker v-else-if="column.key === 'period_end'" v-model:value="record[column.key]"
                              @change="fieldChange" @open-change="fieldChange" />

                            <a-date-picker v-else-if="column.key === 'payment_date'" v-model:value="record[column.key]"
                              @change="fieldChange" @open-change="fieldChange" />

                            <a-date-picker :disabled="column.disable" v-else-if="column.key == 'operation_date'"
                              v-model:value="record[column.key]" @change="fieldChange" @open-change="fieldChange" />
                            <template v-else-if="column.key === 'state'">
                              <a-select v-model:value="record[column.key]" style="width: 100%"
                                placeholder="Please select" :options="[
                                  { value: 0, label: '未到时间' },
                                  { value: 1, label: '已支付' },
                                  { value: 2, label: '已过期' }
                                ]" />
                            </template>
                            <a-input v-else-if="column.key === 'payment_amount'" v-model:value="record[column.key]" />
                            <a-input v-else-if="column.key === 'deposit_deduction'"
                              v-model:value="record[column.key]" />
                            <a-input v-else-if="column.key === 'deposit_balance'" v-model:value="record[column.key]" />
                            <a-input v-else-if="column.key === 'remarks'" v-model:value="record[column.key]" />
                            <a-input v-else-if="column.key === 'link'" v-model:value="record[column.key]" />
                      

                            <template v-else-if="column.key === 'operation'">
                              <span class="table-operation">
                                <a-button @click="field.functool['add'](outerRecord)">编辑</a-button>
                                <a-button @click="field.functool['delete'](outerRecord)">删除</a-button>
                               
                              </span>
                            </template>
                            <template v-else>

                      
                            </template>
                          </template>

                        </a-table>
                      </template>
                    </a-table>
                  </template> -->
                  <template v-else-if="field.component === 'hr'">
                    <a-divider style="height: 10px; border-color: #7cb305" dashed>{{
                      field.name
                    }}</a-divider>
                    <!-- <a-divider  /> -->
                  </template>

                  <!-- <template v-else>
                <component
                  :is="field.component"
                  v-model="internalForm[field.name]"
                  v-bind="field.props"
                />
              </template> -->
                </a-form-item>
                <!-- <hr> -->
                <!-- <a-divider style="border-color: #7cb305" dashed /> -->
              </a-col>
            </template>
          </a-row>
          {{ internalForm }}
        </a-skeleton>
      </a-form>

      <!-- 操作区域 -->
      <template #extra>
        <a-space>
          <slot name="head-form"> </slot>
          <a-button @click="closeDrawer">关闭</a-button>
          <a-button type="primary" @click="resetForm">重置</a-button>
          <a-button type="primary" @click="handleSubmit">提交</a-button>
        </a-space>
      </template>
    </a-drawer>
  </teleport>
</template>

<script setup lang="ts">
import type { Rule } from 'ant-design-vue/es/form'
// import { PlusOutlined } from '@ant-design/icons-vue/'
import { reactive, ref, watch } from 'vue'
import { useHeaderStore } from '@/stores/header'
const headerStore = useHeaderStore()
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
// import dayjs from 'dayjs' // 引入 dayjs
// import {useCPStore} from '@/stores/cp'
// const cpStore = useCPStore();
// --------------- a-select-query ---------------------------
// 可选值
// const partyOptions = [
//   { label: 'Apple', value: 'apple', disabled: false },
//   { label: 'Banana', value: 'banana', disabled: false },
//   { label: 'Cherry', value: 'cherry', disabled: true },
//   { label: 'Date', value: 'date', disabled: false },
//   { label: 'Fig', value: 'fig', disabled: false },
//   { label: 'Grape', value: 'grape', disabled: true },
// ];

const partyOptions = ref([
  { id: 1, code: 'A001', name: 'Item 1' },
  { id: 2, code: 'A002', name: 'Item 2' },
  { id: 3, code: 'A003', name: 'Item 3' }
])

// 要传入 party_id 中的值
const value = ref('banana')
// ------------------------------------------

// ----------- 汉化??? -------------------
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import type { RUnityVO } from '@/2-biz-complex/services/vo/unity'
import clientService from '@/2-biz-complex/services/clientService'

dayjs.locale('cn')
// import type { Plan } from '@/api/services/plan';

// import type{CreatePlanDTO, DynamicField} from '@/generated/api';

// ----

// ----- a-date-picker 组件的功能 -------
type RangeValue = [Dayjs, Dayjs]

const totalDays = ref(0)
// const state = ref(''); // 状态 【明确用户交换状态】

const arrRange = [
  { label: '1年', value: [dayjs(), dayjs().add(1, 'y')] },
  { label: '2年', value: [dayjs(), dayjs().add(2, 'y')] },
  { label: '3年', value: [dayjs(), dayjs().add(3, 'y')] },
  { label: '4年', value: [dayjs(), dayjs().add(4, 'y')] },
  { label: '5年', value: [dayjs(), dayjs().add(5, 'y')] },
  { label: '6年', value: [dayjs(), dayjs().add(6, 'y')] },
  { label: '7年', value: [dayjs(), dayjs().add(7, 'y')] },
  { label: '8年', value: [dayjs(), dayjs().add(8, 'y')] },
  { label: '9年', value: [dayjs(), dayjs().add(9, 'y')] },
  { label: '10年', value: [dayjs(), dayjs().add(10, 'y')] },
  { label: '11年', value: [dayjs(), dayjs().add(11, 'y')] },
  { label: '12年', value: [dayjs(), dayjs().add(12, 'y')] }
]
const rangePresets = ref(arrRange)

const onRangeChange = async (dates: RangeValue | null, dateStrings: string[]) => {
  // 重置
  // Object.assign(rangePresets.value,arrRange);
  // console.log("dates:",dates);
  // console.log("dayjs:",dayjs());
  if (dates && dates[0]) {
    // console.log("dates内");
    // --- 打印 多少天，日期范围
    if (dates[0] && dates[1] == null) {
      console.log('只有1个数据')
      const startDate = dates[0]
      const newArrRange = [
        { label: '1年', value: [startDate, startDate.add(1, 'y').subtract(1, 'd')] },
        { label: '2年', value: [startDate, startDate.add(2, 'y').subtract(1, 'd')] },
        { label: '3年', value: [startDate, startDate.add(3, 'y').subtract(1, 'd')] },
        { label: '4年', value: [startDate, startDate.add(4, 'y').subtract(1, 'd')] },
        { label: '5年', value: [startDate, startDate.add(5, 'y').subtract(1, 'd')] },
        { label: '6年', value: [startDate, startDate.add(6, 'y').subtract(1, 'd')] },
        { label: '7年', value: [startDate, startDate.add(7, 'y').subtract(1, 'd')] },
        { label: '8年', value: [startDate, startDate.add(8, 'y').subtract(1, 'd')] },
        { label: '9年', value: [startDate, startDate.add(9, 'y').subtract(1, 'd')] },
        { label: '10年', value: [startDate, startDate.add(10, 'y').subtract(1, 'd')] },
        { label: '11年', value: [startDate, startDate.add(11, 'y').subtract(1, 'd')] },
        { label: '12年', value: [startDate, startDate.add(12, 'y').subtract(1, 'd')] }
      ]
      // --  覆盖操作  --
      Object.assign(rangePresets.value, newArrRange)
    }
    if (dates[1]) {
      totalDays.value = dates[1].diff(dates[0], 'day')

      // 存入 表单中
      internalForm.contract_duration_days = dates[1].diff(dates[0], 'day')
    }
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
    // console.log("");
  } else {
    console.log('dates外')
    // --- 重置 展示的天数
    totalDays.value = 0
    Object.assign(rangePresets.value, arrRange)
  }
}
// ---------------------- a-date-picker 组件的功能   -----------------------------

interface Functool {
  [key: string]: (...args: any[]) => any
}

export type Field = {
  // 表单 配置信息
  name: string
  label?: string
  labelNone?: boolean
  type?: string
  component: string
  columns?: string[]
  innercolumns?: string[]
  functool?: Functool
  group?: string[]
  props?: {
    placeholder?: string
    options_str?: Array<{ value: string; label: string }> // 修改这里的类型
    options_num?: Array<{ value: number; label: string }> // 修改这里的类型
    options_bool?: Array<{ value: boolean; label: string }> // 修改这里的类型
    options_obj?: Array<RUnityVO> // 修改这里的类型
    addonAfter?: string
    disabled?: boolean
    style?: {}
    dataType?: unknown
    // select_options?: Array<{label:string;}>,
  }
  span?: number // 空间划分
}

// -----------------  抽屉功能 自身需要的基本功能 ---------------------------------
const props = defineProps<{
  entityType: string // 案例：客户信息  ，作用：作为title标识
  buttonType?: string // 按钮类型
  action: string // 案例： 创建  ，作用：作为title标识
  width?: number
  modelValue: Record<string, any> // 获取从 diy.vue 传递来的 form数据
  fields?: Array<Field>
  rules?: Record<string, Rule[]> // 表单规则
  loading?: boolean
}>()

let internalForm = reactive<any>({ ...props.modelValue })

const isOpen = ref<boolean>(false)
const isDelete = ref<boolean>(!false)

// 监听 props.modelValue 的变化

watch(
  () => props,
  (newValue) => {
    // for (const key in newValue) {
    //   internalForm[key] = newValue[key]
    // }
    // Object.assign()
    Object.assign(internalForm, newValue?.modelValue)
    // console.log('internalForm watch--:', internalForm)
  },
  {
    deep: true
    // immediate: true
  } // 深度监听
)

// 监听 props.loading 的变化
// const isLoading = ref<boolean>(false)
// 监听 props.loading 的变化
// watch(
//   () => props.loading,
//   (newLoadingValue) => {
//     isLoading.value = newLoadingValue;
//     console.log('Loading state changed:', newLoadingValue);
//     // 你可以在这里处理 loading 状态的变化
//   }, {
//   deep: true,
//   // immediate: true
// } // 深度监听
// );
// watch(
//   () => props.loading,
//   (newLoadingValue) => {
//     console.log('Loading state changed:', newLoadingValue);
//     // 在 loading 状态变化时执行逻辑
//     if (newLoadingValue) {
//       // loading 开始
//       isLoading.value = newLoadingValue;
//       console.log('Loading started');
//     } else {
//       // loading 结束
//       isLoading.value = newLoadingValue;
//       console.log('Loading finished');
//     }
//   }
// );
// ---------------------------------

// ------------------------  触发 --------------------------------------------------

const emit = defineEmits(['handleSubmit', 'showDrawer', 'fieldChange', 'closeDrawer'])

// const generatePaymentDetails = async () => {
//   await emit('generatePaymentDetails');
// }

// const deleteDrawer = () => {
//   if (isOpen.value == false) {
//     isDelete.value = !true
//   }
// }

const formRef = ref()
const resetForm = () => {
  formRef.value.resetFields()
}
const closeDrawer = async () => {
  isOpen.value = false
}

const showDrawer = async () => {
  emit('showDrawer', 'showDrawer')
  isOpen.value = true
}

const handleSubmit = async () => {
  // 提交到 diy.vue来 进行 数据库互动。  // Create / Update
  formRef.value
    .validate()
    .then(async (data: any) => {
      // console.log('internalForm-^^^^^^', internalForm);
      emit('handleSubmit', internalForm)
      closeDrawer()
    })
    .catch((error: any) => {
      console.log('error', error)
    })
}

const fieldChange = async () => {
  // input相关 表单 每次 @input时都会触发它，来更新本地的pinia数据。
  // console.log("internalForminternalForminternalForm:", internalForm);

  await emit('fieldChange', internalForm)
}
// ---------- 动态表单 -------------
// interface Domain {
//   value: string;
//   key: number;
// }

// const dynamicValidateForm = reactive<{ domains: Domain[] }>({
//   domains: [],
// });

// const removeDomain = (item: Domain) => {
//   const index = dynamicValidateForm.domains.indexOf(item);
//   if (index !== -1) {
//     dynamicValidateForm.domains.splice(index, 1);
//   }
// };
// const addDomain = (fieldname: string | number) => {
//   console.log("fieldname:", fieldname);
//   internalForm[fieldname] = [];
//   internalForm[fieldname].push({
//     name: '',
//     area: 0,
//     price: 0,
//   });
// };
// ----  支付明细内容
</script>
<style scoped></style>
