<script setup>
import { ref, onMounted } from "vue"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore";
import AddPost from "../components/AddPost.vue"
import Post from "../components/Post.vue"
const posts = ref([])

onMounted(async () => {
    onSnapshot(collection(db, "posts"), (querySnapshot) => {
        const fbposts = []
        querySnapshot.forEach((doc) => {
            const post = {
                "id": doc.id,
                "userName": doc.data().userName,
                "userId": doc.data().userId,
                "content": doc.data().content,
                "date": doc.data().date,
                "media": doc.data().media,
                "likes":doc.data().likes,
                "retweet": doc.data().retweet,
                "share": doc.data().share,
                "commentsCount": doc.data().commentsCount,
                "comments": doc.data().comments
            }
            fbposts.push(post)
        })
        posts.value = fbposts
    })
})

</script>

<template>
    <div class="container">
        <div class="branch">
            <h2>Home</h2>
            <img src="../assets/images/feed/stars.svg" alt="">
        </div>
        <AddPost />
        <div class="decor"></div>
        <Post v-for="(post, idx) in posts" :key="idx" :postData="post" />
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
}</style>