<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import NavBar from './NavBar.vue'
import NavRail from './NavRail.vue'
import Home from './Home.vue'
import Insert from './Insert.vue'
import Remove from './Remove.vue'
import Encode from './Encode.vue'
import Decode from './Decode.vue'
const instance = getCurrentInstance()!
const currentPage = ref('home')
var nav = ref('navbar')
document.getElementById('html')!.className = window.matchMedia("(prefers-color-scheme: dark)").matches? 'mdui-theme-dark': 'mdui-theme-light'
if(window.screen.height < window.screen.width) { nav.value = 'navrail' }
function switchPage() {
    currentPage.value = instance.refs[nav.value].$refs[nav.value].value
}
onMounted(()=>{
    instance.refs[nav.value].$refs[nav.value].addEventListener('change', switchPage)
})
</script>

<template>
    <Home v-if="currentPage=='home'" class="page" ref="home"/>
    <Insert v-if="currentPage=='insert'" class="page" ref="insert"/>
    <Remove v-if="currentPage=='remove'" class="page" ref="remove"/>
    <Encode v-if="currentPage=='encode'" class="page" ref="encode"/>
    <Decode v-if="currentPage=='decode'" class="page" ref="decode"/>
    <NavRail v-if="nav=='navrail'" ref="navrail"/>
    <NavBar v-if="nav=='navbar'" ref="navbar"/>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

