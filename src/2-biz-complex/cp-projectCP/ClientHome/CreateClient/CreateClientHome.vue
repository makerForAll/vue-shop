<template>
  <div>
    <!-- <div v-if="store.data.tabsKey == 0"> -->
    <DrawerSlotView :action="'录入'" :entityType="'客户信息'" v-model="store.data.CItem" :fields="clientFields"
      :loading="store.data.loading" :rules="rules" @handleSubmit="handleSubmit" @fieldChange="fieldChange"
      @showDrawer="showDrawer">
    </DrawerSlotView>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
// diy.vue  -> CreateClient


// import type { APIforBackEnd } from '@/api';
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
import { useClientStore } from '@/stores/client';
import type { Rule } from 'ant-design-vue/es/form';
import type { Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue';
import type { CClientVO } from '@/2-biz-complex/services/vo/client';
// import {ClientBackEndDTO} from '@/api'
// import { reactive } from 'vue';
// ----------------------------
// const clientForm = reactive({...initClientForm})

// --------------------------  表单配置 ------------------------------------------------------------------------------

const clientFields: Field[] = [
  {
    name: 'tags',
    label: '标签',
    component: 'a-select-number',
    props: {
      options_num: [
        { value: 0, label: '待定' },
        { value: 1, label: '意向' },
        { value: 2, label: '待签' },
        // { value: 3, label: '已签' },
        { value: 3, label: '已归档' }
      ]
    },
    span: 8
  },
  { name: 'name', label: '乙方名称', component: 'a-input', props: { placeholder: '请输入乙方-名称' } },
  { name: 'business', label: '业务', component: 'a-input', props: { placeholder: '请输入 业务' } },
  { name: 'usage', label: '需求', component: 'a-input', props: { placeholder: '请输入 需求' } },
  { name: 'contact', label: '联系人', component: 'a-input', props: { placeholder: '请输入联系人-名称' } },
  { name: 'phonenumber', label: '联系人号码', component: 'a-input', props: { placeholder: '请输入联系人-号码' } },
  { name: 'emergencycontact', label: '紧急联系人', component: 'a-input', props: { placeholder: '请输入紧急联系人-名称' } },
  { name: 'emergencycontactphone', label: '紧急联系人号码', component: 'a-input', props: { placeholder: '请输入紧急联系人-号码' } },
  { name: 'marks', label: '备注', component: 'a-input', props: { placeholder: '请输入备注信息' }, },
  // { name: 'createdAt', label: '注册时间', component: 'a-date-picker', props: { placeholder: '请输入备注信息', disabled: true }, },
  // 其他字段可以按需添加services
];

const rules: Record<string, Rule[]> = {
  tags: [{ required: true, message: '请选择标签', trigger: 'change' }],
  name: [{ required: true, message: '请输入乙方-名称', trigger: 'change' }],
  business: [{ required: true, message: '请输入业务用途', trigger: 'change' }],
  usage: [{ required: true, message: '请输入业务用途', trigger: 'change' }],
  contact: [{ required: true, message: '请输入联系人-姓名', trigger: 'change' }],
  phonenumber: [{ required: true, message: '请输入联系人-号码', trigger: 'change' }],
  emergencycontact: [{ required: false, message: '请输入紧急联系人-名称' }],
  emergencycontactphone: [{ required: false, message: '请输入紧急联系人-号码' }],
  marks: [{ required: false, message: '请输入备注信息' }],
  // createdAt: [{ required: false, message: '请输入备注信息' }],
  // 其他字段的验证规则可以按需添加
};

// --------------------------  表单配置 ------------------------------------------------------------------------------

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
const props = defineProps<{
  partysoftwareId: string
}>()

const store = useClientStore();

// onMounted(()=>{
//   clientStore.initStateItem();
// })

const handleSubmit = async (form: CClientVO) => {
  console.log("form:-----------", form);
  // console.log("form:-----------",form.name);
  // console.log("form:-----------",form.createdAt.toISOString());
  // form.createdAt
  // console.log("props.partyId:", props.partyId);

  await store.createClientByFieldId(props.partysoftwareId, form);

}

const showDrawer = async () => { // 重置form
  // await store.getInit();
}

const fieldChange = async (form: any) => {
  store.data.CItem = form;
}


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>


<style scoped></style>