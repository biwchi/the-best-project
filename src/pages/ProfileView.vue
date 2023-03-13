<template>
     <div class="profile">
        <div class="profile-btn-back">
            <button><img src="../assets/images/profile/back-arrow.svg" alt=""></button>
            <div class="profile-name">
                <p>Sergey Bondar</p>
                <span>1 Tweets</span>
            </div>
        </div>
        <div class="profile-edit">
            <div class="profile-bg"><img src="https://c.wallhere.com/photos/72/51/Elden_Ring_fantasy_architecture-2108817.jpg!d" alt="bg"></div>
            <div class="profile-avatar-edit">
                <div class="profile-avatar"><img src="../assets/images/user-pic.jfif" alt=""></div>
                <button class="profile-edit-btn">Edit profile</button>
            </div>
        </div>
        <div class="profile-info">
            <h2 class="profile-user-name"></h2>
            <span class="profile-user-id"></span>
            <div class="profile-spec"></div>
            <ul class="profile-data">
                <li>london</li>
                <li>joined September 2022</li>
            </ul>
            <div class="profile-stats">
                <div class="profile-following">
                    <span>3</span>
                    <p>Following</p>
                </div>
                <div class="profile-followers">
                    <span>432</span>
                    <p>Followers</p>
                </div>
            </div>
        </div>
        <div class="profile-tweets">
            <Post v-for="(post, idx) in postsData" :key="idx" :postData="post"/>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {useRoute} from "vue-router"
import Post from "../components/Post.vue";
import Posts from "../assets/data/posts.json"
const postsData = ref(Posts)
const route = useRoute()

</script>