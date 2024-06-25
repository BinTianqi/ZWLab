<script setup lang="ts">
import 'mdui/components/navigation-rail.js'
import 'mdui/components/navigation-rail-item.js'
import '@mdui/icons/format-list-bulleted.js'
import '@mdui/icons/add.js'
import '@mdui/icons/remove.js'
import '@mdui/icons/lock--outlined.js'
import '@mdui/icons/lock-open--outlined.js'
</script>

<template>
<mdui-navigation-rail value="home" label-visibility="labeled" ref="navrail">
    <mdui-navigation-rail-item value="insert">
        Insert
        <mdui-icon-add slot="icon"></mdui-icon-add>
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item value="remove">
        Remove
        <mdui-icon-remove slot="icon"></mdui-icon-remove>
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item value="home">
        Home
        <mdui-icon-format-list-bulleted slot="icon"></mdui-icon-format-list-bulleted>
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item value="encode">
        Encode
        <mdui-icon-lock--outlined slot="icon"></mdui-icon-lock--outlined>
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item value="decode">
        Decode
        <mdui-icon-lock-open--outlined slot="icon"></mdui-icon-lock-open--outlined>
    </mdui-navigation-rail-item>
</mdui-navigation-rail>
</template>

<style scoped lang="scss">

</style>

