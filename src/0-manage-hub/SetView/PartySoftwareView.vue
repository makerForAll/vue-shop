<template>
    <ReadPartySoftwareView>
        <template #headerHandle>
            <CreatePartySoftwareView></CreatePartySoftwareView>
        </template>
        <template #operations="{ record }">
            <UpdatePartySoftwareView :recordId="record.id"></UpdatePartySoftwareView>
            <DeletePartySoftwareView></DeletePartySoftwareView>
        </template>
    </ReadPartySoftwareView>
</template>

<script setup lang="ts">
import ReadPartySoftwareView from '../cp-projectCP/PartySoftwareHome/ReadPartySoftware.vue'
import CreatePartySoftwareView from '../cp-projectCP/PartySoftwareHome/CreatePartySoftware.vue'
import UpdatePartySoftwareView from '../cp-projectCP/PartySoftwareHome/UpdatePartySoftware.vue';
import DeletePartySoftwareView from '../cp-projectCP/PartySoftwareHome/DeletePartySoftware.vue';
</script>

<style scoped></style>