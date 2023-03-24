<template>
    <div class="profile">
        <div class="profile-btn-back">
            <button @click="router.go(-1)"><img src="../assets/images/profile/back-arrow.svg" alt=""></button>
            <div class="profile-name">
                <p>{{ userProfile.userName }}</p>
                <span>{{ userProfile.userPostsCount }} posts</span>
            </div>
        </div>
        <div class="profile-edit">
            <div class="profile-bg"><img :src="userProfile.userProfileBackground" alt="bg"></div>
            <div class="profile-avatar-edit">
                <div class="profile-avatar"><img :src="userProfile.userAvatar" alt=""></div>
                <button @click="openPopUp = !openPopUp" class="profile-edit-btn">Edit profile</button>
            </div>
        </div>
        <div class="profile-info">
            <h2 class="profile-user-name">{{ userProfile.userName }}</h2>
            <span class="profile-user-id">@{{ userProfile.userId }}</span>
            <div v-if="userProfile.userSpec" class="profile-spec">{{ userProfile.userSpec }}</div>
            <ul class="profile-data">
                <li v-if="userProfile.userLocation"><img src="../assets/images/profile/Location.svg" alt=""><span>{{
                    userProfile.userLocation }}</span></li>
                <li><img src="../assets/images/profile/Calendar.svg" alt=""><span>joined {{ userProfile.userJoinDate
                }}</span></li>
            </ul>
            <div class="profile-stats">
                <div class="profile-following">
                    <span>{{ userProfile.userFollowing }}</span>
                    <p>Following</p>
                </div>
                <div class="profile-followers">
                    <span>{{ userProfile.userFollowers }}</span>
                    <p>Followers</p>
                </div>
            </div>
        </div>
        <div class="profile-buttons">
            <button class="prifle-btn-tweets active">Tweets</button>
            <button class="prifle-btn-media">Media</button>
        </div>
        <div class="profile-tweets">
            <Post v-for="(userPost, idx) in userPosts" :key="idx" :userProfile="userProfile" :postData="userPost" />
        </div>
        <Transition>
            <div class="edit-popup" v-show="openPopUp">
                <div class="edit-popup-body">
                    <div class="edit-popup-close-btn" @click="openPopUp = !openPopUp">X</div>
                    <div class="edit-popup-profile-pic"><input type="file" name="avatar" id="profPic"
                            @change="changeAvatar"><label for="profPic"><img :src="userProfile.userAvatar" alt=""></label>
                        <p>Change your profile picture</p>
                    </div>
                    <div class="edit-popup-profile-bg"><input type="file" name="changeBackground" id="changeBackground"
                            @change="changeBackground"><label for="changeBackground"><img
                                :src="userProfile.userProfileBackground" alt=""></label>
                        <p>Change your profile picture</p>
                    </div>

                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"
import { db, auth } from "../firebase/config"
import { collection, updateDoc, doc, getDoc, getDocs, query, onSnapshot, QuerySnapshot } from "firebase/firestore";
import Post from "../components/Post.vue";
import router from "../router/index"
const userPosts = ref([])
const userProfile = ref({})
const openPopUp = ref(false)
const userAvatar = ref("")
const userAvatarFile = ref("")
const userBackground = ref("")
const userBackgroundFile = ref("")
onMounted(async () => {
    const userProfilePostsRef = query(collection(db, "users", auth.currentUser.uid, "posts"))
    const getUserPosts = onSnapshot(userProfilePostsRef, (querySnapshot) => {
        const arrUserPosts = []
        querySnapshot.forEach((post) => {
            const userPost = {
                "id": post.id,
                "userName": post.data().userName,
                "userId": post.data().userId,
                "content": post.data().content,
                "date": post.data().date,
                "media": post.data().media,
                "likes": post.data().likes,
                "retweet": post.data().retweet,
                "share": post.data().share,
                "commentsCount": post.data().commentsCount,
                "comments": post.data().comments,
                "postLifeTime": post.data().postLifeTime
            }
            arrUserPosts.push(userPost)
        })
        userPosts.value = arrUserPosts.sort((post, post1) => post1.postLifeTime - post.postLifeTime, 0)
    })

    const currentUserIs = await getDoc(doc(db, "users", auth.currentUser.uid))
    const currentUser = {
        "uid": currentUserIs.data().uid,
        "userName": currentUserIs.data().userName,
        "userId": currentUserIs.data().userId,
        "userAvatar": currentUserIs.data().userAvatar,
        "userProfileBackground": currentUserIs.data().userProfileBackground,
        "userLocation": currentUserIs.data().userLocation,
        "userFollowing": currentUserIs.data().userFollowing,
        "userFollowers": currentUserIs.data().userFollowers,
        "userJoinDate": currentUserIs.data().userJoinDate,
        "userPostsCount": currentUserIs.data().userPostsCount,
    }
    userProfile.value = currentUser
})

function changeAvatar(e) {
    userAvatar.value = e.target.files
    let fileReader = new FileReader()
    fileReader.onload = function (event) {
        userAvatarFile.value = event.target.result
    }
    fileReader.readAsDataURL(userAvatar.value[0])
}

function changeBackground(e) {
    userBackground.value = e.target.files
    let fileReader = new FileReader()
    fileReader.onload = function (event) {
        userBackgroundFile.value = event.target.result
    }
    fileReader.readAsDataURL(userBackground.value[0])
}

watch(userBackgroundFile, async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
        userProfileBackground: userBackgroundFile.value
    })
})

watch(userAvatarFile, async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
        userAvatar: userAvatarFile.value,
    })
})

</script>