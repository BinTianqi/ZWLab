<script setup lang="ts">
import { ref } from 'vue'
import ZWItem from './ZWItem.vue';
import '@mdui/icons/light-mode.js';
import 'mdui/components/button-icon.js';
import '@mdui/icons/dark-mode.js';
const darkTheme = ref(false)
darkTheme.value = document.getElementById('html').classList.contains('mdui-theme-dark')
function setTheme() {
    darkTheme.value = !darkTheme.value
    document.getElementById('html').className = darkTheme.value? 'mdui-theme-dark': 'mdui-theme-light'
}
</script>

<template>
<div>
    <div id="titlebar">
        <h1>Zero width lab</h1>
        <mdui-button-icon @click="setTheme">
            <mdui-icon-light-mode v-if="darkTheme"></mdui-icon-light-mode>
            <mdui-icon-dark-mode v-if="!darkTheme"></mdui-icon-dark-mode>
        </mdui-button-icon>
    </div>
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
#titlebar {
    display: flex;
    align-items: center;
}
</style>
