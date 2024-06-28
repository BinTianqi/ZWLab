<script setup lang="ts">
import { getCurrentInstance, onMounted, ouMounted } from 'vue';
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
const instance = getCurrentInstance()!;
function remove() {
    const input = instance.refs.input.value
    const zwChars = Array<String>()
    if(instance.refs.zw_zwsp.checked) { zwChars.push('\u200b') }
    if(instance.refs.zw_zwnbsp.checked) { zwChars.push('\ufeff') }
    if(instance.refs.zw_zwnj.checked) { zwChars.push('\u200c') }
    if(instance.refs.zw_zwj.checked) { zwChars.push('\u200d') }
    if(instance.refs.zw_ltr.checked) { zwChars.push('\u200e') }
    if(instance.refs.zw_rtl.checked) { zwChars.push('\u200f') }
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
onMounted(()=>{
    setTimeout(function() {
        instance.refs.collapse.style['max-height'] = '20rem'
    }, 200)
})
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
    <mdui-collapse ref="collapse">
        <mdui-collapse-item>
            <mdui-list-item slot="header">
                <mdui-icon-expand-circle-down--outlined slot="icon"></mdui-icon-expand-circle-down--outlined>
                Remove ZW chars
            </mdui-list-item>
            <mdui-checkbox checked ref="zw_zwsp">ZW space</mdui-checkbox>
            <mdui-checkbox checked ref="zw_zwnbsp">ZW no-break space</mdui-checkbox>
            <mdui-checkbox checked ref="zw_zwnj">ZW non-joiner</mdui-checkbox>
            <mdui-checkbox checked ref="zw_zwj">ZW joiner</mdui-checkbox>
            <mdui-checkbox checked ref="zw_ltr">LTR mark</mdui-checkbox>
            <mdui-checkbox checked ref="zw_rtl">RTL mark</mdui-checkbox>
        </mdui-collapse-item>
    </mdui-collapse>
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
    mdui-collapse {
        max-height: 3.5rem;
    }
</style>

