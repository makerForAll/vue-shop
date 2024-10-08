<template>
    <DrawerSlotView :action="'更新'" :entityType="''" v-model="store.data.UItem" :fields="clientFields" :rules="rules"
        :loading="store.data.loading" @handleSubmit="handleSubmit" @showDrawer="showDrawer" @fieldChange="fieldChange">
    </DrawerSlotView>

</template>

<script setup lang="ts">
import DrawerSlotView, { type Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'

import type { Rule } from 'ant-design-vue/es/form';
// import { reactive } from 'vue';
// ----------------------------
// let clientForm:Client = reactive({...initClientForm})
// const myType = 'update'

// --------------------------  表单配置 ------------------------------------------------------------------------------
const clientFields: Field[] = [
    { name: 'code', label: '单元编号', component: 'a-input', props: { placeholder: '请输入单元编号' } },
    { name: 'area', label: '单元面积', component: 'a-input-number', props: { placeholder: '请输入面积信息' } },
    { name: 'shared_area', label: '分摊后面积', component: 'a-input-number', props: { placeholder: '请输入分摊后面积' } },
    { name: 'coordinates', label: 'xy坐标', component: 'a-input', props: { placeholder: '请输入xy坐标' } },
    { name: 'angle', label: '角度', component: 'a-input-number', props: { placeholder: '请输入角度' } },
    { name: 'marks', label: '备注', component: 'a-input', props: { placeholder: '请输入备注信息' } },
];

const rules: Record<string, Rule[]> = {
    code: [{ required: true, message: '请输入单元编号', trigger: 'change' }],
    area: [{ required: true, message: '请输入面积信息', trigger: 'change' }],
    shared_area: [{ required: true, message: '请输入分摊后面积', trigger: 'change' }],
    coordinates: [{ required: true, message: '请输入xy坐标', trigger: 'change' }],
    angle: [{ required: true, message: '请输入角度', trigger: 'change' }],
    marks: [{ required: true, message: '请输入备注信息', trigger: 'change' }],
};
// --------------------------  表单配置 ------------------------------------------------------------------------------

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
import { useUnityStore } from '@/stores/unity';
const store = useUnityStore();



// -------------- emits事件【1.cp.vue事件可以触发下面的事件。 2.可以接收来自 cp.vue的数据】  ------------------------
// ----- cp.vue 虽然无法直接和 pinia层交互数据，但是可以通过 emits来 触发 diy.vue中的函数，来运行某些行为的函数。
// 

const showDrawer = async () => { // 读取 指定ID的 数据 
    console.log("ID------------", store.data.selectID);
    await store.readById(store.data.selectID);
    //  为什么没有生效
}


const handleSubmit = async (form: any) => { // 更新指定数据 // Create / Update
    // console.log("UpdateClient--------------------------------",clientStore.currentSelectObjID,form);
    console.log("ID------------", store.data.selectID, form);

    await store.update(store.data.selectID, form);
    // console.log("readByIdforFormLoad: ",clientStore.page.item.name); 
}


const fieldChange = async (form: any) => { // 获取每次表单更改的数据
    console.log("form:", form);
    store.data.UItem = form;
}
// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------

</script>

<style scoped></style>