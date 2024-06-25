<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import writeTextToClipboard from './utils.ts'
import 'mdui/components/button-icon.js'
import '@mdui/icons/content-copy.js'
const instance = getCurrentInstance()
const props = defineProps({
    label: String,
    zwchar: String
})
function copy() {
    writeTextToClipboard(instance.props.zwchar)
}
</script>

<template>
<div>
    <h3>{{label}}</h3>
    <mdui-button-icon @click="copy">
        <mdui-icon-content-copy></mdui-icon-content-copy>
    </mdui-button-icon>
</div>
</template>

<style scoped lang="scss">
mdui-button-icon {
    margin-left: 1rem;
}
div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14rem;
    text-align: center;
}
</style>
