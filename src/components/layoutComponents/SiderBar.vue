<template>
    <a-layout-sider id="sider1" v-model:collapsed="collapsed" collapsible>
        <div class="logo">
            <a :href="`${domain}`"><img src="../../assets/logo.svg" alt="Logo" class="logo-image" />
                <span v-if="!collapsed" class="logo-text">主页(2024/08/20版本)</span>
            </a>
        </div>
        <a-menu id="sider2" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
                <pie-chart-outlined />
                <span>
                    <RouterLink :to="`/party/${partyId}/`">仪表盘</RouterLink>
                </span>
            </a-menu-item>
            <!-- <a-menu-item key="2">
                <desktop-outlined />
                <span>Option 2</span>
            </a-menu-item> -->
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>
                            不动产相关
                        </span>
                    </span>
                </template>
                <a-menu-item key="3">
                    <RouterLink :to="`/party/${partyId}/unity`">不动产(管理)</RouterLink>
                </a-menu-item>
                <!-- <a-menu-item key="4">Bill</a-menu-item>
                <a-menu-item key="5">Alex</a-menu-item> -->
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>新客户相关</span>
                    </span>
                </template>
                <a-menu-item key="10">
                    <RouterLink :to="`/party/${partyId}/client`">新客户(管理)</RouterLink>
                </a-menu-item>
                <!-- <a-menu-item key="15">Team 2</a-menu-item> -->
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>综合服务相关</span>
                    </span>
                </template>
                <a-menu-item key="20">
                    <RouterLink :to="`/party/${partyId}/contract`">合同(客户服务)</RouterLink>
                </a-menu-item>
                <!-- <a-menu-item key="21">Team 2</a-menu-item> -->
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>财务相关</span>
                    </span>
                </template>
                <a-menu-item key="30">
                    <RouterLink :to="`/party/${partyId}/contract`">合同(支付,交税)</RouterLink>
                </a-menu-item>
                <!-- <a-menu-item key="9">Team 2</a-menu-item> -->
            </a-sub-menu>
            <a-sub-menu key="sub5">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>法务相关</span>
                    </span>
                </template>
                <a-menu-item key="32">
                    <RouterLink :to="`/party/${partyId}/contract`">合同(风险)</RouterLink>
                </a-menu-item>
                <!-- <a-menu-item key="9">Team 2</a-menu-item> -->
            </a-sub-menu>
            <!-- <a-menu-item key="9">
                <file-outlined />
                <span>File</span>
            </a-menu-item> -->
        </a-menu>
    </a-layout-sider>
</template>
<script setup lang="ts">
import { usePartyStore } from '@/stores';
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
} from '@ant-design/icons-vue';
import { onMounted, ref, toRefs, watch } from 'vue';
// import useHeaderStore from '@/stores/header';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
// import UnityHomeView from '../DepartmentEngineering/UnityHome.vue';

// const headerStore = useHeaderStore();
// const { companyCode } = toRefs(headerStore);

const props = defineProps({
    partyId: {
        type: String,
        default: ''
    }
})
const store = usePartyStore();
const partyId = ref<string>(props.partyId);
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['home']);
// 创建一个ref来存储域名
const domain = ref<string>('');

const route = useRoute();

const updateSelectedKeys = () => {
    const currentRoutePath = route.path;

    // 根据当前路径设置选中的key

    switch (true) {
        case currentRoutePath.startsWith('/party'):
            selectedKeys.value = ['party'];
            break;
        case currentRoutePath.startsWith('/unity'):
            selectedKeys.value = ['1-1'];
            break;
        case currentRoutePath.startsWith('/client'):
            selectedKeys.value = ['2-1'];
            break;
        case currentRoutePath.startsWith('/contract'):
            selectedKeys.value = ['3-1']; // 设置多个匹配
            break;

        default:
            selectedKeys.value = ['home'];
            break;
    }

};


// 监听路由变化更新 selectedKeys
watch(route, updateSelectedKeys, { immediate: true });

onMounted(() => {
    domain.value = `${window.location.protocol}//${window.location.host}`;
    updateSelectedKeys();
    if (props.partyId) {
        store.readById(props.partyId);
    }
})
</script>
<style>
/* .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
} */
.logo-image {
    width: 32px;
    height: 32px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

.logo-text {
    margin-left: 8px;
    font-size: 12px;
    color: gold;
}

/* .logo {

    height: 31px;
    margin: 16px;
    background: rgba(255, 255, 255, .3);
 
    
} */
</style>