<template>
    <div v-if="partysoftwareStore.data.tabsKey == 0">
        <DrawerSlotView :action="'录入'" :entityType="'公司-软件信息'" v-model="partysoftwareStore.data.CItem"
            :fields="clientFields" :rules="rules" @handleSubmit="handleSubmit" @fieldChange="fieldChange"
            @showDrawer="showDrawer">
        </DrawerSlotView>
    </div>
</template>

<script setup lang="ts">
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
// import { useClientStore } from '@/stores/client';
import type { Rule } from 'ant-design-vue/es/form';
import type { Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue';
import type { CClientVO } from '@/2-biz-complex/services/vo/client';
import { usePartySoftwareStore } from '@/stores/partysoftware';
import { computed } from 'vue';

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
// --------------------------  表单配置 ------------------------------------------------------------------------------

const clientFields = computed(() => [
    { name: 'name', label: '软件详细名称', component: 'a-input', props: { placeholder: 'Enter client name' } },
    { name: 'url', label: '链接', component: 'a-input', props: { placeholder: 'Enter phone number' } },
    { name: 'marks', label: 'marks', component: 'a-input', props: { placeholder: 'Enter phone number' } },
    {
        name: 'party',
        label: '填入party_id',
        component: 'a-select-query',
        props: { placeholder: 'Enter phone number', options_str: partysoftwareStore.data.partyItems }
    },
    {
        name: 'software',
        label: '填入software_id',
        component: 'a-select-query',
        props: { placeholder: 'Enter phone number', options_str: partysoftwareStore.data.softwareItems }
    },
    {
        name: 'disabled',
        label: '是否禁点击跳转',
        component: 'a-select-bool',
        props: {
            options_bool: [
                { value: true, label: 'true' },
                { value: false, label: 'false' }
            ]
        },
        span: 8
    },
    // 其他字段可以按需添加
] as Field[]);

const rules: Record<string, Rule[]> = {
    name: [{ required: true, message: '请输入乙方-名称', trigger: 'change' }],
    url: [{ required: true, message: '链接', trigger: 'change' }],
    marks: [{ required: false, message: '请输入备注信息' }],
};

// --------------------------  表单配置 ------------------------------------------------------------------------------


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
const partysoftwareStore = usePartySoftwareStore();


const handleSubmit = async (form: CClientVO) => {
    console.log("form:-----------", form);
    await partysoftwareStore.create(form);
}

const showDrawer = async () => { // 重置form
    // await clientStore.getInit();
}

const fieldChange = async (form: any) => {
    partysoftwareStore.data.CItem = form;
}


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>


<style scoped></style>