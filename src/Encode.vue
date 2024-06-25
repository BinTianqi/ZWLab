<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import writeTextToClipboard from './utils.ts'
import { encode } from './zero-width-lib.ts'
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/lock--outlined.js';
const instance = getCurrentInstance()!;
function encodeText() {
    const visible = instance.refs.visible.value
    const hidden = instance.refs.hidden.value
    const output = encode(visible, hidden)
    instance.refs.output.value = output;
}
function clearInput() {
    instance.refs.visible.value = ''
    instance.refs.hidden.value = ''
    instance.refs.output.value = ''
}
function copy() {
    writeTextToClipboard(instance.refs.output.value);
}
</script>

<template>
<div>
    <h1>Encode</h1>
    <mdui-text-field variant="outlined" label="Visible text" autosize min-rows="2" ref="visible"></mdui-text-field>
    <mdui-text-field variant="outlined" label="Hidden text" autosize min-rows="2" ref="hidden"></mdui-text-field>
    <div class="buttons_row"> 
        <mdui-button variant="text" @click="clearInput">
            Clear
            <mdui-icon-clear slot="icon"></mdui-icon-clear>
        </mdui-button>
        <mdui-button @click="encodeText">
            Encode
            <mdui-icon-lock--outlined slot="icon"></mdui-icon-lock--outlined>
        </mdui-button>
    </div>
    <mdui-text-field readonly variant="outlined" label="Output" autosize min-rows="2" ref="output"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button @click="copy">
            Copy
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>

