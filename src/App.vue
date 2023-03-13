<script setup>
import SideBar from "./components/SideBar.vue"
import Home from "./pages/Home.vue";

</script>

<template>
    <div class="body">
        <SideBar />
        <div></div>
        <Home />
    </div>
</template>

<style scoped lang="scss">


.body {
    margin: 0 auto;
    max-width: 1210px;
    padding: 0px 15px;
    min-height: 100vh;
    display: grid; 
    grid-template-columns: 270px 1fr 350px
}

</style>
