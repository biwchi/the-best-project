<script setup>
import { ref } from "vue"
import AddPost from "../components/AddPost.vue"
import Post from "../components/Post.vue"
import Posts from "../assets/data/posts.json"
const postsData = ref(Posts)


</script>

<template>
    <div class="container">
        <div class="branch">
            <h2>Home</h2>
            <img src="../assets/images/feed/stars.svg" alt="">
        </div>
        <AddPost/>
        <div class="decor"></div>
        <Post v-for="(post, idx) in postsData" :key="idx" :postData="post"/>
    </div>
</template>

<style scoped lang="scss">
.container {
    border-right: 1px solid var(--dark4);
    border-left: 1px solid var(--dark4);
}
.branch {
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px var(--dark4) solid;
    h2 {
        font-size: 19px;
        font-weight: 700;
        padding: 15px 0;
    }
}
.decor {
    width: 100%;
    height: 10px;
    background-color: var(--dark2);
    border-bottom: 1px var(--dark4) solid;
}
</style>