<template>
    <!-- 不动产相关(管理) -->
    <ReadUnityVIew :partysoftware-id="props.partysoftwareId">
        <template #headerHandle>
            <CreateUnityView :partysoftware-id="props.partysoftwareId"></CreateUnityView>
        </template>
        <template #operations>
            <UpdateUnityView></UpdateUnityView>
            <DeleteUnityView></DeleteUnityView>
        </template>
    </ReadUnityVIew>
</template>

<script setup lang="ts">
import ReadUnityVIew from '../cp-projectCP/UnityHome/ReadUnity.vue'
import CreateUnityView from '../cp-projectCP/UnityHome/CreateUnity.vue';
import UpdateUnityView from '../cp-projectCP/UnityHome/UpdateUnity.vue';
import DeleteUnityView from '../cp-projectCP/UnityHome/DeleteUnity.vue';

const props = defineProps({
    partysoftwareId: {
        type: String,
        default: ''
    }
})
</script>

<style scoped></style>