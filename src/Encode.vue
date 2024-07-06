<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import writeTextToClipboard from './utils.ts'
import { encode } from './zero-width-lib.ts'
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/lock--outlined.js';
import type { TextField } from 'mdui/components/text-field.js';
const instance = getCurrentInstance()!;
function encodeText() {
    const visible = (instance.refs.encode_visible as TextField).value
    const hidden = (instance.refs.encode_hidden as TextField).value
    const output = encode(visible, hidden) as string
    (instance.refs.encode_output as TextField).value = output;
}
function clearInput() {
    (instance.refs.encode_visible as TextField).value = '';
    (instance.refs.encode_hidden as TextField).value = '';
    (instance.refs.encode_output as TextField).value = '';
}
function copy() {
    writeTextToClipboard((instance.refs.encode_output as TextField).value);
}
</script>

<template>
<div>
    <h1>Encode</h1>
    <mdui-text-field label="Visible text" autosize min-rows="2" ref="encode_visible"></mdui-text-field>
    <mdui-text-field label="Hidden text" autosize min-rows="2" ref="encode_hidden"></mdui-text-field>
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
    <mdui-text-field readonly label="Output" autosize min-rows="2" ref="encode_output"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button @click="copy">
            Copy
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
</div>
</template>

<style scoped>

</style>

