<script setup lang="ts">
import ZWItem from './ZWItem.vue';
</script>

<template>
<div>
    <h1>Zero width lab</h1>
    <div>
        <ZWItem label="ZW space" zwchar="&#8203;"/>
        <ZWItem label="ZW no-break space" zwchar="&#xfeff;"/>
        <ZWItem label="ZW non-joiner" zwchar="&zwnj;"/>
        <ZWItem label="ZW joiner" zwchar="&#8205;"/>
        <ZWItem label="LTR mark" zwchar="&lrm;"/>
        <ZWItem label="RTL mark" zwchar="&rlm;"/>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
