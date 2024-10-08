<template>
    <div v-if="softwareStore.data.tabsKey == 0">
        <DrawerSlotView :action="'录入'" :entityType="'软件信息'" v-model="softwareStore.data.CItem" :fields="clientFields"
            :rules="rules" @handleSubmit="handleSubmit" @fieldChange="fieldChange" @showDrawer="showDrawer">
        </DrawerSlotView>
    </div>
</template>

<script setup lang="ts">
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
import { useClientStore } from '@/stores/client';
import type { Rule } from 'ant-design-vue/es/form';
import type { Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue';
import type { CClientVO } from '@/2-biz-complex/services/vo/client';
import { useSoftwareStore } from '@/stores/software';

// --------------------------  表单配置 ------------------------------------------------------------------------------

const clientFields: Field[] = [
    { name: 'name', label: '乙方', component: 'a-input', props: { placeholder: '请输入甲方-名称' } },
    { name: 'url', label: '链接', component: 'a-input', props: { placeholder: '请输入备注信息' } },
    { name: 'marks', label: '备注', component: 'a-input', props: { placeholder: '请输入备注信息' } },
];

const rules: Record<string, Rule[]> = {
    name: [{ required: true, message: '请输入乙方-名称', trigger: 'change' }],
    url: [{ required: true, message: '链接', trigger: 'change' }],
    marks: [{ required: false, message: '请输入备注信息' }],
};

// --------------------------  表单配置 ------------------------------------------------------------------------------


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
const softwareStore = useSoftwareStore();


const handleSubmit = async (form: CClientVO) => {
    console.log("form:-----------", form);
    await softwareStore.create(form);
}

const showDrawer = async () => { // 重置form
    // await clientStore.getInit();
}

const fieldChange = async (form: any) => {
    softwareStore.data.CItem = form;
}


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>


<style scoped></style>