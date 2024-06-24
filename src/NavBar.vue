<script lang="ts">
import 'mdui/mdui.css';
import 'mdui/components/navigation-bar.js';
import 'mdui/components/navigation-bar-item.js';
import '@mdui/icons/format-list-bulleted.js';
import '@mdui/icons/add.js';
import '@mdui/icons/remove.js';
import '@mdui/icons/lock--outlined.js';
import '@mdui/icons/lock-open--outlined.js';
import type { NavigationBar } from 'mdui/components/navigation-bar.js';
import type { NavigationBarItem } from 'mdui/components/navigation-bar-item.js';
export default {
    mounted() {
        this.$refs.navbar.addEventListener('change', this.onChange);
    },
    methods: {
        onChange() {
            console.log(this.$refs.navbar.value);
        }
    }
} 
</script>

<template>
<mdui-navigation-bar value="home" label-visibility="labeled" ref="navbar">
    <mdui-navigation-bar-item value="add">
        Add
        <mdui-icon-add slot="icon"></mdui-icon-add>
    </mdui-navigation-bar-item>
    <mdui-navigation-bar-item value="remove">
        Remove
        <mdui-icon-remove slot="icon"></mdui-icon-remove>
    </mdui-navigation-bar-item>
    <mdui-navigation-bar-item value="home">
        Home
        <mdui-icon-format-list-bulleted slot="icon"></mdui-icon-format-list-bulleted>
    </mdui-navigation-bar-item>
    <mdui-navigation-bar-item value="encode">
        Encode
        <mdui-icon-lock--outlined slot="icon"></mdui-icon-lock--outlined>
    </mdui-navigation-bar-item>
    <mdui-navigation-bar-item value="decode">
        Decode
        <mdui-icon-lock-open--outlined slot="icon"></mdui-icon-lock-open--outlined>
    </mdui-navigation-bar-item>
</mdui-navigation-bar>
</template>

<style scoped lang="scss" src="./style.scss"></style>
