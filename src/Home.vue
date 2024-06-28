<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import ZWItem from './ZWItem.vue';
import '@mdui/icons/light-mode.js';
import 'mdui/components/button-icon.js';
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/info--outlined.js';
import 'mdui/components/dialog.js';
import type { Dialog } from 'mdui/components/dialog.js';
const instance = getCurrentInstance()!
const darkTheme = ref(false)
darkTheme.value = document.getElementById('html')!.classList.contains('mdui-theme-dark')
function setTheme() {
    darkTheme.value = !darkTheme.value
    document.getElementById('html')!.className = darkTheme.value? 'mdui-theme-dark': 'mdui-theme-light'
}
function toggleDialog() {
    (instance.refs.dialog as Dialog).open = !(instance.refs.dialog as Dialog).open
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
        <mdui-button-icon @click="toggleDialog">
            <mdui-icon-info--outlined></mdui-icon-info--outlined>
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
    <mdui-dialog close-on-esc close-on-overlay-click ref="dialog">
        <span slot="headline">Zero width lab</span>
        <span slot="description">Author: Tianqi Bin</span>
        <mdui-button slot="action" variant="text" href="https://github.com/BinTianqi/ZWLab">Source code</mdui-button>
        <mdui-button slot="action" variant="tonal" @click="toggleDialog">Close</mdui-button>
    </mdui-dialog>
</div>
</template>

<style scoped lang="scss">
#titlebar {
    display: flex;
    align-items: center;
}
mdui-button-icon {
    margin-right: 0.3rem;
}
</style>
