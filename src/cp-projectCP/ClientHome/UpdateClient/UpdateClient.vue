<template>
  <DrawerSlotView :action="'更新'" :entityType="''" v-model="clientStore.data.UItem" :fields="clientFields" :rules="rules"
    :loading="clientStore.data.loading" @handleSubmit="handleSubmit" @showDrawer="showDrawer"
    @fieldChange="fieldChange">
  </DrawerSlotView>

</template>

<script setup lang="ts">
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'

import type { Rule } from 'ant-design-vue/es/form';
// import { reactive } from 'vue';
// ----------------------------
// let clientForm:Client = reactive({...initClientForm})
// const myType = 'update'

// --------------------------  表单配置 ------------------------------------------------------------------------------
// 字段 表单参数配置
const clientFields = [
  {
    name: 'tags',
    label: '标签',
    component: 'a-select-number',
    props: {
      options_num: [
        { value: 0, label: '待定' },
        { value: 1, label: '意向' },
        { value: 2, label: '待签' },
        { value: 3, label: '已签' },
        { value: 3, label: '已归档' }
      ]
    },
    span: 8
  },
  { name: 'name', label: '乙方名称', component: 'a-input', props: { placeholder: 'Enter client name' } },
  { name: 'business', label: '业务', component: 'a-input', props: { placeholder: '请输入 业务用途' } },
  { name: 'usage', label: '用途', component: 'a-input', props: { placeholder: '请输入 业务用途' } },
  { name: 'contact', label: '联系人', component: 'a-input', props: { placeholder: 'Enter phone number' } },
  { name: 'phonenumber', label: '联系号码', component: 'a-input', props: { placeholder: 'Enter phone number' } },
  { name: 'emergencycontact', label: '紧急联系人', component: 'a-input', props: { placeholder: 'Enter phone number' } },
  { name: 'emergencycontactphone', label: '紧急联系人号码', component: 'a-input', props: { placeholder: 'Enter phone number' } },
  { name: 'marks', label: 'marks', component: 'a-input', props: { placeholder: 'Enter phone number' } },
  // 其他字段可以按需添加
];

// 字段 规则配置
const rules: Record<string, Rule[]> = {
  tags: [{ required: false, message: 'Please enter phone number' }],
  name: [{ required: true, message: 'Please enter client name' }],
  business: [{ required: true, message: '请输入业务用途', trigger: 'change' }],
  usage: [{ required: true, message: '请输入业务用途', trigger: 'change' }],
  contact: [{ required: true, message: 'Please enter phone number' }],
  phonenumber: [{ required: true, message: 'Please enter phone number' }],
  emergencycontact: [{ required: false, message: 'Please enter phone number' }],

  emergencycontactphone: [{ required: false, message: 'Please enter phone number' }],
  marks: [{ required: false, message: 'Please enter phone number' }],
  // 其他字段的验证规则可以按需添加
};
// --------------------------  表单配置 ------------------------------------------------------------------------------

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------

import { useClientStore } from '@/stores/client';
const clientStore = useClientStore();



// -------------- emits事件【1.cp.vue事件可以触发下面的事件。 2.可以接收来自 cp.vue的数据】  ------------------------
// ----- cp.vue 虽然无法直接和 pinia层交互数据，但是可以通过 emits来 触发 diy.vue中的函数，来运行某些行为的函数。
// 

const showDrawer = async () => { // 读取 指定ID的 数据 
  console.log("ID------------", clientStore.data.selectID);
  await clientStore.readById(clientStore.data.selectID);
  //  为什么没有生效
}


const handleSubmit = async (form: any) => { // 更新指定数据 // Create / Update
  // console.log("UpdateClient--------------------------------",clientStore.currentSelectObjID,form);
  console.log("ID------------", clientStore.data.selectID, form);

  await clientStore.update(clientStore.data.selectID, form);
  // console.log("readByIdforFormLoad: ",clientStore.page.item.name); 
}


const fieldChange = async (form: any) => { // 获取每次表单更改的数据
  console.log("form:", form);
  clientStore.data.UItem = form;
}
// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------

</script>

<style scoped></style>