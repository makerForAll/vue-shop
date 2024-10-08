<!-- <template>
    <ReadClientServersView :partysoftware-id="headerStore.partysoftwareId"></ReadClientServersView>
</template>

<script setup lang="ts">
import ReadClientServersView from '../cp-projectCP/ClientServersHome/ReadClientServers.vue'
import { useHeaderStore } from '@/stores/header';
const headerStore = useHeaderStore()
</script>

<style scoped></style>
 -->




<template>
    <!-- 客户相关 -->
    <div>
        <ReadClientServersView :partysoftware-id="props.partysoftwareId">

            <template #headerHandle>

                <CreateClientView :partysoftware-id="props.partysoftwareId"></CreateClientView>
            </template>
            <template #operations-readClient>
                <UpdateClientView></UpdateClientView>
                <DeleteClientView></DeleteClientView>
                <ReadPlanView>
                    <template #header>
                        <CreatePlanView></CreatePlanView>
                    </template>
                    <template #operations>
                        <UpdatePlanView></UpdatePlanView>
                        <DeletePlanView></DeletePlanView>
                    </template>
                </ReadPlanView>

            </template>
        </ReadClientServersView>
    </div>
</template>

<script setup lang="ts">
// 主板-插槽  【Tab 插槽板】
import TabsSlotView from '@/cp-v1/cp-MB/Tabs/TabsSlot.vue' // 优化掉

// cp-projectCP 配置你要的 配件
import CreateClientView from '../cp-projectCP/ClientHome/CreateClient/CreateClientHome.vue';

// 小主板-插槽  【表格 插槽板】
// import ReadClientView from '../cp-projectCP/ClientHome/ReadClient/ReadClientHome.vue';// 优化掉
import ReadClientServersView from '../cp-projectCP/ClientServersHome/ReadClientServers.vue'

// cp-projectCP 配置你要的 配件
import UpdateClientView from '../cp-projectCP/ClientHome/UpdateClient/UpdateClient.vue';
import DeleteClientView from '../cp-projectCP/ClientHome/DeleteClient/Home.vue';

// 主板-插槽 【抽屉 插槽板】
// import DrawerSlotView from '@/cp-v1/cp-MB/Drawer/DrawerSlot.vue';
// import ReadPlanView from '@/cp-v1/cp-ReadMB-data/Drawer/0101.vue';
import ReadPlanView from '../cp-projectCP/PlanHome/ReadPlan/Home.vue';

// cp-projectCP 配置你要的 配件
import CreatePlanView from '../cp-projectCP/PlanHome/CreatePlanHome.vue';
import UpdatePlanView from '../cp-projectCP/PlanHome/UpdatePlanHome.vue';

import DeletePlanView from '../cp-projectCP/PlanHome/DeletePlan/Home.vue';
import { useClientStore } from '@/stores/client';


// ---------------
const props = defineProps({
    partysoftwareId: {
        type: String,
        default: ''
    }
})

// --------------
const clientStore = useClientStore();

const handleTabChange = (key: number) => {
    console.log("getKey", key);
    clientStore.getKeyToState(key);
    //   const tagValue = parseInt(key) - 1;
    //   currentFilters.value = { tags: tagValue };
    // 触发新的请求
    //   fetchData(currentFilters.value);
};

</script>
<style scoped></style>