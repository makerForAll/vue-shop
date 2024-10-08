<template>
    <ReadSoftwareView>
        <template #headerHandle>
            <CreateSoftwareView></CreateSoftwareView>
        </template>
        <template #operations>
            <UpdateSoftwareView></UpdateSoftwareView>
            <DeleteSoftwareView></DeleteSoftwareView>
        </template>
    </ReadSoftwareView>
</template>

<script setup lang="ts">
import ReadSoftwareView from '../cp-projectCP/SoftwareHome/ReadSoftware.vue'
import CreateSoftwareView from '../cp-projectCP/SoftwareHome/CreateSoftware.vue'
import UpdateSoftwareView from '../cp-projectCP/SoftwareHome/UpdateSoftware.vue';
import DeleteSoftwareView from '../cp-projectCP/SoftwareHome/DeleteSoftware.vue';
</script>

<style scoped></style>