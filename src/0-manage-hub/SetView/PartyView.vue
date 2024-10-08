<template>
    <ReadPartyView>
        <template #headerHandle>
            <CreatePartyView></CreatePartyView>
        </template>
        <template #operations>
            <UpdatePartyView></UpdatePartyView>
            <DeletePartyView></DeletePartyView>
        </template>
    </ReadPartyView>
</template>

<script setup lang="ts">
import ReadPartyView from '../cp-projectCP/PartyHome/ReadParty.vue'
import CreatePartyView from '../cp-projectCP/PartyHome/CreateParty.vue'
import UpdatePartyView from '../cp-projectCP/PartyHome/UpdateParty.vue';
import DeletePartyView from '../cp-projectCP/PartyHome/DeleteParty.vue';
</script>

<style scoped></style>