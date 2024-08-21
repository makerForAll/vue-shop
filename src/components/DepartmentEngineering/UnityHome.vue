<template>
    <!-- 不动产相关(管理) -->
    <ReadUnityVIew>
        <template #headerHandle>
            <CreateUnityView></CreateUnityView>
        </template>
        <template #operations>
            <UpdateUnityView></UpdateUnityView>
            <DeleteUnityView></DeleteUnityView>
        </template>
    </ReadUnityVIew>
</template>

<script setup lang="ts">
import ReadUnityVIew from '@/cp-projectCP/UnityHome/ReadUnity.vue'
import CreateUnityView from '@/cp-projectCP/UnityHome/CreateUnity.vue';
import UpdateUnityView from '@/cp-projectCP/UnityHome/UpdateUnity.vue';
import DeleteUnityView from '@/cp-projectCP/UnityHome/DeleteUnity.vue';
</script>

<style scoped></style>