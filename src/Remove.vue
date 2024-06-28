<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
import writeTextToClipboard from './utils.ts';
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import 'mdui/components/collapse.js';
import 'mdui/components/collapse-item.js';
import 'mdui/components/checkbox.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/remove.js';
import '@mdui/icons/expand-circle-down--outlined.js';
import 'mdui/components/list-item.js';
import type { Checkbox } from 'mdui/components/checkbox.js';
import type { TextField } from 'mdui/components/text-field.js';
const instance = getCurrentInstance()!;
function remove() {
    const input = (instance.refs.remove_input as TextField).value
    const zwChars = Array<String>()
    if((instance.refs.remove_zw_zwsp as Checkbox).checked) { zwChars.push('\u200b') }
    if((instance.refs.remove_zw_zwnbsp as Checkbox).checked) { zwChars.push('\ufeff') }
    if((instance.refs.remove_zw_zwnj as Checkbox).checked) { zwChars.push('\u200c') }
    if((instance.refs.remove_zw_zwj as Checkbox).checked) { zwChars.push('\u200d') }
    if((instance.refs.remove_zw_ltr as Checkbox).checked) { zwChars.push('\u200e') }
    if((instance.refs.remove_zw_rtl as Checkbox).checked) { zwChars.push('\u200f') }
    var count = 0
    var output = ''
    Array.from(input).forEach(item => {
        if(zwChars.includes(item)) {
            count++
        } else {
            output += item
        }
    });
    (instance.refs.remove_output as TextField).value = output;
    (instance.refs.remove_stat as HTMLElement).innerText = 'Removed ' + count + ' ZW characters'
}
function clearInput() {
    (instance.refs.remove_input as TextField).value = '';
    (instance.refs.remove_output as TextField).value = '';
    (instance.refs.remove_stat as HTMLElement).innerText = '';
}
function copy() {
    writeTextToClipboard((instance.refs.remove_output as TextField).value);
}
onMounted(()=>{
    setTimeout(function() {
        (instance.refs.collapse as HTMLElement).style['max-height' as any] = '20rem'
    }, 200)
})
</script>

<template>
<div>
    <h1>Remove</h1>
    <mdui-text-field label="Input" autosize min-rows="4" ref="remove_input"></mdui-text-field>
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
    <mdui-collapse ref="collapse">
        <mdui-collapse-item>
            <mdui-list-item slot="header">
                <mdui-icon-expand-circle-down--outlined slot="icon"></mdui-icon-expand-circle-down--outlined>
                Remove ZW chars
            </mdui-list-item>
            <mdui-checkbox checked ref="remove_zw_zwsp">ZW space</mdui-checkbox>
            <mdui-checkbox checked ref="remove_zw_zwnbsp">ZW no-break space</mdui-checkbox>
            <mdui-checkbox checked ref="remove_zw_zwnj">ZW non-joiner</mdui-checkbox>
            <mdui-checkbox checked ref="remove_zw_zwj">ZW joiner</mdui-checkbox>
            <mdui-checkbox checked ref="remove_zw_ltr">LTR mark</mdui-checkbox>
            <mdui-checkbox checked ref="remove_zw_rtl">RTL mark</mdui-checkbox>
        </mdui-collapse-item>
    </mdui-collapse>
    <mdui-text-field readonly label="Output" autosize min-rows="4" ref="remove_output"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button @click="copy">
            Copy
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
    <p ref="remove_stat"></p>
</div>
</template>

<style scoped lang="scss">
    mdui-collapse {
        max-height: 3.5rem;
    }
</style>

