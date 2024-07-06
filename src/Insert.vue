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
import '@mdui/icons/add.js';
import type { TextField } from 'mdui/components/text-field.js';
const selectedZW = ref('ZW space');
const zwChar = ref('\u200b');
const instance = getCurrentInstance()!
function insert() {
    const input = (instance.refs.insert_input as TextField).value
    const textArray = input.matchAll(/./ugs)
    var output = ''
    for(const each of textArray) {
        output += each
    }
    (instance.refs.insert_output as TextField).value = output;
    (instance.refs.insert_stat as TextField).innerText = 'Inserted ' + input.length + ' ' + selectedZW.value
}
function clearInput() {
    (instance.refs.insert_input as TextField).value = '';
    (instance.refs.insert_output as TextField).value = '';
    (instance.refs.insert_stat as HTMLElement).innerText = ''
}
function copy() {
    writeTextToClipboard((instance.refs.insert_output as TextField).value);
}
</script>

<template>
<div>
    <h1>Insert</h1>
    <mdui-text-field label="Input" autosize min-rows="4" ref="insert_input"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button variant="text" @click="clearInput">
            Clear
            <mdui-icon-clear slot="icon"></mdui-icon-clear>
        </mdui-button>
        <mdui-button @click="insert">
            Insert
            <mdui-icon-add slot="icon"></mdui-icon-add>
        </mdui-button>
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
    </div>
    <mdui-text-field readonly label="Output" autosize min-rows="4" ref="insert_output"></mdui-text-field>
    <div class="buttons_row">
        <mdui-button @click="copy">
            Copy
            <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
        </mdui-button>
    </div>
    <p ref="insert_stat"></p>
</div>
</template>

<style scoped>
#dropdown {
    --z-index: 10;
}
mdui-menu {
    text-align: left;
}
.buttons_row {
    margin: 0px;
}
mdui-button {
    margin-bottom: 0.2rem;
    margin-top: 0.3rem;
}
</style>

