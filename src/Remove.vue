<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import writeTextToClipboard from './utils.ts';
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/remove.js';
const instance = getCurrentInstance()!;
function remove() {
    const input = instance.refs.input.value
    const zwChars = ['\u200b', '\u200c', '\u200d', '\u200e', '\u200f', '\ufeff']
    var count = 0
    var output = ''
    Array.from(input).forEach(item => {
        if(zwChars.includes(item)) {
            count++
        } else {
            output += item
        }
    })
    instance.refs.output.value = output;
    instance.refs.stat.innerText = 'Removed ' + count + ' ZW characters'
}
function clearInput() {
    instance.refs.input.value = ''
    instance.refs.output.value = ''
    instance.refs.stat.innerText = ''
}
function copy() {
    writeTextToClipboard(instance.refs.output.value);
}
</script>

<template>
<div>
    <h1>Remove</h1>
    <mdui-text-field label="Input" autosize min-rows="4" ref="input"></mdui-text-field>
    <div class="buttons_row"> 
        <mdui-button variant="text" @click="clearInput">
            Clear
            <mdui-icon-clear slot="icon"></mdui-icon-clear>
        </mdui-button>
        <mdui-button @click="remove">
            Remove
            <mdui-icon-remove slot="icon"></mdui-icon-remove>
        </mdui-button>
    </div>
    <mdui-text-field readonly label="Output" autosize min-rows="4" ref="output"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button @click="copy">
            Copy
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
    <p ref="stat"></p>
</div>
</template>

<style scoped lang="scss">

</style>

