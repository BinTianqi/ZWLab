<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import writeTextToClipboard from './utils.ts'
import { decode } from './zero-width-lib.ts'
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/lock-open.js';
import type { Button } from 'mdui/components/button.js';
import type { TextField } from 'mdui/components/text-field.js';
const instance = getCurrentInstance();
function decodeText() {
    const input = instance.refs.input.value
    const decoded = decode(input)
    instance.refs.visible.value = decoded.visible
    instance.refs.hidden.value = decoded.hidden
}
function clearInput() {
    instance.refs.input.value = ''
    instance.refs.visible.value = ''
    instance.refs.hidden.value = ''
}
function copyVisible() {
    writeTextToClipboard(instance.refs.visible.value);
}
function copyHidden() {
    writeTextToClipboard(instance.refs.hidden.value)
}
</script>

<template>
<div>
    <h1>Decode</h1>
    <mdui-text-field variant="outlined" label="Input" autosize min-rows="2" ref="input"></mdui-text-field>
    <div class="buttons_row"> 
        <mdui-button variant="text" @click="clearInput">
            Clear
            <mdui-icon-clear slot="icon"></mdui-icon-clear>
        </mdui-button>
        <mdui-button @click="decodeText">
            Decode
            <mdui-icon-lock-open slot="icon"></mdui-icon-lock-open>
        </mdui-button>
    </div>
    <mdui-text-field readonly variant="outlined" label="Visible text" autosize min-rows="2" ref="visible"></mdui-text-field>
    <mdui-text-field readonly variant="outlined" label="Hidden text" autosize min-rows="2" ref="hidden"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button @click="copyVisible">
            Copy visible
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
        <mdui-button @click="copyHidden">
            Copy hidden
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>

