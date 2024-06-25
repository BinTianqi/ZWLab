<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import NavBar from './NavBar.vue'
import Home from './Home.vue'
import Insert from './Insert.vue'
import Remove from './Remove.vue'
import Encode from './Encode.vue'
import Decode from './Decode.vue'
const instance = getCurrentInstance()!
const currentPage = ref('home')
function switchPage() {
    currentPage.value = instance.refs.navbar.$refs.navigation_bar.value
}
onMounted(()=>{
    instance.refs.navbar.$refs.navigation_bar.addEventListener('change', switchPage)
})
</script>

<template>
    <Home v-if="currentPage=='home'" class="page" ref="home"/>
    <Insert v-if="currentPage=='insert'" class="page" ref="insert"/>
    <Remove v-if="currentPage=='remove'" class="page" ref="remove"/>
    <Encode v-if="currentPage=='encode'" class="page" ref="encode"/>
    <Decode v-if="currentPage=='decode'" class="page" ref="decode"/>
    <NavBar ref="navbar"/>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

