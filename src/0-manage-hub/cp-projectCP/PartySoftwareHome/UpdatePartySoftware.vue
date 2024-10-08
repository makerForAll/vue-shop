<template>
  <DrawerSlotView
    :action="'更新'"
    :entityType="''"
    v-model="store.data.UItem"
    :fields="clientFields"
    :rules="rules"
    :loading="store.data.loading"
    @handleSubmit="handleSubmit"
    @showDrawer="showDrawer"
    @fieldChange="fieldChange"
  >
    {{ props.recordId }}
  </DrawerSlotView>
  {{ props.recordId }}
</template>

<script setup lang="ts">
import DrawerSlotView, { type Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'

import type { Rule } from 'ant-design-vue/es/form'

const props = defineProps<{
  recordId?: string
}>()

// watch(() => props.recordId, (newVal, oldVal) => {
//   if (newVal !== oldVal) {
//     // 处理 recordId 变化的逻辑，例如重新读取数据
//     store.readById(newVal);
//   }
// });

// watch(() => props.recordId, (newVal, oldVal) => {
//     if (newVal !== oldVal) {
//         console.log("newVal:", newVal);

//         // store.readById(newVal);
//     }
// })
// import { usePartyStore } from '@/stores/party'
// const partyStore = usePartyStore();
// const partyOptions = ref<{ value: string | undefined; label: string }[]>([]);
// onMounted(async () => {
//     const partyData = await partyStore.read(); // 确保使用 await 等待 Promise 解决
//     if (partyData) {
//         partyOptions.value = partyData.map(item => ({
//             value: item.id,
//             label: item.name
//         }));
//     }
// });

// import { useSoftwareStore } from '@/stores/software'
// const SoftwareStore = useSoftwareStore();
// const softwareOptions = ref<{ value: string | undefined; label: string }[]>([]);
// onMounted(async () => {
//     const softwareData = await SoftwareStore.read(); // 确保使用 await 等待 Promise 解决
//     if (softwareData) {
//         softwareOptions.value = softwareData.map(item => ({
//             value: item.id,
//             label: item.name
//         }));
//     }
// });
// partyStore.read
// import { reactive } from 'vue';
// ----------------------------
// let clientForm:Client = reactive({...initClientForm})
// const myType = 'update'

// --------------------------  表单配置 ------------------------------------------------------------------------------
// 使用 computed 来动态更新 options_str
const clientFields = computed(
  () =>
    [
      {
        name: 'name',
        label: '软件详细名称',
        component: 'a-input',
        props: { placeholder: 'Enter client name' }
      },
      {
        name: 'url',
        label: '链接',
        component: 'a-input',
        props: { placeholder: 'Enter phone number' }
      },
      {
        name: 'marks',
        label: 'marks',
        component: 'a-input',
        props: { placeholder: 'Enter phone number' }
      },
      {
        name: 'partyId',
        label: '填入party_id',
        component: 'a-select-query',
        props: { placeholder: 'Enter phone number', options_str: store.data.partyItems }
      },
      {
        name: 'softwareId',
        label: '填入software_id',
        component: 'a-select-query',
        props: { placeholder: 'Enter phone number', options_str: store.data.softwareItems }
      },
      {
        name: 'disabled',
        label: '是否禁止点击',
        component: 'a-switch',
        // props: { disabled: true },
        span: 8
      }
      // {
      //     name: 'increase_interval_months',
      //     label: '增长率条件（每多少个月）',
      //     component: 'a-select-number',
      //     props: {
      //         options_num: [
      //             { value: 12, label: '每12个月' },
      //             { value: 24, label: '每24个月' },
      //             { value: 36, label: '每36个月' }
      //         ]
      //     },
      //     span: 8
      // },
      // { name: 'disabled', label: '是否禁言', component: 'a-input', props: { placeholder: 'Enter phone number' } },
      // 其他字段可以按需添加
    ] as Field[]
)

// 字段 规则配置
const rules: Record<string, Rule[]> = {
  name: [{ required: true, message: 'Please enter client name' }],
  url: [{ required: false, message: 'Please enter phone number' }],
  marks: [{ required: false, message: 'Please enter phone number' }]
  // 其他字段的验证规则可以按需添加
}
// --------------------------  表单配置 ------------------------------------------------------------------------------

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
import { usePartySoftwareStore } from '@/stores/partysoftware'
import { computed, onMounted, ref, watch } from 'vue'
const store = usePartySoftwareStore()

// -------------- emits事件【1.cp.vue事件可以触发下面的事件。 2.可以接收来自 cp.vue的数据】  ------------------------
// ----- cp.vue 虽然无法直接和 pinia层交互数据，但是可以通过 emits来 触发 diy.vue中的函数，来运行某些行为的函数。
//

const showDrawer = async () => {
  // 读取 指定ID的 数据
  console.log('ID------------', props?.recordId)

  store.readByIdForRel(props?.recordId as string)
  //  为什么没有生效
}

const handleSubmit = async (form: any) => {
  // 更新指定数据 // Create / Update
  // console.log("UpdateClient--------------------------------",clientStore.currentSelectObjID,form);
  // console.log("ID------------", store.data.selectID, form);

  console.log('handlesubmit-------,', props?.recordId, store.data.UItem)

  store.update(props?.recordId, form)
  // console.log("readByIdforFormLoad: ",clientStore.page.item.name);
}

const fieldChange = async (form: any) => {
  // 获取每次表单更改的数据
  console.log('form:', form)
  store.data.UItem = form
}
// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>

<style scoped></style>
