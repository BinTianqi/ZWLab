<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import writeTextToClipboard from './utils.ts'
import { decode } from './zero-width-lib.ts'
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/lock-open.js';
import type { DecodedString } from './zero-width-lib.ts'
import type { TextField } from 'mdui/components/text-field.js';
const instance = getCurrentInstance()!;
function decodeText() {
    const input = (instance.refs.decode_input as TextField).value
    const decoded = decode(input) as DecodedString;
    (instance.refs.decode_visible as TextField).value = decoded.vis;
    (instance.refs.decode_hidden as TextField).value = decoded.hid;
}
function clearInput() {
    (instance.refs.decode_input as TextField).value = '';
    (instance.refs.decode_visible as TextField).value = '';
    (instance.refs.decode_hidden as TextField).value = '';
}
function copyVisible() {
    writeTextToClipboard((instance.refs.decode_visible as TextField).value);
}
function copyHidden() {
    writeTextToClipboard((instance.refs.decode_hidden as TextField).value)
}
</script>

<template>
<div>
    <h1>Decode</h1>
    <mdui-text-field label="Input" autosize min-rows="2" ref="decode_input"></mdui-text-field>
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
    <mdui-text-field readonly label="Visible text" autosize min-rows="2" ref="decode_visible"></mdui-text-field>
    <mdui-text-field readonly label="Hidden text" autosize min-rows="2" ref="decode_hidden"></mdui-text-field>
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

