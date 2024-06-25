<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import writeTextToClipboard from './utils.ts';
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import 'mdui/components/dropdown.js';
import 'mdui/components/menu.js';
import 'mdui/components/menu-item.js';
import '@mdui/icons/arrow-drop-down.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import type { Button } from 'mdui/components/button.js';
import type { TextField } from 'mdui/components/text-field.js';
import type { Dropdown } from 'mdui/components/dropdown.js';
import type { Menu } from 'mdui/components/menu.js';
import type { MenuItem } from 'mdui/components/menu-item.js';
const selectedZW = ref('ZW space');
const zwChar = ref('\u200b');
const instance = getCurrentInstance();
function insert() {
    const input = instance.refs.input.value
    const textArray = input.matchAll(/./ugs).toArray()
    var output = ''
    textArray.forEach(item => {
        output += item + zwChar.value
    })
    instance.refs.output.value = output;
    instance.refs.stat.innerText = 'Inserted ' + textArray.length + ' ' + selectedZW.value
}
function clearOutput() {
    instance.refs.output.value = ''
    instance.refs.stat.innerText = ''
}
function copy() {
    writeTextToClipboard(instance.refs.output.value);
}
</script>

<template>
<div>
    <h1>Insert</h1>
    <mdui-text-field variant="outlined" label="Input" autosize min-rows="4" ref="input"></mdui-text-field>
    <div id="buttons_row">
        <mdui-dropdown id="dropdown">
            <mdui-button slot="trigger" variant="outlined">
                {{selectedZW}}
                <mdui-icon-arrow-drop-down slot="end-icon"></mdui-icon-arrow-drop-down>
            </mdui-button>
            <mdui-menu>
                <mdui-menu-item @click="selectedZW='ZW space'; zwChar='\u200b'">ZW space</mdui-menu-item>
                <mdui-menu-item @click="selectedZW='ZW no-break space'; zwChar='\ufeff'">ZW no-break space</mdui-menu-item>
                <mdui-menu-item @click="selectedZW='ZW non-joiner'; zwChar='\u200c'">ZW non-joiner</mdui-menu-item>
                <mdui-menu-item @click="selectedZW='ZW joiner'; zwChar='\u200d'">ZW joiner</mdui-menu-item>
                <mdui-menu-item @click="selectedZW='LTR mark'; zwChar='\u200e'">LTR mark</mdui-menu-item>
                <mdui-menu-item @click="selectedZW='RTL mark'; zwChar='\u200f'">RTL mark</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
        <mdui-button @click="insert">Insert</mdui-button>
    </div>
    <mdui-text-field readonly variant="outlined" label="Output" autosize min-rows="4" ref="output"></mdui-text-field>
    <div id="buttons_row">
        <mdui-button @click="clearOutput">
            Clear output
            <mdui-icon-clear slot="icon"></mdui-icon-clear>
        </mdui-button>
        <mdui-button @click="copy">
            Copy
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
    <p ref="stat"></p>
</div>
</template>

<style scoped lang="scss">
#buttons_row {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}
#dropdown {
    --z-index: 10;
}
mdui-button {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
}
</style>

