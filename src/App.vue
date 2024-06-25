<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import NavBar from './NavBar.vue'
import Home from './Home.vue'
import Insert from './Insert.vue'
const instance = getCurrentInstance()
const currentPage = ref('home')
function switchPage() {
    currentPage.value = instance.refs.navbar.$refs.navigation_bar.value
}
onMounted(()=>{
    instance.refs.navbar.$refs.navigation_bar.addEventListener('change', switchPage)
})
</script>

<template>
    <Home :class="[currentPage === 'home'? 'page': 'hide']" ref="home"/>
    <Insert :class="[currentPage === 'insert'? 'page': 'hide']" ref="insert"/>
    <NavBar ref="navbar"/>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.hide {
    display: none;
}
</style>

