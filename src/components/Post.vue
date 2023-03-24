<script setup>
import { ref } from "vue"
import { db } from "../firebase/config"
import { deleteDoc, getDocs, collection, doc, updateDoc } from "firebase/firestore";
const postLiked = ref(false)
const postSettingsShow = ref(false)
const props = defineProps([
    "postData",
    "userProfile"
])
async function deletePost(id) {
    const users = await getDocs(collection(db, "users"))
    users.forEach(document => {
        deleteDoc(doc(db, "users", document.id, "posts", id))
        postSettingsShow.value = false
        updateDoc(doc(db, "users", document.id), {
            userPostsCount: document.data().userPostsCount - 1
        })
    });
}
</script>

<template>
    <div class="post-body">
        <img class="user-pic" :src="userProfile.userAvatar" alt="">
        <div class="post">
            <div @click="postSettingsShow = !postSettingsShow" class="post-settings">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                        fill="#000000" />
                    <path
                        d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                        fill="#000000" />
                    <path
                        d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                        fill="#000000" />
                </svg>
            </div>
            <ul v-show="postSettingsShow" class="post-options">
                <li @click="deletePost(postData.id)">Delete</li>
                <li>Edit</li>
            </ul>
            <div class="post-data">
                <div class="post-user-name">{{ postData.userName }}</div>
                <div class="post-user-id">@{{ postData.userId }}</div>
                <div class="post-date">{{ postData.date }}</div>
            </div>
            <div class="post-content">
                <p>{{ postData.content }}</p>
            </div>
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