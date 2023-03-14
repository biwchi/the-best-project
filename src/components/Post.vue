<script setup>
import { ref } from "vue"
import Posts from "../assets/data/posts.json"
const postsData = ref(Posts)
const postLiked = ref(false)
const props = defineProps([
    "postData"
])

    
</script>

<template>
    <div class="post-body">
        <img class="user-pic" src="../assets/images/user-pic.jfif" alt="">
        <div class="post">
            <div class="post-data">
                <div class="post-user-name">{{ postData.userName }}</div>
                <div class="post-user-id">@{{ postData.userId }}</div>
                <div class="post-date">{{ postData.date }}</div>
            </div>
            <div class="post-content"><p>{{ postData.content }}</p></div>
            <div v-show="!postData.media == ''" class="post-media"><img :src="postData.media" alt=""></div>
            <ul class="post-actions">
                <li class="post-comments">
                    <img src="../assets/images/feed/comment.svg" alt="comments">
                    <span>{{ postData.commentsCount }}</span>
                </li>
                <li class="post-retweets">
                    <img src="../assets/images/feed/retweet.svg" alt="retweet">
                    <span>{{ postData.retweet }}</span>
                </li>
                <li @click="postLiked = !postLiked" class="post-likes" :class="{ liked: postLiked }">
                    <div class="post-like"></div>
                    <span>{{ postData.likes }}</span>
                </li>
                <li class="post-share">
                    <img src="../assets/images/feed/share.svg" alt="shre">
                    <span>{{ postData.share }}</span>
                </li>
            </ul>
            <button class="post-thread-btn">Show this thread</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.user-pic {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}
</style>