<template>
    <div>
        <DrawerSlotView :action="'录入'" :entityType="'不动产单元信息'" v-model="store.data.CItem" :fields="clientFields"
            :loading="store.data.loading" :rules="rules" @handleSubmit="handleSubmit" @fieldChange="fieldChange"
            @showDrawer="showDrawer">
        </DrawerSlotView>
    </div>
</template>

<script setup lang="ts">
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
// import { useClientStore } from '@/stores/client';
import type { Rule } from 'ant-design-vue/es/form';
import type { Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue';
import type { CClientVO } from '@/services/vo/client';
import { useUnityStore } from '@/stores/unity';

// --------------------------  表单配置 ------------------------------------------------------------------------------

const clientFields: Field[] = [
    { name: 'code', label: '单元编号', component: 'a-input', props: { placeholder: '请输入单元编号' }, span: 24 },
    { name: 'area', label: '单元面积', component: 'a-input-number', props: { placeholder: '请输入面积信息' }, span: 24 },
    { name: 'shared_area', label: '分摊后面积', component: 'a-input-number', props: { placeholder: '请输入分摊后面积' }, span: 24 },
    { name: 'coordinates', label: 'xy坐标', component: 'a-input', props: { placeholder: '请输入xy坐标' }, span: 24 },
    { name: 'angle', label: '角度', component: 'a-input-number', props: { placeholder: '请输入角度' }, span: 24 },
    { name: 'marks', label: '备注', component: 'a-input', props: { placeholder: '请输入备注信息' }, span: 24 },
];

const rules: Record<string, Rule[]> = {
    code: [{ required: true, message: '请输入单元编号', trigger: 'change' }],
    area: [{ required: false, message: '请输入面积信息', trigger: 'change' }],
    shared_area: [{ required: false, message: '请输入分摊后面积', trigger: 'change' }],
    coordinates: [{ required: false, message: '请输入xy坐标', trigger: 'change' }],
    angle: [{ required: false, message: '请输入角度', trigger: 'change' }],
    marks: [{ required: false, message: '请输入备注信息', trigger: 'change' }],
};

// --------------------------  表单配置 ------------------------------------------------------------------------------

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
const store = useUnityStore();

const handleSubmit = async (form: CClientVO) => {
    console.log("form:-----------", form);
    await store.create(form);

}

const showDrawer = async () => { // 重置form
    // await clientStore.getInit();
}

const fieldChange = async (form: any) => {
    store.data.CItem = form;
}


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>


<style scoped></style>